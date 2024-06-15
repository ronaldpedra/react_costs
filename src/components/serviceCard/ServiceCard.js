import { BsFillTrashFill } from "react-icons/bs";
import styles from "../projectCard/ProjectCard.module.css"

function ServiceCard({ id, name, cost, description, customClass, handleRemove }) {

    function moeda(valor) {
        var valorMoeda = Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
        }).format(valor);
        return valorMoeda;
    }

    function removeService(e) {
        e.preventDefault()
        handleRemove(id, cost)

    }

    return (
        <div className={`${styles.project_card_container} ${styles[customClass]}`}>
            <div>
                <h4>{name}</h4>
                <p>
                    <span>Custo:</span> {moeda(cost)}
                </p>
                <p>
                    <span>Descrição:</span> {description}
                </p>

            </div>
            <div>
                <div className={styles.project_card_actions}>
                    <button onClick={removeService}>
                        <BsFillTrashFill /> Excluir
                    </button>
                </div>

            </div>


        </div>
    )
}

export default ServiceCard