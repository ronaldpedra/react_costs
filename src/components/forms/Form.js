import Button from "../button/Button"

function Form() {
    return (
        <div>
            <form>
                <div>
                    <label htmlFor="">Nome do Projeto</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor=""></label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor=""></label>
                    <select name="" id="">
                        <option value=""></option>
                    </select>
                </div>
                <Button texto='Criar Projeto' />
            </form>

        </div>
    )
}

export default Form