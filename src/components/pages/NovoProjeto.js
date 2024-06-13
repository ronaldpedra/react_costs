import ProjectForm from "../projectForm/ProjectForm"
import styles from "./css/NovoProjeto.module.css"

function NovoProjeto() {

    function criarProjeto() {}

    return (
        <div className={styles.novoprojeto_container}>
            <h1>Criar Projeto</h1>
            <p>Crie o seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={criarProjeto} btnText='Criar Projeto' />
        </div>
    )
}

export default NovoProjeto