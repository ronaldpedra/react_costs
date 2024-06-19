import styles from "../../css/layout/Main.module.css"
import Container from "./Container"

export default function Main(props) {
    return (
        <main className={styles.main_container}>
            <Container>
                {props.children}
            </Container>
        </main>
    )
}