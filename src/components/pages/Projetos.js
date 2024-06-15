import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./css/Projetos.module.css";
import Message from "../message/Message";
import LinkButton from "../linkButton/LinkButton";
import Container from "../layout/Container";
import ProjectCard from "../projectCard/ProjectCard";

function Projetos() {
  const location = useLocation();
  const [message, setMessage] = useState();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const mensagem = location.state
    if (mensagem) {
      setMessage(mensagem)
    }    
  }, [location.state])

  useEffect(() => {
    fetch("http://localhost:5000/projects", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProjects({});
        setProjects(data);
      })
      .catch((err) => console.log(err));
  }, []);

  function removeProject(id) {
    setMessage()
    fetch(`http://localhost:5000/projects/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(() => {
      setProjects(projects.filter((project) => project.id !== id))
      setMessage({
        type: 'success',
        text: 'Projeto removido com sucesso!'
      })
    })
    .catch(err => console.log(err))
  }

  return (
    
    <div className={styles.project_container}>
      {message && (
        <Message
          type={message.type}
          text={message.text}
          setMessage={setMessage}
        />
      )}

      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to="/novoprojeto" text="Criar Projeto" />
      </div>
      <Container customClass="start">
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              id={project.id}
              name={project.name}
              budget={project.budget}
              category={project.category.name}
              handleRemove={removeProject}
              key={project.id}
            />
          ))}
          {projects.length === 0 && (
            <p>Não há projetos cadastrados.</p>
          )}
      </Container>
    </div>
  );
}

export default Projetos;
