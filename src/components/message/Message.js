import { useEffect, useState } from "react"
import styles from "./Message.module.css"
function Message({ type, text, setMessage }) {

    const [visible, setVisible] = useState(false)

    useEffect(() => {

        if (!text) {
            setVisible(false)
        }
        setVisible(true)

        const timer = setTimeout(() => {
            setVisible(false)
            setMessage({})
        }, 60000)

        return () => clearTimeout(timer)

    }, [text, setMessage])

    return (
        <>
            {visible && (
                <div className={`${styles.alert} ${styles[type]}`}>{text}</div>
            )}
        </>
    )
}

export default Message