import styles from "./css/Select.module.css"


function Select({ labelText, name, options }) {
    return (
        <div className={styles.select_container}>
            <label htmlFor={name}>{labelText}</label>
            <select name={name} id={name}>
                <option value="0">Selecione uma opção</option>
                {options.map(option => (
                    <option key={option.id} value={option.id}>{option.name}</option>
                    ))}
            </select>
        </div>
    )
}

export default Select