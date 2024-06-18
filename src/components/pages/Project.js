import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "../../css/pages/Project.module.css";
import Container from "../layout/Container";
import ProjectForm from "../wraped/ProjectForm";
import Loading from "../single/Loading";
import Button from "../single/Button";
import Message from "../single/Message";

export default function Project() {
  const { id } = useParams();
  const [project, setProject] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
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

  function editProject(project) {
    if (message) {
      setMessage('')
    }
    
    // budget validation
    console.log(parseFloat(project.budget) < parseFloat(project.cost))
    if (parseFloat(project.budget) < parseFloat(project.cost)) {
      setMessage({
        type: 'error',
        text: 'O Orçamento não pode ser menor do que o Custo do Projeto.'
      })
      console.log(message)
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
          text: 'Projeto Atualizado com Sucesso!'
        })
      });
  }

  function moeda(valor) {
    return Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(valor);
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
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
