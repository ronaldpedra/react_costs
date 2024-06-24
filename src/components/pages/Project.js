import Container from "../layout/Container";
import styles from "../../css/pages/Project.module.css"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../single/Button";
import CreateProjectForm from "../wraped/CreateProjectForm";
// import Message from "../single/Message";

export default function Project() {

    const { id } = useParams()
    const [project, setProject] = useState({})
    const [showProjectForm, setShowProjectForm] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((resp) => resp.json())
            .then((data) => {
                setProject(data)
            })
            .catch((err) => console.log(err))
    }, [id])

    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm)
    }

    return (
        <Container>
            <div className={styles.row}>
                <h1>{project.name}</h1>
                <div className={styles.ajuste}>
                    <Button
                        customClass='fixed_width'
                        type={'button'}
                        btnText={!showProjectForm ? 'Editar Projeto' : 'Fechar'}
                        handleOnClick={toggleProjectForm}
                    />
                </div>
            </div>
            <div>
                {!showProjectForm && (
                    <p>olá</p>
                )}
                {showProjectForm && (
                    <CreateProjectForm
                    projectData={project}
                    />
                )}
            </div>
            {/* <Message
                type={message.type}
                title={message.title}
                body={message.body}
                handleMessage={setMessage}
            /> */}
            <Container customClass="start">

            </Container>
        </Container>
    )
}