import { Link } from "react-router-dom";
import styles from "./ProjectCard.module.css";
import { BsFillTrashFill, BsPencil } from "react-icons/bs";

function ProjectCard({ id, name, budget, category, handleRemove }) {



  function moeda(valor) {
    var valorMoeda = Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(valor);
    return valorMoeda;
  }

  function remove(e) {
    e.preventDefault()
    handleRemove(id)
  }

  return (
    <div className={styles.project_card_container}>
      <h4>{name}</h4>
      <p>
        <span>Orçamento:</span> {moeda(budget)}
      </p>
      <p className={styles.category_text}>
        <span className={`${styles[category.toLowerCase()]}`}></span>
        {category}
      </p>
      <div className={styles.project_card_actions}>
        <Link to={`/projeto/${id}`}>
          <BsPencil /> Editar
        </Link>
        <button onClick={remove}>
          <BsFillTrashFill /> Excluir
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
