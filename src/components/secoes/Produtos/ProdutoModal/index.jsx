/* eslint-disable react/prop-types */
import { ProdModalSection, StyledProdModal, ProdModalMain, ProdModalCabecalho } from "./styles"
import xIcon from './X-icon.svg'
import checkIcon from './check-circle.svg'


export const ProdutoModal = ({ modal, fechaModal, produto }) => {
    const { id, titulo, descricao, valor, img375, img768, img1440, vendedor, cores, tamanhos } = produto;

    return (
        <StyledProdModal open={modal ? true : false}>
            <ProdModalCabecalho>
                <img src={checkIcon} style={{ width: 32, height: 32 }} />
                <button onClick={fechaModal} ><img src={xIcon} style={{ width: 16, height: 16 }} /></button>
            </ProdModalCabecalho>
            <ProdModalMain>
                <ProdModalSection>
                    <picture>
                        <source srcSet={img768} media="(min-width: 768px)" />
                        <source srcSet={img1440} media="(min-width: 1440px)" />
                        <img src={img375} alt="Imagem do produto" />
                    </picture>
                    <h2>{titulo}</h2>
                    <p>{descricao}</p>
                </ProdModalSection>
                <ProdModalSection>
                    <span>{valor}</span>
                    <p>{vendedor}</p>
                </ProdModalSection>
                <ProdModalSection>
                    <h4>Cores:</h4>
                    {cores.map((cor) => {
                        return (
                            <div key={cor.id}>
                                <input
                                    type="radio"
                                    id={cor.id}
                                    value={cor.nome}
                                    name={`${id}_cor`} />
                                <label htmlFor={cor.id}>{cor.nome}</label>
                            </div>
                        )
                    })}
                </ProdModalSection>
                <ProdModalSection>
                    <h4>Tamanho:</h4>
                    {tamanhos.map((tamanho) => {
                        return (
                            <div key={tamanho.id}>
                                <input
                                    type="radio"
                                    id={tamanho.id}
                                    value={tamanho.nome}
                                    name={`${id}_tamanho`} />
                                <label htmlFor={tamanho.id}>{tamanho.nome}</label>
                            </div>
                        )
                    })}
                </ProdModalSection>
            </ProdModalMain>
        </StyledProdModal>
    )
}