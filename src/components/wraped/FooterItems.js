import { Link } from "react-router-dom"
import { FaFacebook, FaGithubSquare, FaLinkedin } from "react-icons/fa"
import { FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6"
import styles from "../../css/wraped/FooterItems.module.css"

export default function FooterItems() {
    return (
        <footer className={styles.footer_container}>
            <ul>
                <Link to='https://www.facebook.com/'><li><FaFacebook /></li></Link>
                <Link to='https://www.instagram.com/'><li><FaSquareInstagram /></li></Link>
                <Link to='https://br.linkedin.com/'><li><FaLinkedin /></li></Link>
                <Link to='https://twitter.com/'><li><FaSquareXTwitter /></li></Link>
                <Link to='https://github.com/'><li><FaGithubSquare /></li></Link>
            </ul>
            <p>
                <Link to='/'><span>Costs</span></Link>
                &nbsp;&copy; June 2024
            </p>

        </footer>
    )
}