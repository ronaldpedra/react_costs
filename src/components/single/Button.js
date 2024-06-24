import styles from "../../css/single/Button.module.css";

export default function Button({ type, btnText, customClass, handleOnClick }) {
  return (
    <button
      className={`${styles.btn} ${styles[customClass]}`}
      type={type}
      onClick={handleOnClick}
    >
      {btnText}
    </button>
  );
}
