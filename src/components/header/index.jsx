import styled from 'styled-components';
import logoMobile from './Logo_mobile.png'
import { MenuHamburguer } from './menuHamburguer';
import { colorPreto } from 'components/ui/variaveis';
import { CampoPesquisa } from './campoPesquisa/index';
import { BotaoPesquisa } from './botaoPesquisa/index';

const StyledHeader = styled.header`
    position: absolute;
    left: 0%;
    right: 0%;
    
    `;

const Cabecalho = styled.div`
    padding: 0 20px;
    background-color: ${colorPreto};
    display: flex;
    align-items: center;
    justify-content: space-between;

`

const SytledSeachArea = styled.div`
    padding: 24px;
    display: flex;
    gap: 0.5em;

    justify-content: space-around;
`

export const Header = () => {
    return (
        <>
            <StyledHeader>
                <Cabecalho>
                    <h1><img src={logoMobile} /></h1>
                    <MenuHamburguer />
                </Cabecalho>
                <SytledSeachArea>
                    <CampoPesquisa />
                    <BotaoPesquisa />
                </SytledSeachArea>
            </StyledHeader>
        </>
    )
}

