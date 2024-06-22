import { useState } from "react"
import styles from "../../css/wraped/Form.module.css"
import Input from "../single/Input"
import LinkButton from "../single/LinkButton"
import SubmitButton from "../single/SubmitButton"
import Message from "../single/Message"

export default function CreateCategoryForm({ handleSubmit, categoryData }) {

    const [category, setCategory] = useState(categoryData || {})
    const [message, setMessage] = useState({})

    

    const submit = (e) => {
        e.preventDefault()
        if (!category.name) {
            // message
            setMessage({
                type: 'warning',
                title: 'Erro de Nome.',
                body: 'Você deve preencher o nome da categoria.'
            })
            console.log('Preecha o nome da Categoria.')
            return false
        }
        document.getElementById('name').value = ''
        handleSubmit(category)
        setCategory({})
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
                {message && (
                    <Message
                    type={message.type}
                    title={message.title}
                    body={message.body}                    
                    setMessage={setMessage} />
                )}
            </fieldset>
        </form>
    )
}