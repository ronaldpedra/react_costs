import styles from "../../css/singleComponent/Input.module.css"

export default function Input({ name, labelText, type, placeholder, handleOnChange, value }) {
    return (
        <div className={styles.input_container}>
            <label htmlFor={name}>{labelText}</label>
            <input
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={handleOnChange}
                value={value}
                autoComplete="on"
            />
        </div>
    )
}