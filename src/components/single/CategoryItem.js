import styles from "../../css/single/CategoryItem.module.css"
import { MdOutlineEditNote, MdDeleteForever } from "react-icons/md";

export default function CategoryItem({ id, name, show, handleOnClick }) {

    function excluir() {
        handleOnClick(id)
    }

    if (show) {
        return (
            <div className={styles.category_info}>
                <div>{name}</div>
                <div className={styles.category_actions}>
                    {/* <div><MdOutlineEditNote /></div> */}
                    {/* <div> */}
                        <MdDeleteForever 
                        onClick={excluir}
                        />
                        {/* </div> */}
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