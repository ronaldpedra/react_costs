import styles from "../../css/pages/NewProject.module.css"
import Container from "../layout/Container"

export default function NewProject() {
    return (
        <Container>
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
        </div>
        </Container>
    )
}