import Input from "../Single/Input";
import LinkButton from "../Single/LinkButton";
import SubmitButton from "../Single/SubmitButton";
import styles from "../../css/wraped/CreateProjectForm.module.css";
import { MdOutlineEditNote, MdDeleteForever } from "react-icons/md";
import { useEffect, useState, useTransition } from "react";

export default function HandleCategories() {

    const [categories, setCategories ] = useState([])
    const [isPending, startTransition] = useTransition()

    useEffect(() => {
        startTransition(async () => {
            setTimeout(() => {
                fetch(`http://localhost:5000/categories`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then((resp) => resp.json())
                .then((data) => {
                    setCategories(data)
                    console.log(data)
                    console.log(categories.length)
                })
                .catch((err) => console.log(err))
            }, 3000)
        })        
    }, [])

    return (
        <div className={styles.row}>
            <div className={styles.col}>
                <h3>Categorias Registradas</h3>
                <div className={styles.category_info}>
                    <div>Infra</div>
                    <div className={styles.category_actions}>
                        <div><MdOutlineEditNote /></div>
                        <div><MdDeleteForever /></div>
                    </div>
                </div>
                <div className={styles.category_info}>
                    <div>Desenvolvimento</div>
                    <div className={styles.category_actions}>
                        <div><MdOutlineEditNote /></div>
                        <div><MdDeleteForever /></div>
                    </div>
                </div>
                <div className={styles.category_info}>
                    <div>Design</div>
                    <div className={styles.category_actions}>
                        <div><MdOutlineEditNote /></div>
                        <div><MdDeleteForever /></div>
                    </div>
                </div>
                <div className={styles.category_info}>
                    <div>Planejamento</div>
                    <div className={styles.category_actions}>
                        <div><MdOutlineEditNote /></div>
                        <div><MdDeleteForever /></div>
                    </div>
                </div>
                {categories.length === 0 && (
                    <div className={`${styles.category_info} ${styles.none}`}>
                    <div>Não há categorias registradas.</div>
                    
                </div>
                )}
                {isPending && (
                    <div className={`${styles.category_info} ${styles.none}`}>
                    <div>Não há categorias registradas.</div>
                    
                </div>
                )}
                
            </div>

            <div className={styles.col}>
                <h3>Insira Novas Categorias</h3>
                <form className={styles.form}>
                    <fieldset>
                        <legend>Dados da Categoria</legend>
                        <Input label={'Nome da Categoria:'} type={'text'} name={'name'} placeholder={'Nome da Categoria'} />
                        <div className={styles.actions}>
                            <LinkButton to="/" btntext={"Cancelar"} />
                            <SubmitButton btnText={'Criar Categoria'} />
                        </div>
                    </fieldset>
                </form>
            </div>
        </div >
    );
}
