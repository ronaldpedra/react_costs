import styles from "./css/Select.module.css"

function Select({ labelText, name }) {
    return (
        <div className={styles.select_container}>
            <label htmlFor={name}>{labelText}</label>
            <select name={name} id={name}>
                <option value="Selecione uma opção">Selecione uma opção</option>
            </select>
        </div>
    )
}

export default Select