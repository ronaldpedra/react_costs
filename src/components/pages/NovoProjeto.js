import { useState } from "react"
import { useNavigate } from "react-router-dom"
import ProjectForm from "../projectForm/ProjectForm"
import styles from "./css/NovoProjeto.module.css"
import Message from "../message/Message"


function NovoProjeto() {

    const [message, setMessage] = useState({})
    const navigate = useNavigate()

    function criarProjeto(project) {
        fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            setMessage({
                type: 'success',
                text: `Projeto ${project.name} criado com sucesso`
            })
            navigate('/projetos', {message})
        })
        .catch((err) => console.log(err))
    }

    return (
        <div className={styles.novoprojeto_container}>
            {message && (
                <Message
                type={message.type}
                text={message.text}
                setMessage={setMessage} />
            )}
            <h1>Criar Projeto</h1>
            <p>Crie o seu projeto para depois adicionar os serviços</p>
            <ProjectForm
                handleSubmit={criarProjeto} 
                btnText='Criar Projeto'
                setMessage={setMessage} />
        </div>
    )
}

export default NovoProjeto