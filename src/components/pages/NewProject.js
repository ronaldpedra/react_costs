import { useNavigate } from "react-router-dom"
import styles from "../../css/pages/NewProject.module.css"
import Container from "../layout/Container"
import ProjectForm from "../wraped/ProjectForm"

export default function NewProject() {

    const navigate = useNavigate()

    function createProject(project) {

        // initialize costs and services
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
                // message
                // redirect
                const state = {"type": 'success', "text": 'Projeto criado com sucesso!'}
                navigate('/projects', {state})
            })
            .catch((err) => console.log(err))
    }

    return (
        <Container customClass={'center'}>
            <div className={styles.newproject_container}>
                <h1>Criar Projeto</h1>
                <p>Crie seu projeto para depois adicionar os serviços</p>
                <ProjectForm handleSubmit={createProject} btnText={'Criar Projeto'}/>
            </div>
        </Container>
    )
}