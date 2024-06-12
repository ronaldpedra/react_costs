import { useState, useEffect } from "react"
import Button from "../button/Button"
import Input from "../input/Input"
import Select from "../select/Select"
import styles from "./css/Form.module.css"

function Form() {

    // Populando a lista de opções do select
    const [categories, setCategories] = useState([])

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

    

    return (
        <form className={styles.form_container}>
            <Input
                labelText='Nome do Projeto:'
                type='text'
                name='nome'
                id='nome'
                placeholder='Insira o Nome do Projeto'
            />
            <Input
            labelText='Orçamento do Projeto:'
            type='number'
            name='orcamento'
            id='orcamento'
            placeholder='Insira o Orçamento do Projeto' />
            <Select
            labelText='Selecione a categoria:'
            name='categoria'
            options={categories} />
            <Button texto='Criar Projeto' />
        </form>
    )
}

export default Form