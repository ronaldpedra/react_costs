import { FaCheck, FaInfoCircle, FaTimesCircle } from "react-icons/fa"
import { IoWarning } from "react-icons/io5"
import styles from "../../css/singleComponent/Message.module.css"

export default function Message({ type='none', text }) {
    return (
        <div className={`${styles.container} ${styles[type]}`}>
            {type === 'info' && <FaInfoCircle />}
            {type === 'success' && <FaCheck />}
            {type === 'warning' && <IoWarning />}
            {type === 'error' && <FaTimesCircle />}
            <h4>{text}</h4>
        </div>
    )
}