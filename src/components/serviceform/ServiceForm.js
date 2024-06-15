import { useState } from "react"
import Input from "../input/Input"
import SubmitButton from "../submitButton/SubmitButton"
import styles from "../projectForm/ProjectForm.module.css"

function ServiceForm({ handleSubmit, btnText, projectData }) {

    const [service, setService] = useState({})

    function submit(e) {
        e.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)
    }

    function handleChange(e) {
        setService({...service, [e.target.name]: e.target.value})
    }

    return (
        <form onSubmit={submit} className={styles.form_container}>
            <Input
                labelText={'Nome do Serviço:'}
                type={'text'}
                name={'name'}
                placeholder={'Insira o nome do serviço'}
                handleOnChange={handleChange}
            />
            <Input
                labelText={'Custo do Serviço:'}
                type={'number'}
                name={'cost'}
                placeholder={'Insira o valor do serviço'}
                handleOnChange={handleChange}
            />
            <Input
                labelText={'Descrição do Serviço:'}
                type={'text'}
                name={'description'}
                placeholder={'Descreva o serviço'}
                handleOnChange={handleChange}
            />

            <SubmitButton text={btnText} customClass='service_form_linkbutton' />
        </form>
    )
}

export default ServiceForm