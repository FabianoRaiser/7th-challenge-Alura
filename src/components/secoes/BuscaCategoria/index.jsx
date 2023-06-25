import { SectionTitle } from 'components/ui/commonElements';
import { CategoriaCard } from './CategoriaCard';
import categoriasData from './categorias.json'
import { StyledBuscaCat, StyledCatCards } from './styles';

export const BuscaCategoria = () => {
    const categorias = categoriasData.categorias;

    return (
        <StyledBuscaCat>
            <SectionTitle>Busque por categoria:</SectionTitle>
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