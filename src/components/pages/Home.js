import styles from "../../css/pages/Home.module.css"
import LinkButton from "../single/LinkButton"
import Savings from "../../img/savings.svg"

export default function Home() {
    return (
        <div className={styles.home_container}>
            <h1>Bem-vindo ao <span>Costs</span></h1>
            <p>Crie, Planeje e Gerencie seus projetos aqui!!!</p>
            <LinkButton
                to={'/newproject'}
                text={'Criar Projeto'}
            />
            <img src={Savings} alt="Savings" />
        </div>
    )
}