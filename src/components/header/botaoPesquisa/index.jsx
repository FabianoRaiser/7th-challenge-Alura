import { colorPreto } from "components/ui/variaveis"
import styled from "styled-components"

const StyledBotaoPesquisa = styled.button`
    font-weight: 700;

    padding: 0.5em 1em;

    background: none;

    border: 1px solid ${colorPreto};
`

export const BotaoPesquisa = () => {
    return (
        <StyledBotaoPesquisa>Search</StyledBotaoPesquisa>
    )
}