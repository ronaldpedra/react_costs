import Container from "../layout/Container";
import Savings from "../../img/savings.svg"
import styles from "../../css/pages/Home.module.css"

export default function Home() {
    return (
        <Container customClass='center_column'>
            <h1>Bem-Vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <button className={styles.btn}>Criar Projeto</button>
            <img src={Savings} alt="Savings" />
        </Container>



    )
}