import styles from "../../css/wraped/Form.module.css";
import { useEffect, useState } from "react";
import Loading from "../single/Loading";
import CategoryItem from "../single/CategoryItem";
import CreateCategoryForm from "./CreateCategoryForm";

export default function HandleCategories() {

    const [categories, setCategories] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)

    function getCategories() {
        setRemoveLoading(!removeLoading)
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
                    setRemoveLoading(true)
                })
                .catch((err) => console.log(err))
        }, 500)

        return

    }
    useEffect(() => {
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
                    setRemoveLoading(true)
                })
                .catch((err) => console.log(err))
        }, 500)
    }, [])

    function createCategory(category) {
        fetch(`http://localhost:5000/categories`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(category)
        })
            .then((resp) => resp.json())
            .then((data) => {
                getCategories()
                // message
            })
    }

    function deleteCategory(id) {
        fetch(`http://localhost:5000/categories/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((resp) => resp.json())
        .then(() => {
            getCategories()
        })
        .catch((err) => console.log(err))

    }

    return (
        <div className={styles.row}>
            <div className={styles.col}>
                <h3>Categorias Registradas</h3>
                {categories.length > 0 &&
                    categories.map((category) => (
                        <CategoryItem
                            id={category.id}
                            name={category.name}
                            show={true}
                            key={category.id}
                            handleRemove={deleteCategory}
                        />
                    ))
                }
                {!removeLoading && <Loading />}
                {removeLoading && categories.length === 0 && (
                    <CategoryItem
                        show={false}
                    />
                )}
            </div>

            <div className={styles.col}>
                <h3>Insira Novas Categorias</h3>
                <CreateCategoryForm
                    handleSubmit={createCategory}
                />
            </div>
        </div >
    );
}
