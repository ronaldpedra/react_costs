// Imagens
import logo from "../../img/costs_logo.png"
function Navbar() {
    return (
        <nav>
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