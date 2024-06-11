// Imagens
import logo from "../../img/costs_logo.png"
// Folhas de estilo
import styles from "./css/Navbar.module.css"
function Navbar() {
    return (
        <nav className={styles.navbar_container}>
            <img src={logo} alt="Costs" />
            <ul>
                <li>Home</li>
                <li>Projetos</li>
                <li>Empresa</li>
                <li>Contato</li>
            </ul>
        </nav>
    )
}

export default Navbar