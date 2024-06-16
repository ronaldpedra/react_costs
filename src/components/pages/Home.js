import styles from "../../css/pages/Home.module.css"
import LinkButton from "../single/LinkButton"

export default function Home() {
    return (
        <div className={styles.home_container}>
            <h4>Bem-vindo ao Costs</h4>
            <p>Crie, Planeje e Gerencie seus projetos aqui!!!</p>
            <LinkButton
                to={'/'}
                text={'Criar Projeto'}
            />
        </div>
    )
}