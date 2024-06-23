import { useEffect, useState } from "react";
import Container from "../layout/Container";
import Message from "../single/Message";
import { useLocation } from "react-router-dom";

export default function Projects() {

  const [message, setMessage] = useState({})

  const location = useLocation()

  let mensagem = location.state
  useEffect(() => {
    if (mensagem) {
      setMessage(mensagem)
      
    }
  }, [mensagem])

  return (
    <Container customClass='start'>
      <h1>Meus Projetos</h1>
      <Message
        type={message.type}
        title={message.title}
        body={message.body}
        handleMessage={setMessage}
      />
      <p>Olá Mundo!</p>

    </Container>
  )
}