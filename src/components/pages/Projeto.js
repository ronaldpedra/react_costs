import { v4 as uuidv4 } from "uuid"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styles from "./css/Projeto.module.css"
import Container from "../layout/Container"
import ProjectForm from "../projectForm/ProjectForm"
import Message from "../message/Message"
import ServiceForm from "../serviceform/ServiceForm"
import ServiceCard from "../serviceCard/ServiceCard"

function Projeto() {

    const { id } = useParams()
    const [project, setProject] = useState([])
    const [services, setServices] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)
    const [showServiceForm, setShowServiceForm] = useState(false)
    const [message, setMessage] = useState()

    useEffect(() => {

        setTimeout(() => {
            fetch(`http://localhost:5000/projects/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(resp => resp.json())
                .then((data) => {
                    setProject(data)
                    setServices(data.services)
                })
                .catch(err => console.log(err))
        }, 500)

    }, [id])

    function moeda(valor) {
        return (
            Intl.NumberFormat("pt-br", {
                style: "currency",
                currency: "BRL",
            }).format(valor)
        )
    }

    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm)
    }

    function toggleServiceForm() {
        setShowServiceForm(!showServiceForm)
    }

    function editPost(project) {
        // budget validation
        if (project.budget < project.cost) {
            setMessage({
                type: 'danger',
                text: 'O Orçamento não pode ser menor que o Custo do Projeto.'
            })
            return false
        }
        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        })
            .then(resp => resp.json())
            .then((data) => {
                console.log(data)
                setProject(data)
                setShowProjectForm(!showProjectForm)
                setMessage({
                    type: 'success',
                    text: 'Projeto atualizado com sucesso!'
                })
            })
            .catch(err => console.log(err))
    }

    function createService(project) {

        const lastService = project.services[project.services.length - 1]
        const lastServiceCost = lastService.cost
        const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost)

        lastService.id = uuidv4()

        // maximum value validation
        if (newCost > parseFloat(project.budget)) {
            setMessage({
                type: 'danger',
                text: 'Orçamento Ultrapassado. Verifique os valores dos Serviços.'
            })
            project.services.pop()
            return false
        }

        // add service cost to project total cost
        project.cost = newCost

        // update project
        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        })
        .then(resp => resp.json)
        .then((data) => {
            console.log(data)
            setMessage({
                type: 'success',
                text: 'Serviço cadastrado com sucesso!'
            })
            setShowServiceForm(!showServiceForm)
        })
        .catch(err => console.log(err))
    }

    function removeService() {
        
    }

    return (
        <>
            {project.name ? (
                <div className={styles.project_details}>
                    <Container customClass='column'>
                        {message && (
                            <Message customClass='update_message'
                                type={message.type}
                                text={message.text}
                                setMessage={setMessage}
                            />
                        )}
                        <div className={styles.details_container}>
                            <h1>Projeto: {project.name}</h1>
                            <button className={styles.btn} onClick={toggleProjectForm}>
                                {!showProjectForm ? 'Editar Projeto' : 'Fechar'}
                            </button>
                            {!showProjectForm ? (
                                <div className={styles.project_info}>
                                    <p>
                                        <span>Categoria:</span> {project.category.name}
                                    </p>
                                    <p>
                                        <span>Total de Orçamento:</span> {moeda(project.budget)}
                                    </p>
                                    <p>
                                        <span>Total Utilizado:</span> {moeda(project.cost)}
                                    </p>
                                </div>
                            ) : (
                                <div className={styles.project_info}>
                                    <ProjectForm
                                        handleSubmit={editPost}
                                        btnText='Concluir Edição'
                                        projectData={project} />
                                </div>
                            )}
                        </div>
                        <div className={styles.service_form_container}>
                            <h2>Adicionar Serviços</h2>
                            <button className={styles.btn} onClick={toggleServiceForm}>
                                {!showServiceForm ? 'Adicionar Serviço' : 'Fechar'}
                            </button>
                            {showServiceForm && (
                                <div className={styles.project_info}>
                                    <ServiceForm
                                        handleSubmit={createService}
                                        btnText={'Adicionar Serviço'}
                                        projectData={project} />
                                </div>
                            )}
                        </div>
                        <h2>Serviços</h2>
                        <Container customClass='start'>
                            {services.length > 0 && (
                                services.map((service) => (
                                    <ServiceCard
                                    name={service.name}
                                    cost={service.cost}
                                    description={service.description}
                                    key={service.id}
                                    handleRemove={removeService} />
                                ))
                            )}
                            {services.length === 0 && <p>Não há serviços cadastrados.</p>}
                        </Container>
                    </Container>
                </div>
            ) : (
                <h2>Carregando...</h2>
            )}
        </>
    )
}

export default Projeto