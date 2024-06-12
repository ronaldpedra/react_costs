import { Link } from "react-router-dom"
import styles from "./css/Button.module.css"

function Button({ to, texto }) {
    return (
        <Link className={styles.btn} to={ to }>{ texto }</Link>
    )
}

export default Button