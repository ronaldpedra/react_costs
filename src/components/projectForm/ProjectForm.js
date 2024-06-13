import { useState, useEffect } from "react"
import SubmitButton from "../submitButton/SubmitButton"
import Input from "../input/Input"
import Select from "../select/Select"
import styles from "./ProjectForm.module.css"

function ProjectForm({ handleSubmit, projectData, btnText }) {

    // Populando a lista de opções do select
    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})
    const [message, setMessage] = useState('')

    useEffect(() => {
        fetch('http://localhost:5000/categories', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(resp => resp.json())
            .then(data => {
                setCategories(data)
            })
            .catch(err => console.log(err))
    }, [])

    function submit(e) {
        e.preventDefault()
        if (validateOnSubmit(project)) {
            // handleSubmit()
        } else {
            setMessage('É necessário preencher todos os campos para Criar o Projeto.')
        }
        
    }

    function validateOnSubmit(project) {
        if (!project.name) {
            return false
        }
        if (project.budget <= 0) {
            return false
        }
        if (project.category.id === '0') {
            return false
        }
        return true
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
        <form onSubmit={submit} className={styles.form_container}>
            <Input
                labelText={'Nome do Projeto:'}
                type={'text'}
                name={'name'}
                placeholder={'Insira o Nome do Projeto'}
                handleOnChange={handleChange}
                value={project.name ? project.name : ''}
            />
            <Input
                labelText={'Orçamento do Projeto:'}
                type={'number'}
                name={'budget'}
                placeholder={'Insira o Orçamento do Projeto'}
                handleOnChange={handleChange}
                value={project.budget ? project.budget : ''}
            />
            <Select
                labelText={'Selecione a categoria:'}
                name={'category_id'}
                options={categories}
                handleOnChange={handleCategory}
                value={project.category ? project.category.id : ''}
            />
            <SubmitButton text={btnText} />
        </form>
    )
}

export default ProjectForm