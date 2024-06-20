import Input from "../Single/Input";
import LinkButton from "../Single/LinkButton";
import Select from "../Single/Select";
import SubmitButton from "../Single/SubmitButton";

export default function Form() {
    return (
        <form>
            <fieldset>
                <legend>Dados do Projeto</legend>
                <div className="row">
                    <div className="col">
                        <Input />
                        <Input />
                        <Select />
                        <div className="actions">
                            <LinkButton to='/' btntext={'Cancelar'} />
                            <SubmitButton />
                        </div>
                    </div>
                </div>
            </fieldset>
        </form>
    )
}