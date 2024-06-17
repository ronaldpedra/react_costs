import styles from "../../css/singleComponent/Button.module.css"

export default function Button({ type, btnText, icon }) {
    return (
        <div className={styles.btn_container}>
            <button className={styles.btn} type={type}>{icon} {btnText}</button>
        </div>
    )
}