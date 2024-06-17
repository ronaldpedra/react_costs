import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Container from "../layout/Container";
import Loading from "../single/Loading";
import Message from "../single/Message";
import styles from "../../css/pages/Projects.module.css";
import LinkButton from "../single/LinkButton";
import ProjectCard from "../wraped/ProjectCard";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);
  const [removeProjectMessage, setRemoveProjectMessage] = useState({});

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/projects`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setProjects(data);
          setRemoveLoading(true);
        })
        .catch((err) => console.log(err));
    }, 1000);
  }, []);

  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state;
  }

  function removeProject(id) {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then(() => {
        setProjects(projects.filter((project) => project.id !== id));
        setRemoveProjectMessage({
          type: "success",
          text: "Projeto removido com sucesso!",
        });
      })
      .catch((err) => console.log(err));
  }

  return (
    <Container>
      <div className={styles.container}>
        <div className={styles.title_container}>
          <h1>Meus Projetos</h1>
          <LinkButton to="/newproject" text="Novo Projeto" />
        </div>
        <div className={styles.message}>
          {message && <Message type={message.type} text={message.text} />}
          {removeProjectMessage && (
            <Message
              type={removeProjectMessage.type}
              text={removeProjectMessage.text}
            />
          )}
        </div>
        <Container customClass="start">
          {projects.length > 0 &&
            projects.map((project) => (
              <ProjectCard
                id={project.id}
                name={project.name}
                budget={project.budget}
                category={project.category.name}
                key={project.id}
                linkTo={""}
                linkText={"Editar"}
                btnText={"Excluir"}
                handleRemove={removeProject}
              />
            ))}
          {!removeLoading && <Loading />}
          {removeLoading && projects.length === 0 && (
            <p>Não há projetos cadastrados.</p>
          )}
        </Container>
      </div>
    </Container>
  );
}
