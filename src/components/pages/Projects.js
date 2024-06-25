import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Container from "../layout/Container";
import Message from "../single/Message";
import styles from "../../css/pages/Projects.module.css";
import LinkButton from "../single/LinkButton";
import ProjectCard from "../wraped/ProjectCard";

export default function Projects() {
  const [message, setMessage] = useState({});
  const [projects, setProjects] = useState([]);

  const location = useLocation();
  let mensagem = location.state;
  useEffect(() => {
    if (mensagem) {
      setMessage(mensagem);
      window.history.replaceState({}, "");
    }
  }, [mensagem]);

  useEffect(() => {
    fetch(`http://localhost:5000/projects`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProjects(data);
      })
      .catch((err) => console.log(err));
  }, []);

  function removeProject(id) {
    let projectsUpdated = []
    fetch(`http://localhost:5000/projects/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        projectsUpdated = projects.filter((project) => project.id !== id);
        setProjects(projectsUpdated);
        //mensagem

      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <div className={styles.row}>
        <h1>Meus Projetos</h1>
        <div className={styles.ajuste}>
          <LinkButton to={"/newproject"} btnText={"Criar Projeto"} />
        </div>
      </div>
      <Message
        type={message.type}
        title={message.title}
        body={message.body}
        handleMessage={setMessage}
      />
      <Container customClass="start">
        {projects.map((project) => (
          <ProjectCard
            id={project.id}
            name={project.name}
            category={project.category.name}
            budget={project.budget}
            handleRemove={removeProject}
          />
        ))}
        {projects.length === 0 && (
          <div>Não há projetos registrados.</div>
        )}
      </Container>
    </>
  );
}
