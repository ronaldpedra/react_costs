import styles from "../../css/wraped/ProjectCard.module.css"
import Button from "../single/Button"

export default function ServiceCard({ id, name, cost, description, handleRemove}) {

    const remover = (e) => {
        e.preventDefault()
        handleRemove(id, cost)
    }

    function moeda(valor) {
        return Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
        }).format(valor);
    }

    return (
        <div className={styles.card_container}>
            <div className={styles.card}>
                <div className={styles.card_header}>
                    <span>{name}</span>
                </div>
                <div className={styles.card_content}>
                    <span>Custo:</span><p>{moeda(cost)}</p>
                    <span>Descrição:</span><p>{description}</p>
                </div>
                <div className={styles.card_footer}>
                    <Button
                        btnText={'Excluir'}
                        customClass='inverted'
                        handleOnClick={remover}
                    />
                </div>
            </div>
        </div>
    )
}