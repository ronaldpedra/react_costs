import { Link } from "react-router-dom"
import styles from "../../css/wrapedComponent/Navbar.module.css"
import Logo from "../../img/costs_logo.png"

export default function Navbar() {
    return (
        <div className={styles.navbar_container}>
            <img src={Logo} alt="Costs" />
            <div>
                <Link to='/'>Home</Link>
            </div>
        </div>
    )
}