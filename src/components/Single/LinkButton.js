import { Link } from "react-router-dom";
import styles from "../../css/single/Button.module.css"

export default function LinkButton({ to, btnText }) {
    return (
        <Link className={styles.btn} to={to}>{btnText}</Link>
    )
}