import styles from "../../css/layout/Footer.module.css"
import Container from "./Container"
import { FaFacebook, FaLinkedin, FaGithubSquare } from "react-icons/fa"
import { FaSquareXTwitter, FaSquareInstagram } from "react-icons/fa6"

export default function Footer() {
    return (
        <div className={styles.footer_container}>
            <Container>
                <div className={styles.footer_container_itens}>
                <ul>
                    <li><FaFacebook /></li>
                    <li><FaSquareInstagram /></li>
                    <li><FaLinkedin /></li>
                    <li><FaSquareXTwitter /></li>
                    <li><FaGithubSquare /></li>
                </ul>
                <p><span>Costs</span> &copy; 2024</p>
                </div>
            </Container>
        </div>
    )
}