/* eslint-disable react/prop-types */

import { Botao } from "components/ui/commonElements";
import { CardDescricao, StyledProdCard } from "./styles";
import { useRef } from "react";
import { ProdutoModal } from "../ProdutoModal";


export const ProdutoCard = ({ produto }) => {
    const { titulo, descricao, valor, img375, img768, img1440 } = produto;
    const modalRef = useRef(null);

    const abreModal = () => {
        modalRef.current.showModal();
    }

    const fechaModal = () => {
        modalRef.current.close();
    }


    return (
        <StyledProdCard>
            <picture>
                <source srcSet={img768} media="(min-width: 768px)" />
                <source srcSet={img1440} media="(min-width: 1440px)" />
                <img src={img375} alt="Imagem do Produto"/>
            </picture>
            <CardDescricao>
                <h4>{titulo}</h4>
                <p>{descricao}</p>
                <span>{valor}</span>
                <Botao onClick={abreModal}>Ver mais</Botao>
                <ProdutoModal produto={produto} fechaModal={fechaModal} ref={modalRef} />
            </CardDescricao>
        </StyledProdCard>
    )
}