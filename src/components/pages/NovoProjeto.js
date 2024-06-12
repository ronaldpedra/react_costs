import Form from "../forms/Form"
import styles from "./css/NovoProjeto.module.css"

function NovoProjeto() {
    return (
        <div className={styles.novoprojeto_container}>
            <h1>Criar Projeto</h1>
            <p>Crie o seu projeto para depois adicionar os serviços</p>
            <Form />
        </div>
    )
}

export default NovoProjeto