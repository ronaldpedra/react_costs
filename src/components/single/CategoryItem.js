import styles from "../../css/single/CategoryItem.module.css"
import { MdOutlineEditNote, MdDeleteForever } from "react-icons/md";

export default function CategoryItem({ id, name, show, handleRemove }) {

    function excluir(e) {
        e.preventDefault()
        handleRemove(id)
    }

    if (show) {
        return (
            <div className={styles.category_info}>
                <div>{name}</div>
                <div className={styles.category_actions}>
                    {/* <div><MdOutlineEditNote /></div> */}
                    {/* <div> */}
                    <button onClick={excluir}><MdDeleteForever 
                        
                        /></button>
                        
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