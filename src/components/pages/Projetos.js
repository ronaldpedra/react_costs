import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./css/Projetos.module.css";
import Message from "../message/Message";
import LinkButton from "../linkButton/LinkButton";
import Container from "../layout/Container";
import ProjectCard from "../projectCard/ProjectCard";

function Projetos() {
  const location = useLocation();
  const [message, setMessage] = useState({});
  const [projects, setProjects] = useState([]);

  let mensagem
  if (location.state) {
    mensagem = location.state;
  }

  console.log(mensagem)


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

  return (
    
    <div className={styles.project_container}>
      {mensagem && (
        <Message
          type={mensagem.type}
          text={mensagem.text}
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
              handleRemove={""}
              key={project.id}
            />
          ))}
      </Container>
    </div>
  );
}

export default Projetos;
