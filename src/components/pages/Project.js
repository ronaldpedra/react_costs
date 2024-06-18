import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "../../css/pages/Project.module.css";
import Container from "../layout/Container";
import ProjectForm from "../wraped/ProjectForm";
import Loading from "../single/Loading";
import Button from "../single/Button";
import Message from "../single/Message";
import ServiceForm from "../wraped/ServiceForm";

export default function Project() {
  const { id } = useParams();
  const [project, setProject] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [showServiceForm, setShowServiceForm] = useState(false);
  const [message, setMessage] = useState()

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/projects/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setProject(data);
        })
        .catch((err) => console.log(err));
    }, 1000);
    return;
  }, [id]);

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm);
  }

  function toggleServiceForm() {
    setShowServiceForm(!showServiceForm);
  }

  function editProject(project) {
    // budget validation
    if (parseFloat(project.budget) < parseFloat(project.cost)) {
      setMessage({
        type: 'error',
        text: 'O Orçamento não pode ser menor do que o Custo do Projeto.',
      })
      return false
    }
    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProject(data);
        setShowProjectForm(!showProjectForm);
        setMessage({
          type: 'success',
          text: 'Projeto Atualizado com Sucesso!',
        })
      });
  }

  function moeda(valor) {
    return Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(valor);
  }

  function createService(project) {
    const lastService = project.services[project.services.length - 1]

    lastService.id = uuidv4()

    const newCost = parseFloat(project.cost) + parseFloat(lastService.cost)

    // Maximum value validation
    if (newCost > parseFloat(project.budget)) {
      setMessage({
        type: 'error',
        text: 'Orçamento Ultrapassado. Verifique o valor do Serviço.'
      })
      project.services.pop()
      return false
    }

    // add service cost to project total cost
    project.cost = newCost

    // update project
    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(project)
    })
    .then((resp) => resp.json())
    .then((data) => {
      // exibir os serviços
      console.log(data)
      setShowServiceForm(!showServiceForm)
    })
    .catch((err) => console.log(err))
  }

  return (
    <>
      {project.name ? (
        <div className={styles.project_details}>
          <Container customClass="column">
            {message && (
              <Message
                type={message.type}
                text={message.text}
                handleMessage={setMessage}
              />
            )}
            <div className={styles.details_container}>
              <h1>Projeto: {project.name}</h1>
              <Button
                handleRemove={toggleProjectForm}
                btnText={!showProjectForm ? "Editar Projeto" : "Fechar"}
              />
              {!showProjectForm ? (
                <div className={styles.project_info}>
                  <p>
                    <span>Categoria: </span>
                    {project.category.name}
                  </p>
                  <p>
                    <span>Orçamento Total: </span>
                    {moeda(project.budget)}
                  </p>
                  <p>
                    <span>Total Utilizado: </span>
                    {moeda(project.cost)}
                  </p>
                </div>
              ) : (
                <div className={styles.project_info}>
                  <ProjectForm
                    projectData={project}
                    handleSubmit={editProject}
                    btnText={"Concluir Edição"}
                  />
                </div>
              )}
            </div>
            <div className={styles.service_form_container}>
              <h2>Adicione Serviços</h2>
              <Button
                handleRemove={toggleServiceForm}
                btnText={!showServiceForm ? "Adicionar Serviço" : "Fechar"}
              />
              <div className={styles.project_info}>
                {showServiceForm && (
                  <ServiceForm
                  btnText={'Adicionar Serviço'}
                  handleSubmit={createService}
                  projectData={project}/>
                )}
              </div>
            </div>
            <h2>Serviços</h2>
            <Container customClass='start'>
              {project.services > 0 ? {
                project.services.map()

              } : (
                <div><h4>Não há serviços cadastrados</h4></div>
              )}
            </Container>
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
