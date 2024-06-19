import styles from "../../css/wraped/FooterItems.module.css"

export default function FooterItems() {
    return (
        <footer className={styles.footer_container}>
            <ul>
                <li>face</li>
                <li>insta</li>
                <li>Linkedin</li>
                <li>XTwitter</li>
                <li>github</li>
            </ul>
            <p><span>Costs</span> &copy; June 2024</p>

        </footer>
    )
}