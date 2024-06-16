import Input from "../single/Input";

export default function ProjectForm() {
    return (
        <form>
            <Input
            inputLabel={'Nome do Projeto:'}
            name={'name'}
            type={'text'}
            placeholder={'Insira o nome do projeto'}
            handleOnChange={''}
            value={''}
            />
        </form>
    )
}