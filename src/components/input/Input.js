import styles from "./css/Input.module.css"

function Input({ labelText, type, name, placeholder, handleOnChange, value }) {
    return (
        <div className={styles.input_container}>
            <label htmlFor={name}>{labelText}</label>
            <input
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={handleOnChange}
                value={value} />
        </div>
    )
}

export default Input