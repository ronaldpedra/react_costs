import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Container from "../layout/Container";
import Message from "../single/Message";

export default function Projects() {

    const location = useLocation()
    const [message, setMessage] = useState({})
    const [showMessage, setShowMessage] = useState(false)

    useEffect(() => {
        if (location.state) {
            setMessage(location.state)
            setShowMessage(!showMessage)
        }
        const timer = setTimeout(() => {
            setShowMessage(!showMessage)
            setMessage({})
        }, 5000)
        return () => clearTimeout(timer)
    }, [location.state])

    console.log(message)


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