import { useState } from "react"
import ProjectForm from "../projectForm/ProjectForm"
import styles from "./css/NovoProjeto.module.css"
import Message from "../message/Message"

function NovoProjeto() {

    const [message, setMessage] = useState({})

    function criarProjeto() { }

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