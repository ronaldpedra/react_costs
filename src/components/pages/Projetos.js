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
        <>
         <div className={styles.projetos_container}>
            <Message
                type={mensagem.type}
                text={mensagem.text}
                setMessage={setMessage} />
           
                <h1>Meus Projetos</h1>
                <LinkButton to='/novoprojeto' text='Criar Projeto' />

           

        </div>
        </>
    )
}

export default Projetos