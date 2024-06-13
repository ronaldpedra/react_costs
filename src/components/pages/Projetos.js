import { useLocation } from "react-router-dom"
import styles from "./css/Projetos.module.css"
import Message from "../message/Message"
import { useState } from "react"
import LinkButton from "../linkButton/LinkButton"

function Projetos() {

    const location = useLocation()
    const [message, setMessage] = useState({})
    let mensagem = {}
    if (location.state) {
        mensagem = location.state

    }

    return (
        <div>
            <Message
                type={mensagem.type}
                text={mensagem.text}
                setMessage={setMessage} />
            <div className={styles.projetos_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to='/novoprojeto' text='Criar Projeto' />

            </div>

        </div>
    )
}

export default Projetos