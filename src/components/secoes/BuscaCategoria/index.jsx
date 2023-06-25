import { CategoriaCard } from './CategoriaCard';
import categoriasData from './categorias.json'
import { StyledBuscaCat, StyledCatCards } from './styles';

export const BuscaCategoria = () => {
    const categorias = categoriasData.categorias;

    return (
        <StyledBuscaCat>
            <h3>Busque por categoria:</h3>
            <StyledCatCards>
            {categorias.map((categoria) => {
                return (
                    <CategoriaCard key={categoria.id} categoria={categoria}/>
                )
            })}
            </StyledCatCards>
        </StyledBuscaCat>
    )
}