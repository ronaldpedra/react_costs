import Input from "../single/Input";
import LinkButton from "../single/LinkButton";
import Select from "../single/Select";
import Button from "../single/Button";
import styles from "../../css/wraped/Form.module.css";
import { useEffect, useState } from "react";

export default function CreateProjectForm({ handleSubmit, projectData }) {

  const [categories, setCategories] = useState([])
  const [project, setProject] = useState(projectData || {})

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

  const submit = (e) => {
    e.preventDefault()
    handleSubmit(project)
  }

  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value })
  }

  function handleCategory(e) {
    setProject({
      ...project, category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text
      }
    })
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <fieldset>
        <legend>Dados do Projeto</legend>
        <div className={styles.row}>
          <div className={styles.col}>
            <Input
              label={'Nome:'}
              type={'text'}
              name={'name'}
              placeholder={'Nome do Projeto'}
              handleOnChange={handleChange}
              value={project.name ? project.name : ''}
            />
            <Input
              label={'Orçamento:'}
              type={'number'}
              name={'budget'}
              placeholder={'Orçamento do Projeto'}
              handleOnChange={handleChange}
              value={project.budget ? project.budget : ''}
            />
            <Select
              label={'Categoria:'}
              name={'category_id'}
              options={categories}
              handleOnChange={handleCategory}
              value={project.category ? project.category.id : ''}
            />
            <div className={styles.actions}>
              <LinkButton to="/" btnText={"Cancelar"} />
              <Button
                type={'submit'}
                btnText={'Criar Projeto'}
              />
            </div>
          </div>
        </div>
      </fieldset>
    </form>
  );
}
