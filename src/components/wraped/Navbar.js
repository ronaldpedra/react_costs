import { Link } from "react-router-dom"
import styles from "../../css/wraped/Navbar.module.css"
import logo from "../../img/costs_logo.png"

export default function Navbar() {
    return (
        <nav className={styles.navbar_container}>
            <img src={logo} alt="Costs" />
            <Link to={'/'}>Home</Link>
        </nav>
    )
}