import iconMenu from './icon-menu.svg'
import styled from "styled-components";

const BotaoMenu = styled.button`
    background: none;
    border: none;

    width: 18px;
    height: 15px;
`

export const MenuHamburguer = () => {
    return (
        <BotaoMenu>
            <img src={iconMenu} />
        </BotaoMenu>
    )
}