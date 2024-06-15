import { Link } from "react-router-dom"
import styles from "../../css/wrapedComponent/Navbar.module.css"
import Logo from "../../img/costs_logo.png"

export default function Navbar() {
    return (
        <nav className={styles.navbar_container}>
            <Link to='/'><img src={Logo} alt="Costs" /></Link>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/projects'>Projetos</Link></li>
                <li><Link to='/company'>Empresa</Link></li>
                <li><Link to='/contact'>Contato</Link></li>
            </ul>
        </nav>
    )
}