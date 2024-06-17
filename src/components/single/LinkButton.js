import { Link } from "react-router-dom";
import styles from "../../css/singleComponent/Button.module.css"

export default function LinkButton({ to, text, icon }) {
    return (
        <div className={styles.btn_container}>
            <Link className={styles.btn} to={to}>{icon} {text}</Link>
        </div>
    )
}