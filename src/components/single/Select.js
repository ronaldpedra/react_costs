import styles from "../../css/singleComponent/Select.module.css"

export default function Select({ labelText, name, options, handleOnChange, value }) {
    return (
        <div className={styles.select_container}>
            <label htmlFor={name}>{labelText}</label>
            <select name={name} id={name} onChange={handleOnChange} value={value || '0'}>
                <option value="0">Selecione a Categoria do Projeto</option>
                {options.map((option) => (
                    <option key={option.id} value={option.id}>{option.name}</option>
                ))}
            </select>
        </div>
    )
}