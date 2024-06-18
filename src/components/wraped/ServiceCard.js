import { BsFillTrashFill } from "react-icons/bs";
import styles from "../../css/wrapedComponent/ProjectCard.module.css";
import Button from "../single/Button";

export default function ServiceCard({
  id,
  name,
  cost,
  description,
  handleRemove,
}) {
  function excluirServico(e) {
    e.preventDefault()
    handleRemove(id);
  }

  function moeda(valor) {
    return Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(valor);
  }

  return (
    <div className={styles.container}>
      <div>
        <h4>{name}</h4>
        <p>
          <span>Custo Total: </span>
          {moeda(cost)}
        </p>
        <p>{description}</p>
      </div>
      <div>
        <Button
          btnText={"Excluir"}
          icon={<BsFillTrashFill />}
          handleRemove={excluirServico}
        />
      </div>
    </div>
  );
}
