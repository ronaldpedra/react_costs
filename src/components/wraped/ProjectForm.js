import { useState, useEffect } from "react";
import Input from "../single/Input";
import Select from "../single/Select";
import SubmitButton from "../single/SubmitButton";
import styles from "../../css/wrapedComponent/Form.module.css"

export default function ProjectForm({ handleSubmit, projectData, btnText }) {

    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})

    useEffect(() => {
        fetch(`http://localhost:5000/categories`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(resp => resp.json())
            .then((data) => {
                setCategories(data)
            })
            .catch(err => console.log(err))
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
        <form className={styles.form} onSubmit={submit} autoComplete="on">
            <Input
                labelText={'Nome do Projeto:'}
                name={'name'}
                type={'text'}
                placeholder={'Insira o nome do projeto'}
                handleOnChange={handleChange}
                value={project.name ? project.name : ''}
            />
            <Input
                labelText={'Orçamento do Projeto:'}
                name={'budget'}
                type={'number'}
                placeholder={'Insira o Orçamento para o Projeto'}
                handleOnChange={handleChange}
                value={project.budget ? project.budget : ''}
            />
            <Select
                labelText={'Selecione a Categoria'}
                name={'category_id'}
                options={categories}
                handleOnChange={handleCategory}
                value={project.category ? project.category.id : '0'}
            />
            <SubmitButton
                type={'submit'}
                btnText={btnText}
            />
        </form>
    )
}