import styles from "./ProjectCard.module.css"

function ProjectCard({id, name, budget, category, handleRemove}){

    function moeda(valor) {
        var valorMoeda = Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(valor)
        return valorMoeda
    }
    return (
        <div className={styles.project_card_container}>
            <h4>{name}</h4>
            <p>
                <span>Orçamento:</span> {moeda(budget)}
            </p>
            <p className={styles.category_text}>
                <span className={`${styles[category.toLowerCase()]}`}></span>{category}
            </p>
            <button>Editar</button>
            <button>Excluir</button>
        </div>
        
    )
}

export default ProjectCard