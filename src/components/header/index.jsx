import styled from 'styled-components';
import logoMobile from './Logo_mobile.png'
import { MenuHamburguer } from './MenuHamburguer';
import { colorPreto } from 'components/ui/variaveis';
import { CampoPesquisa } from './CampoPesquisa/index';
import { BotaoPesquisa } from './BotaoPesquisa/index';

const StyledHeader = styled.header`
    position: absolute;
    left: 0%;
    right: 0%;
    
    `;

const Cabecalho = styled.nav`
    padding: 1.5rem 1.37rem;
    background-color: ${colorPreto};
    display: flex;
    align-items: center;
    justify-content: space-between;

    position: relative;

`

const SytledSeachArea = styled.div`
    background: none;
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
                    {/* Alterar para um link do Router-DOM */}
                    <a><img src={logoMobile} /></a>
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

