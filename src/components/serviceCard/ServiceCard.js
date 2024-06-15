import { BsFillTrashFill } from "react-icons/bs";
import styles from "../projectCard/ProjectCard.module.css"

function ServiceCard({ name, cost, description }) {

    function moeda(valor) {
        var valorMoeda = Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
        }).format(valor);
        return valorMoeda;
    }

    function removeService() { }

    return (
        <div className={styles.project_card_container}>
            <h4>{name}</h4>
            <p>
                <span>Custo:</span> {moeda(cost)}
            </p>
            <p>
                <span>Descrição:</span> {description}
            </p>
            <div className={styles.project_card_actions}>
                <button onClick={removeService}>
                    <BsFillTrashFill /> Excluir
                </button>
            </div>
        </div>
    )
}

export default ServiceCard