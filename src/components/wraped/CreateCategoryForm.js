import { useState } from "react"
import styles from "../../css/wraped/Form.module.css"
import Input from "../single/Input"
import LinkButton from "../single/LinkButton"
import SubmitButton from "../single/SubmitButton"

export default function CreateCategoryForm({ handleSubmit, categoryData }) {

    const [category, setCategory] = useState(categoryData || {})

    const submit = (e) => {
        e.preventDefault()
        document.getElementById('name').value = ''
        handleSubmit(category)
    }

    function handleChange(e) {
        setCategory({ ...categoryData, [e.target.name]: e.target.value })
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <fieldset>
                <legend>Nova Categoria</legend>
                <Input
                    label={'Nome da Categoria:'}
                    type={'text'}
                    name={'name'}
                    placeholder={'Nome da Categoria'}
                    handleOnChange={handleChange}
                    // value={category.name ? category.name : ''}
                />
                <div className={styles.actions}>
                    <LinkButton
                        to="/"
                        btntext={"Cancelar"}
                    />
                    <SubmitButton
                        btnText={'Criar Categoria'}
                    />
                </div>
            </fieldset>
        </form>
    )
}