import styles from "../../css/layout/Main.module.css"

export default function Main(props) {
    return (
        <div className={styles.main_container}>
            {props.children}
        </div>
    )
}