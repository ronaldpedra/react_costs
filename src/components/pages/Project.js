import { useParams } from "react-router-dom";
import styles from "../../css/pages/Project.module.css"
import Container from "../layout/Container";
import { useEffect, useState } from "react";
import Loading from "../single/Loading";
import Button from "../single/Button";

export default function Project() {

    const { id } = useParams()
    const [project, setProject] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/projects/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then((resp) => resp.json())
                .then((data) => {
                    setProject(data)
                })
                .catch((err) => console.log(err))
        }, 1000)
        return
    }, [id])

    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm)
    }

    return (
        <>
            {project.name ? (
                <div className={styles.project_details}>
                    <Container customClass='column'>
                        <div className={styles.details_container}>
                            <h1>Projeto: {project.name}</h1>
                            <Button
                                handleRemove={toggleProjectForm}
                                btnText={!showProjectForm ? 'Editar Projeto' : 'Fechar'}
                            />
                            {!showProjectForm ? (
                                <div className={styles.project_info}>
                                    <p>
                                        <span>Categoria: </span>{project.category.name}
                                    </p>
                                    <p>
                                        <span>Orçamento Total: </span>{project.budget}
                                    </p>
                                    <p>
                                        <span>Total Utilizado: </span>{project.cost}
                                    </p>
                                </div>
                            ) : (
                                <div className={styles.project_info}>
                                    <p>Formulário</p>
                                </div>
                            )}
                        </div>
                    </Container>
                </div>
            ) : (
                <Loading />
            )}
        </>
    )
}