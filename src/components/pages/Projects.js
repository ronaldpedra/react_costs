import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Container from "../layout/Container";
import Message from "../single/Message";

export default function Projects() {
    
    const location = useLocation()
    const [message, setMessage] = useState()

    useEffect(() => {
        if (location.state) {
            setMessage(location.state)
        }
    }, [location.state])

    return (
        <Container>
            <div>
                <h1>Projetos</h1>
                <Message
                type={message.type}
                text={message.text}
                />
            </div>
        </Container>

    )
}