import styles from "../../css/wrapedComponent/ProjectCard.module.css";
import { BsPencil, BsFillTrashFill } from "react-icons/bs";
import LinkButton from "../single/LinkButton";
import Button from "../single/Button";

export default function ProjectCard({
  id,
  name,
  budget,
  category,
  handleRemove,
  linkTo,
  linkText,
  btnText,
}) {
  return (
    <div className={styles.container}>
      <h4>{name}</h4>
      <p>
        <span>Orçamento:</span> {budget}
      </p>
      <p className={styles.category_text}>
        <span className={`${styles[category.toLowerCase()]}`}></span> {category}
      </p>
      <div className={styles.actions}>
        <div className={styles.action}>
          <BsPencil />
          <LinkButton to={linkTo} text={linkText} />
        </div>
        <div className={styles.action}>
            <BsFillTrashFill />
          <Button btnText={btnText} />
        </div>
      </div>
    </div>
  );
}
