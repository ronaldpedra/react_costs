import styles from "../../css/layout/Header.module.css"
import Container from "./Container"

export default function Header(props) {
    return (
        <header className={styles.header_container}>
            <Container>
                {props.children}
            </Container>
        </header>
    )
}