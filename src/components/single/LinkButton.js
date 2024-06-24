import { Link } from "react-router-dom";
import styles from "../../css/single/Button.module.css";

export default function LinkButton({ to, btnText, customClass, handleOnClick }) {
  return (
    <Link className={`${styles.btn} ${styles[customClass]}`} to={to} onClick={handleOnClick}>
      {btnText}
    </Link>
  );
}
