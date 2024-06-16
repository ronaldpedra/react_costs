import styles from "../../css/singleComponent/Input.module.css"

export default function Input({ name, inputLabel, type, placeholder, handleOnChange, value }) {
    return (
        <div className={styles.input_container}>
            <label htmlFor={name}>{inputLabel}</label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={handleOnChange}
                value={value}
            />
        </div>
    )
}