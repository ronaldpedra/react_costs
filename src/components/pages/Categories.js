import Container from "../layout/Container";
import HandleCategories from "../wraped/HandleCategories";

export default function Categories() {
    return (
        <Container customClass='center'>
            <h1>Categorias Disponíveis no Sistema</h1>
            <HandleCategories />
        </Container>
    )
}
