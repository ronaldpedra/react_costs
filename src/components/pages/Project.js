import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "../../css/pages/Project.module.css";
import Container from "../layout/Container";
import ProjectForm from "../wraped/ProjectForm";
import Loading from "../single/Loading";
import Button from "../single/Button";

import ConversorDeMoeda from "../../js/ConversorDeMoeda"

export default function Project() {
  const { id } = useParams();
  const [project, setProject] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);

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

    // budget validation
    if (parseFloat(project.budget) < parseFloat(project.cost)) {
        // Message
    }
    fetch(`http://localhost:5000/projects/${project.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(project)
    })
    .then((resp) => resp.json())
    .then((data) => {
        setProject(data)
        setShowProjectForm(!showProjectForm)
        // Message
    })
  }

  return (
    <>
      {project.name ? (
        <div className={styles.project_details}>
          <Container customClass="column">
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
                    {ConversorDeMoeda(project.budget)}
                  </p>
                  <p>
                    <span>Total Utilizado: </span>
                    {project.cost}
                  </p>
                </div>
              ) : (
                <div className={styles.project_info}>
                  <ProjectForm
                  projectData={project}
                  handleSubmit={editProject}
                  btnText={'Concluir Edição'}
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
