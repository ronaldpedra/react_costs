import styles from "../../css/wrapedComponent/ProjectCard.module.css"
import { BsPencil, BsFillTrashFill } from "react-icons/bs"

export default function ProjectCard({ id, name, budget, category, handleRemove }) {
    return (
        <div className={styles.container}>
            <h4>{name}</h4>
            <p><span>Orçamento:</span> {budget}</p>
            <p className={styles.category_text}>
                <span className={`${styles[category.toLowerCase()]}`}></span> {category}</p>
            <div>
                <p>Editar</p>
                <p>Remover</p>
            </div>
        </div>
    )
}