import { useNavigate } from "react-router-dom";
import Container from "../layout/Container";
import CreateProjectForm from "../wraped/CreateProjectForm";

export default function NewProject() {

    const navigate = useNavigate()

    function createProject(project) {

        // initialize cost and services
        project.cost = 0
        project.services = []

        fetch(`http://localhost:5000/projects`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        })
            .then((resp) => resp.json())
            .then((data) => {
                // redirect
                // message
                const state = {
                    type: 'success',
                    title: `${data.name}.`,
                    body: 'Projeto criado com sucesso!'
                }
                navigate('/projects', { state })
            })
            .catch((err) => console.log(err))

    }

    return (
        <Container customClass='center'>
            <h1>Criar Projeto</h1>
            <h6>Todos os campos são de preenchimento obrigarório.</h6>
            <CreateProjectForm
                linkButtonText={'Cancelar'}
                buttonText={'Criar Projeto'}
                handleSubmit={createProject}
                cancelButton={true}
            />
        </Container>
    )
}