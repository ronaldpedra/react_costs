import styles from "../../css/single/Button.module.css"

export default function SubmitButton({ btnText }) {
    return (
        <button className={styles.btn} type="submit">{btnText}</button>
    )
}