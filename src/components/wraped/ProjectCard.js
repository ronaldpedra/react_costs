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

  const remover = (e) => {
    e.preventDefault()
    handleRemove(id)
  }

  return (
    <div className={styles.container}>
      <div>
        <h4>{name}</h4>
        <p>
          <span>Orçamento:</span> {budget}
        </p>
        <p className={styles.category_text}>
          <span className={`${styles[category.toLowerCase()]}`}></span> {category}
        </p>
      </div>
      <div className={styles.actions}>
        <div className={styles.action}>
          <LinkButton to={linkTo} text={linkText} icon={<BsPencil />} />
        </div>
        <div className={styles.action}>
          <Button handleRemove={remover} btnText={btnText} icon={<BsFillTrashFill />} />
        </div>
      </div>
    </div>
  );
}
