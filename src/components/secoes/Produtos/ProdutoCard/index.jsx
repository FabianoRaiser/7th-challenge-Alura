/* eslint-disable react/prop-types */

import { Botao } from "components/ui/commonElements";
import { CardDescricao, StyledProdCard } from "./styles";

export const ProdutoCard = ({ produto }) => {
    const { titulo, descricao, valor, img375, img768, img1440 } = produto;

    return (
        <StyledProdCard>
            <img
                src={img1440}
                srcSet={`${img375} 375w, ${img768} 768w, ${img1440} 1440w`}
                sizes="375px, (min-width: 768px) 768px, (min-width: 1440px) 1440px"
            />
            <CardDescricao>
                <h4>{titulo}</h4>
                <p>{descricao}</p>
                <span>{valor}</span>
                <Botao>Ver mais</Botao>
            </CardDescricao>
        </StyledProdCard>
    )
}