import styled from 'styled-components';
import logoMobile from './Logo_mobile.png'
import logoTablet from './Logo_tablet.png'
import logoDesktop from './Logo_desktop.png'
import { Menu } from './Menu';
import { colorPreto } from 'components/ui/variaveis';
import { CampoPesquisa } from './CampoPesquisa/index';
import { BotaoPesquisa } from './BotaoPesquisa/index';

const StyledHeader = styled.header`
    position: relative;
    left: 0%;
    right: 0%;

    @media (min-width: 768px) {
        background-color: ${colorPreto};
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    `;

const Cabecalho = styled.nav`
    padding: 1.5rem 1.37rem ;
    background-color: ${colorPreto};
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 768px) {
        padding-right: 0;
    }
`

const SytledSeachArea = styled.div`
    background: none;
    padding: 24px;
    display: flex;
    gap: 0.5em;

    justify-content: space-around;

    @media (min-width: 768px) {
        padding-right: 12px;
    }

    @media (min-width: 1440px) {
        padding-right: 36px;
    }
`

export const Header = () => {
    return (
        <>
            <StyledHeader>
                <Cabecalho>
                    {/* Alterar para um link do Router-DOM */}
                    <picture>
                        <source srcSet={logoTablet} media="(min-width: 768px)" />
                        <source srcSet={logoDesktop} media="(min-width: 1440px)" />
                        <img src={logoMobile} alt='Logo da Meteora' />
                    </picture>
                    <Menu />
                </Cabecalho>
                <SytledSeachArea>
                    <CampoPesquisa />
                    <BotaoPesquisa />
                </SytledSeachArea>
            </StyledHeader>
        </>
    )
}

