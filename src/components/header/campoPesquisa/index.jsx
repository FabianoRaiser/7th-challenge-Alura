import { colorPreto, colorVerde } from "components/ui/variaveis"
import styled from "styled-components"

const StyledCampoPesquisa = styled.input`
    height: 3em;
    width: 320px;
    padding: 1em;
    font-size: 12px;

    border: 1px solid ${colorPreto};

    &:focus {
        outline: none;
        border: 2px solid ${colorVerde};
    }

    @media (min-width: 768px) {
        width: 9.0625rem;
    }

    @media (min-width: 1440px) {
        width: 320px;
    }
`

export const CampoPesquisa = () => {
    return (
        <StyledCampoPesquisa type='text' placeholder="Digite o produto"/>
    )
}