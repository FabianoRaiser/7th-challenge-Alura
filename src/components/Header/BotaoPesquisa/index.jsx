import { colorBranco, colorPreto } from "components/ui/variaveis"
import styled from "styled-components"

const StyledBotaoPesquisa = styled.button`
    font-weight: 700;

    padding: 0.5em 1em;

    background: none;

    border: 1px solid ${colorPreto};

    @media (min-width: 768px) {
        border-color: ${colorBranco};
        color: ${colorBranco};

        width: 4rem;
        height: 2.375rem;

        font-weight: 300;
    }
`

export const BotaoPesquisa = () => {
    return (
        <StyledBotaoPesquisa>Search</StyledBotaoPesquisa>
    )
}
