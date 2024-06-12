// Recursos de Sistema
import { Link } from "react-router-dom"
// Layout
import Container from "../layout/Container"
// Imagens
import logo from "../../img/costs_logo.png"
// Folhas de estilo
import styles from "./css/Navbar.module.css"

function Navbar() {
    return (
        <nav className={styles.navbar_container}>
            <Container>
                <Link to='/'><img src={logo} alt="Costs" /></Link>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/projetos'>Projetos</Link></li>
                    <li><Link to='/empresa'>Empresa</Link></li>
                    <li><Link to='/contato'>Contato</Link></li>
                </ul>
            </Container>

        </nav>
    )
}

export default Navbar