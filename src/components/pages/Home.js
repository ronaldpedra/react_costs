import Container from "../layout/Container";
import Savings from "../../img/savings.svg";
import styles from "../../css/pages/Home.module.css";
import LinkButton from "../Single/LinkButton";

export default function Home() {
  return (
    <Container customClass='center'>
      <div className={styles.home_items}>
        <h1>
          Bem-Vindo ao <span>Costs</span>
        </h1>
        <p>Comece a gerenciar os seus projetos agora mesmo!</p>
        <LinkButton to={'/newproject'} btntext={'Criar Projeto'} />
        <img src={Savings} alt="Savings" />
      </div>
    </Container>
  );
}
