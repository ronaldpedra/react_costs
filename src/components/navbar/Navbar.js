import { Link } from "react-router-dom"
import Container from "../layout/Container"
import logo from "../../img/costs_logo.png"
import styles from "./css/Navbar.module.css"

function Navbar() {
    return (
        <Container>
        <nav className={styles.navbar_container}>
            
                <Link to='/'><img src={logo} alt="Costs" /></Link>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/projetos'>Projetos</Link></li>
                    <li><Link to='/empresa'>Empresa</Link></li>
                    <li><Link to='/contato'>Contato</Link></li>
                </ul>
            
        </nav>
        </Container>
    )
}

export default Navbar