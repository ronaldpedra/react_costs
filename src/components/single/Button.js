import styles from "../../css/single/Button.module.css";

export default function Button({ type, btnText, customClass }) {
  return (
    <button className={`${styles.btn} ${styles[customClass]}`} type={type}>
      {btnText}
    </button>
  );
}
