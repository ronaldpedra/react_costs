import styles from "../../css/single/CategoryItem.module.css"
import { MdOutlineEditNote, MdDeleteForever } from "react-icons/md";

export default function CategoryItem({ id, name, show }) {

    if (show) {
        return (
            <div key={id} className={styles.category_info}>
                <div>{name}</div>
                <div className={styles.category_actions}>
                    <div><MdOutlineEditNote /></div>
                    <div><MdDeleteForever /></div>
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