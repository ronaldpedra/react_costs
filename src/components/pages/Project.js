import Container from "../layout/Container";
import styles from "../../css/pages/Project.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../single/Button";
import CreateProjectForm from "../wraped/CreateProjectForm";
import Message from "../single/Message";
import CreateServiceForm from "../wraped/CreateServiceForm";
import ServiceCard from "../wraped/ServiceCard";
import { v4 as uuidv4 } from "uuid";

export default function Project() {
  const { id } = useParams();
  const [project, setProject] = useState({});
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [showServiceForm, setShowServiceForm] = useState(false);
  const [message, setMessage] = useState({});
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProject(data);
        setServices(data.services);
      })
      .catch((err) => console.log(err));
  }, [id]);

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm);
  }
  function toggleServiceForm() {
    setShowServiceForm(!showServiceForm);
  }

  function moeda(valor) {
    return Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(valor);
  }

  function editProject(project) {
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
        setMessage({
          type: "success",
          title: `${data.name}.`,
          body: "Atualizado com sucesso!",
        });
      })
      .catch((err) => console.log(err));
    setShowProjectForm(!showProjectForm);
  }

  function createService(service) {
    let newCost = parseFloat(project.cost) + parseFloat(service.cost);
    if (newCost > project.budget) {
      // message
      return false;
    }
    project.cost = newCost;
    project.services.push(service);

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
        setShowServiceForm(!showServiceForm);
        // mensagem
      })
      .catch((err) => console.log(err));
  }

  function removeService(service_id) {

  }

  return (
    <Container>
      <h1>{project.name}</h1>
      <Message
        type={message.type}
        title={message.title}
        body={message.body}
        handleMessage={setMessage}
      />
      <Container customClass="start">
        <div className={styles.row}>
          <h4>Detalhes do Projeto</h4>
          <div className={styles.ajuste}>
            <Button
              customClass="fixed_width"
              type={"button"}
              btnText={!showProjectForm ? "Editar Projeto" : "Fechar"}
              handleOnClick={toggleProjectForm}
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className={styles.project_data}>
          {!showProjectForm && project.name && (
            <>
              <p>
                <span>Categoria: </span>
                {project.category.name}
              </p>
              <p>
                <span>Orçamento Total: </span>
                {moeda(project.budget)}
              </p>
              <p>
                <span>Custo Total: </span>
                {moeda(project.cost)}
              </p>
            </>
          )}
          {showProjectForm && (
            <CreateProjectForm
              handleSubmit={editProject}
              buttonText={"Salvar Alterações"}
              projectData={project}
            />
          )}
        </div>
      </Container>
      <Container customClass="start">
        <div className={styles.row}>
          <h4>Serviços</h4>
          <div>
            <Button
              customClass={
                showServiceForm ? "fixed_width_close" : "fixed_width"
              }
              type={"button"}
              btnText={!showServiceForm ? "Criar Serviço" : "Fechar"}
              handleOnClick={toggleServiceForm}
            />
          </div>
        </div>
      </Container>
      <Container customClass="start">
        {!showServiceForm && services.length > 0 && (
          <>
            {services.map((service) => (
              <ServiceCard
                id={service.id}
                name={service.name}
                cost={service.cost}
                description={service.description}
                handleRemove={removeService}
              />
            ))}
          </>
        )}
        {!showServiceForm && services.length === 0 && (
          <p>Não há serviços cadastrados.</p>
        )}
        {showServiceForm && (
          <CreateServiceForm
            linkButtonTo={""}
            linkButtonText={"Cancelar"}
            handleClick={toggleServiceForm}
            cancelButton={true}
            buttonText={"Criar Serviço"}
            handleSubmit={createService}
          />
        )}
      </Container>
    </Container>
  );
}
