import styles from "../../css/layout/Footer.module.css"
import Container from "./Container"

export default function Footer(props) {
    return (
        <footer className={styles.footer_container}>
            <Container>
                {props.children}
            </Container>
        </footer>
    )
}