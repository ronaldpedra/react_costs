import { FaCheck, FaInfoCircle, FaTimesCircle } from "react-icons/fa"
import { IoWarning } from "react-icons/io5"
import styles from "../../css/singleComponent/Message.module.css"
import { useEffect, useState } from "react"

export default function Message({ type = 'none', text, handleMessage }) {

    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if (!text) {
            setVisible(false)
            return
        }
        setVisible(true)
        const timer = setTimeout(() => {
            setVisible(false)
            if (handleMessage) {
                handleMessage({})
            }
        }, 3000)
        return () => clearTimeout(timer)
    }, [text, handleMessage])

    return (
        <>
            {visible && (
                <div className={`${styles.container} ${styles[type]}`}>
                    {type === 'info' && <FaInfoCircle />}
                    {type === 'success' && <FaCheck />}
                    {type === 'warning' && <IoWarning />}
                    {type === 'error' && <FaTimesCircle />}
                    <h4>{text}</h4>
                </div>
            )}
        </>
    )
}