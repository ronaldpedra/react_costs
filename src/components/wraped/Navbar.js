import { Link } from "react-router-dom";
import styles from "../../css/wraped/Navbar.module.css";
import logo from "../../img/costs_logo.png";

export default function Navbar() {
  return (
    <nav className={styles.navbar_container}>
      <Link to='/'><img src={logo} alt="Costs" /></Link>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/projects"}>Projetos</Link>
        </li>
      </ul>
    </nav>
  );
}
