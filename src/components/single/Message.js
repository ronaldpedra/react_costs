import { useState } from "react"
import styles from "../../css/single/Message.module.css"
import { FaTimesCircle, FaCheckCircle, FaInfoCircle, FaExclamationTriangle, FaTimes } from "react-icons/fa"

export default function Message({ type, title, body, setMessage }) {

    const [showMessage, setShowMessage] = useState(false)

    let icon
    if (type === 'danger') {
        icon = <FaTimesCircle />
    }
    if (type === 'success') {
        icon = <FaCheckCircle />
    }
    if (type === 'info') {
        icon = <FaInfoCircle />
    }
    if (type === 'warning') {
        icon = <FaExclamationTriangle />
    }

    if (showMessage) {
        setTimeout(() => {
            setShowMessage(!showMessage)
        }, 60000)
    }
    
    
    
    return (
        <div className={`${styles.message_container} ${styles[type]}`}>
            <div className={styles.icon}>{icon}</div>
            <div className={styles.content}>
                <span className={styles.message_title}>{title}</span>&nbsp;
                <span className={styles.message_body}>{body}</span>
            </div>
            <div className={styles.close}>
                <button className={styles.circle_small} type="button"><FaTimes /></button>
            </div>
        </div>
    )
}