import { useEffect } from "react"
import styles from "./css/Select.module.css"


function Select({ labelText, name }) {

    // Popula a lista de option do select
    function opcoes() {
        const options = []

        useEffect()
    }

    return (
        <div className={styles.select_container}>
            <label htmlFor={name}>{labelText}</label>
            <select name={name} id={name}>
                <option value="0">Selecione uma opção</option>
                <option value="1">Uma opção</option>
                <option value="2">Duas opção</option>
                <option value="3">Três opção</option>
            </select>
        </div>
    )
}

export default Select