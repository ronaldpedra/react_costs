import Input from "../single/Input";
import LinkButton from "../single/LinkButton";
import Select from "../single/Select";
import SubmitButton from "../single/SubmitButton";
import styles from "../../css/wraped/CreateProjectForm.module.css";

export default function CreateProjectForm() {
  return (
    <form className={styles.form}>
      <fieldset>
        <legend>Dados do Projeto</legend>
        <div className={styles.row}>
          <div className={styles.col}>
            <Input label={'Nome:'} type={'text'} name={'name'} placeholder={'Nome do Projeto'} />
            <Input label={'Orçamento:'} type={'number'} name={'budget'} placeholder={'Orçamento do Projeto'} />
            <Select
              label={'Categoria:'}
              name={'category'} />
            <div className={styles.actions}>
              <LinkButton to="/" btntext={"Cancelar"} />
              <SubmitButton btnText={'Criar Projeto'} />
            </div>
          </div>
        </div>
      </fieldset>
    </form>
  );
}
