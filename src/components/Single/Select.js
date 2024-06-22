import styles from "../../css/single/Select.module.css"

export default function Select({ label, name }) {
    return (
        <div className={styles.select_col}>
            <label htmlFor={name}>{label}</label>
            <select name={name} id={name}>
                <option value="0">Selecione uma categoria</option>
            </select>
        </div>
    )
}