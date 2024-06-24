import styles from "../../css/wraped/ProjectCard.module.css"
import LinkButton from "../single/LinkButton"
import Button from "../single/Button"

export default function ProjectCard({ id, name, category, budget, handleRemove}) {

    const remover = (e) => {
        e.preventDefault()
        handleRemove(id)
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
                    <span>Categoria:</span><p><span></span>{category}</p>
                    <span>Orçamento:</span><p>{moeda(budget)}</p>
                </div>
                <div className={styles.card_footer}>
                    <LinkButton
                    to={`/project/${id}`}
                    btnText={'Editar'}
                    />
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