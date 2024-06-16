import styles from "../../css/pages/NewProject.module.css"
import Container from "../layout/Container"
import ProjectForm from "../wraped/ProjectForm"

export default function NewProject() {
    return (
        <Container customClass={'center'}>
            <div className={styles.newproject_container}>
                <h1>Criar Projeto</h1>
                <p>Crie seu projeto para depois adicionar os serviços</p>
                <ProjectForm />
            </div>
        </Container>
    )
}