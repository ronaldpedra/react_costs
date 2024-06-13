import { useLocation } from "react-router-dom"
import styles from "./css/Projetos.module.css"
import Message from "../message/Message"

function Projetos() {

    const location = useLocation()
    let message ={}
    if (location.state) {
        message = location.state.message
    }

    return (
        <div>
            <Message
            type={message.type}
            text={message.text} />
            <h1>Projetos</h1>
        </div>
    )
}

export default Projetos