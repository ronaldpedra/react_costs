import styles from "../../css/single/Input.module.css"

export default function Input({ label, type, name }) {
  return (
    <div className={styles.input_col}>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} id={name} />
    </div>
  );
}
