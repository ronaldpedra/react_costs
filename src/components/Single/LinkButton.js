import { Link } from "react-router-dom";
import styles from "../../css/single/Button.module.css"

export default function LinkButton({ to, btntext }) {
    return (
        <Link className={styles.btn} to={to}>{btntext}</Link>
    )
}