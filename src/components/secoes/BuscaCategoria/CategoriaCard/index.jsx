import { StyledCatCard } from "./styles";


// eslint-disable-next-line react/prop-types
export const CategoriaCard = ({ categoria }) => {
    console.log(categoria);

    // eslint-disable-next-line react/prop-types
    const { nome, img357, img768, img1440} = categoria;

    return (
        <StyledCatCard>
            <img
                src={img1440}
                srcSet={`${img357} 357w, ${img768} 768w, ${img1440} 1440w`}
                sizes="357px, (min-width: 768px) 768px, (min-width: 1440px) 1440px" 
            />
            <span>{nome}</span>
        </StyledCatCard>
    );
}