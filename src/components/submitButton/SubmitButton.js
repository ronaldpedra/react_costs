import styles from "../linkButton/LinkButton.module.css"

function SubmitButton(props) {
    return (
        <div>
            <button className={`${styles.btn} ${styles[props.customClass]}`}>{props.text}</button>
        </div>
    )
}

export default SubmitButton