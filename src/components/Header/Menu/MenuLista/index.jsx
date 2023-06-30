import MenuLink from "./MenuLink"
import styled from 'styled-components';

const StyledMenuLista = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    @media (min-width: 768px) {
        position: inherit;
        flex-direction: row;
        gap: 1.25rem;
        margin-left: 1.25rem;
    }

    @media (min-width: 1440px) {
        gap: 2.5rem;
        margin-left: 2.5rem;
    }
`

export const MenuLista = () => {
    return (
        <StyledMenuLista>
            <MenuLink to='/'>Home</MenuLink>
            <MenuLink to='/nossaslojas'>Nossas Lojas</MenuLink>
            <MenuLink to='/novidades'>Novidades</MenuLink>
            <MenuLink to='/promocoes'>Promoções</MenuLink>
        </StyledMenuLista>
    )
}
