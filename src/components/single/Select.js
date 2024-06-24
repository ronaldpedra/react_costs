import styles from "../../css/single/Select.module.css"

export default function Select({ label, name, options, handleOnChange, value }) {
    return (
        <div className={styles.select_col}>
            <label htmlFor={name}>{label}</label>
            <select
                name={name}
                id={name}
                onChange={handleOnChange}
                value={value || ''}
            >
                <option>Selecione uma categoria</option>
                {options.map((option) => (
                    <option key={option.id} value={option.id}>{option.name}</option>
                ))}
            </select>
        </div>
    )
}