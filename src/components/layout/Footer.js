import { Link } from "react-router-dom"
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
                <Link to='https://www.facebook.com/'><li><FaFacebook /></li></Link>
                <Link to='https://www.instagram.com/'><li><FaSquareInstagram /></li></Link>
                <Link to='https://br.linkedin.com/'><li><FaLinkedin /></li></Link>
                <Link to='https://twitter.com/'><li><FaSquareXTwitter /></li></Link>
                <Link to='https://github.com/'><li><FaGithubSquare /></li></Link>
                </ul>
                <p><span>Costs</span> &copy; June 2024</p>
                </div>
            </Container>
        </div>
    )
}