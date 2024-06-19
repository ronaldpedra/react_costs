import styles from "../../css/layout/Main.module.css"

export default function Main(props) {
    return (
        <main className={styles.main_container}>
            {props.children}
        </main>
    )
}