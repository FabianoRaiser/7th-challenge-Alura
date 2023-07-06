import { StyledCatCard } from "./styles";


// eslint-disable-next-line react/prop-types
export const CategoriaCard = ({ categoria }) => {
    // eslint-disable-next-line react/prop-types
    const { nome, img357, img768, img1440 } = categoria;

    return (
        <StyledCatCard>
            <picture>
                <source srcSet={img768} media="(min-width: 768px)" />
                <source srcSet={img1440} media="(min-width: 1440px)" />
                <img src={img357} alt="Imagem da categoria" />
            </picture>
            <h4>{nome}</h4>
        </StyledCatCard>
    );
}