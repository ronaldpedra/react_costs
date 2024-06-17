import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Container from "../layout/Container";
import Message from "../single/Message";

export default function Projects() {

    const location = useLocation()
    const [message, setMessage] = useState({})
    // const [showMessage, setShowMessage] = useState(false)

    useEffect(() => {
        if (location.state) {
            setMessage(location.state)
            window.history.replaceState({}, '')
        }
        const timer = setTimeout(() => {
            setMessage({})
        }, 2000)
        return () => clearTimeout(timer)
    }, [location.state])

    return (
        <Container>
            <div>
                <h1>Projetos</h1>
                {message && (
                    <Message
                        type={message.type}
                        text={message.text}
                    />
                )}
            </div>
        </Container>
    )
}