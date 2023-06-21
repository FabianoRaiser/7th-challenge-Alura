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
`

export const CampoPesquisa = () => {
    return (
        <StyledCampoPesquisa type='text' placeholder="Digite o produto"/>
    )
}