import { useState } from "react";
import styles from "../../css/wrapedComponent/Form.module.css";
import Input from "../single/Input";
import SubmitButton from "../single/SubmitButton";

export default function ServiceForm({ btnText, handleSubmit, projectData }) {
  const [service, setService] = useState({});

  function submit(e) {
    e.preventDefault();
    projectData.services.push(service);
    handleSubmit(projectData);
  }

  function handleChange(e) {
    setService({ ...service, [e.target.name]: e.target.value });
  }
  return (
    <form className={styles.form} onSubmit={submit} autoComplete="on">
      <Input
        labelText={"Nome do Serviço:"}
        type={"text"}
        name={"name"}
        placeholder={"Digite o nome do serviço"}
        handleOnChange={handleChange}
      />
      <Input
        labelText={"Custo do Serviço:"}
        type={"number"}
        name={"cost"}
        placeholder={"Digite o Custo do Serviço"}
        handleOnChange={handleChange}
      />
      <Input
        labelText={"Descrição do Serviço:"}
        type={"textarea"}
        name={"description"}
        placeholder={"Descreva o Serviço..."}
        handleOnChange={handleChange}
      />
      <SubmitButton type={"submit"} btnText={btnText} />
    </form>
  );
}
