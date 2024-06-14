import { useEffect, useState } from "react";
import styles from "./Message.module.css";
import { CgDanger } from "react-icons/cg";
import { TiInputChecked } from "react-icons/ti";

function Message({ type, text, setMessage }) {
  
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!text) {
      setVisible(false);
    }
    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);
      setMessage();
    }, 3000);

    return () => clearTimeout(timer);
  }, [text, setMessage]);

  return (
    <>
      {visible && (
        <div className={`${styles.alert} ${styles[type]}`}>
          {type === "success" && <TiInputChecked />}
          {type === "danger" && <CgDanger />}
          <h4>{text}</h4>
        </div>
      )}
    </>
  );
}

export default Message;
