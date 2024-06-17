import { useLocation } from "react-router-dom";
import Container from "../layout/Container";
import Message from "../single/Message";
import styles from "../../css/pages/Projects.module.css"

export default function Projects() {

    const location = useLocation()

    let message = ''
    if (location.state) {
        message = location.state
    }

    return (
        <Container>
            <div className={styles.container}>
                <h1>Projetos</h1>
                <div className={styles.message}>
                {message && (
                    <Message
                        type={message.type}
                        text={message.text}
                    />
                )}
                </div>
            </div>
        </Container>
    )
}