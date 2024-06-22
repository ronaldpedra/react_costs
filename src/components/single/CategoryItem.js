import styles from "../../css/single/CategoryItem.module.css"
import { MdDeleteForever } from "react-icons/md";

export default function CategoryItem({ id, name, show, handleRemove }) {

    function remover() {
        handleRemove(id)
    }

    if (show) {
        return (
            <div className={styles.category_info}>
                <div>{name}</div>
                <div className={styles.category_actions}>
                    <MdDeleteForever
                        onClick={remover}
                    />
                </div>
            </div>
        )
    }
    return (
        <div className={`${styles.category_info} ${styles.none}`}>
            <div>Não há categorias registradas.</div>
        </div>
    )
}