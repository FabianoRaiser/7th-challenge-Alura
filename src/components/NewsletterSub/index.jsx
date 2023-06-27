import { Botao } from "components/ui/commonElements"
import { StyledNewsletterSub, SubDiv, SubInput } from "./styles"


export const NewsletterSub = () => {
    return (
        <StyledNewsletterSub>
            <p>Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra? Cadastre-se!</p>
            <SubDiv>
                <SubInput type="email" placeholder="Digite seu email" />
                <Botao>Enviar</Botao>
            </SubDiv>
        </StyledNewsletterSub>
    )
}