import styles from "../../css/layout/Header.module.css"

export default function Header(props) {
    return (
        <header className={styles.header_container}>
            {props.children}
        </header>
    )
}