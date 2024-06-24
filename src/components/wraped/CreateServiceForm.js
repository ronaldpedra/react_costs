import { useState } from "react";
import styles from "../../css/wraped/Form.module.css";
import Button from "../single/Button";
import Input from "../single/Input";
import LinkButton from "../single/LinkButton";

export default function CreateServiceForm({
  linkButtonTo,
  linkButtonText,
  buttonText,
  handleSubmit,
  handleClick,
  cancelButton = false
}) {
  const [service, setService] = useState({});

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(service);
};

function handleChange(e) {
    setService({ ...service, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <fieldset>
        <legend>Dados do Serviço</legend>
        <div className={styles.row}>
          <div className={styles.col}>
            <Input
              label={"Nome:"}
              type={"text"}
              name={"name"}
              placeholder={"Nome do Serviço"}
              handleOnChange={handleChange}
            />
            <Input
              label={"Custo Total:"}
              type={"number"}
              name={"cost"}
              placeholder={"Custo do serviço"}
              handleOnChange={handleChange}
            />
            <Input
              label={"Descrição do Serviço"}
              type={"text"}
              name={"description"}
              placeholder={"Descreva o serviço..."}
              handleOnChange={handleChange}
            />
            <div className={styles.actions}>
              {cancelButton && (
                <LinkButton
                  to={linkButtonTo}
                  btnText={linkButtonText}
                  customClass="inverted"
                  handleOnClick={handleClick}
                />
              )}
              <Button type={"submit"} btnText={buttonText} />
            </div>
          </div>
        </div>
      </fieldset>
    </form>
  );
}
