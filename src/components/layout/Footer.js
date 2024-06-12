// Icones
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6"

// Folhas de Estilo
import styles from "./css/Footer.module.css"
import { Link } from "react-router-dom"
function Footer() {
    return (
        <div className={styles.footer_container}>
            <ul>
                <li><Link to='https://www.facebook.com/'><FaFacebook /></Link></li>
                <li><Link to='https://www.instagram.com/'><FaInstagram /></Link></li>
                <li><Link to='https://br.linkedin.com/'><FaLinkedin /></Link></li>
                <li><Link to='https://www.x.com/'><FaXTwitter /></Link></li>
            </ul>
            <p><span>Costs</span> &copy; 2024</p>
        </div>
    )
}

export default Footer