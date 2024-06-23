import styles from "../../css/single/Button.module.css"

export default function Button({ type, btnText }) {
    return (
        <button className={styles.btn} type={type}>{btnText}</button>
    )
}