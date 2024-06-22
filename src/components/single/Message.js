import { useEffect, useState } from "react"
import styles from "../../css/single/Message.module.css"
import { FaTimesCircle, FaCheckCircle, FaInfoCircle, FaExclamationTriangle, FaTimes } from "react-icons/fa"

export default function Message({ type, title, body, handleMessage }) {

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

    useEffect(() => {
        if (!type) {
            setShowMessage(false)
            return
        }
        setShowMessage(true)
        setTimeout(() => {
            setShowMessage(false)
            if (handleMessage) {
                handleMessage({})
            }
        }, 1000)

    }, [type, handleMessage])

    function closeMessage(e) {
        e.preventDefault()
        setShowMessage(false)
        handleMessage({})
    }

    return (
        <>
            {showMessage && (
                <div className={`${styles.message_container} ${styles[type]}`}>
                    <div className={styles.icon}>{icon}</div>
                    <div className={styles.content}>
                        <span className={styles.message_title}>{title}</span>&nbsp;
                        <span className={styles.message_body}>{body}</span>
                    </div>
                    <div className={styles.close}>
                        <button className={styles.circle_small} onClick={closeMessage} type="button"><FaTimes /></button>
                    </div>
                </div>
            )}
        </>
    )
}
