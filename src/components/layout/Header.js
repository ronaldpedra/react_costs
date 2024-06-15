import styles from "../../css/layout/Header.module.css"
import Navbar from "../wraped/Navbar"
import Container from "./Container"

export default function Header() {
    return (
        <div className={styles.header_container}>
            <Container>
                <Navbar />
            </Container>
        </div>
    )
}
