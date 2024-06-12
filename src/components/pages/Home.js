import styles from "./css/Home.module.css"
import Savings from "../../img/savings.svg"
import Button from "../button/Button"

function Home() {
    return (
        <div className={styles.home_container}>
            <h1>Bem-Vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <Button to='/novoprojeto' texto='Criar Projeto' />
            <img src={Savings} alt="Savings" />
        </div>
    )
}

export default Home