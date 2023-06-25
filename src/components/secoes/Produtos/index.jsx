import { SectionTitle } from "components/ui/commonElements"
import { ListaProdutos, StyledProdutos } from "./styles"

import produtosData from './produtos.json';
import { ProdutoCard } from "./ProdutoCard";

const produtos = produtosData.produtos;

export const Produtos = () => {
    return (
        <StyledProdutos>
            <SectionTitle>Produtos que estão bombando!</SectionTitle>
            <ListaProdutos>
                {produtos.map((produto) => {
                    return (
                        <ProdutoCard key={produto.id} produto={produto}/>
                    )
                })}
            </ListaProdutos>
        </StyledProdutos>
    )
}