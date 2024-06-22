import Input from "../single/Input";
import LinkButton from "../single/LinkButton";
import Select from "../single/Select";
import SubmitButton from "../single/SubmitButton";
import styles from "../../css/wraped/Form.module.css";
import { useEffect, useState } from "react";

export default function CreateProjectForm() {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch(`http://localhost:5000/categories`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <form className={styles.form}>
      <fieldset>
        <legend>Dados do Projeto</legend>
        <div className={styles.row}>
          <div className={styles.col}>
            <Input
              label={'Nome:'}
              type={'text'}
              name={'name'}
              placeholder={'Nome do Projeto'}
            />
            <Input
              label={'Orçamento:'}
              type={'number'}
              name={'budget'}
              placeholder={'Orçamento do Projeto'}
            />
            <Select
              label={'Categoria:'}
              name={'category'}
              options={categories}
            />
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
