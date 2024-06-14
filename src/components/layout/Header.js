import Navbar from "../navbar/Navbar"
import styles from "./css/Header.module.css"

function Header() {
    return (
        <div className={styles.header_container}>
            <Navbar />
        </div>
    )
}

export default Header