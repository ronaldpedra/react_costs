import Input from "../Single/Input";
import LinkButton from "../Single/LinkButton";
import Select from "../Single/Select";
import SubmitButton from "../Single/SubmitButton";
import styles from "../../css/wraped/CreateProjectForm.module.css";

export default function CreateProjectForm() {
  return (
    <form className={styles.form}>
      <fieldset>
        <legend>Dados do Projeto</legend>
        <div className={styles.row}>
          <div className={styles.col}>
            <Input label={'Nome:'} type={'text'} name={'name'} />
            <Input label={'Orçamento:'} type={'number'} name={'budget'} />
            <Select />
            <div className="actions">
              <LinkButton to="/" btntext={"Cancelar"} />
              <SubmitButton />
            </div>
          </div>
        </div>
      </fieldset>
    </form>
  );
}
