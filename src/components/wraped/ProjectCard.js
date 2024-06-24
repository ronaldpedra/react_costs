import styles from "../../css/wraped/ProjectCard.module.css"
import LinkButton from "../single/LinkButton"
import Button from "../single/Button"

export default function ProjectCard() {
    return (
        <div className={styles.card_container}>
            <div className={styles.card}>
                <div className={styles.card_header}>
                    <span>Projeto</span>
                </div>
                <div className={styles.card_content}>
                    <p>Categoria</p>
                    <p>Orçamento</p>

                </div>
                <div className={styles.card_footer}>
                    <LinkButton
                    to={'/project/:id'}
                    btnText={'Editar'}
                    />
                    <Button
                    btnText={'Excluir'}
                    customClass='inverted'
                    />

                </div>

            </div>
        </div>
    )
}