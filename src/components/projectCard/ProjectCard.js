import styles from "./ProjectCard.module.css"

function ProjectCard({id, name, budget, category, handleRemove}){
    return (
        <div>
            <p>{name}</p>
            <p>{budget}</p>
            <p>{category}</p>
            <button>Editar</button>
            <button>Excluir</button>
        </div>
        
    )
}

export default ProjectCard