import styles from "../../css/layout/Footer.module.css"

export default function Footer(props) {
    return (
        <footer className={styles.footer_container}>
            {props.children}
        </footer>
    )
}