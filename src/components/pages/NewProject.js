import Container from "../layout/Container";
import Form from "../wraped/CreateProjectForm";

export default function NewProject() {
    return (
        <Container customClass='center'>
            <h1>Criar Projeto</h1>
            <h6>Todos os campos são de preenchimento obrigarório.</h6>
            <Form />
        </Container>
    )
}