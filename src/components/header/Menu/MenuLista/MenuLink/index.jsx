import { NavLink } from "react-router-dom"
import styled from 'styled-components';
import { colorBranco, colorVerde } from 'components/ui/variaveis';

const StyledLink = styled.li`
    color: ${colorBranco};
    text-align: center;
    padding: 0.5rem 0;
    font-size: 1.5rem;

    @media (max-width: 767px) {
        &:nth-child(n+2){
            content: "";
            border-top: 1px solid ${colorBranco};
        }
    }

    @media (min-width: 768px) {
        font-size: 0.9rem;
        padding: 0.5rem;
        text-align: inherit;
        line-height: 1.25rem;
    }

    @media (min-width: 1440px) {
        font-size: 1rem;
    }
    
`

// eslint-disable-next-line react/prop-types
function MenuLink({ to, children }) {
    return (
        <StyledLink>
            <NavLink
                style={({ isActive }) => {
                    return {
                        fontWeight: isActive ? 700 : 300,
                        color: isActive ? colorVerde : "inherit",
                    };
                }}
                to={to} end>
                {children}
            </NavLink>
        </StyledLink>
    );
}

export default MenuLink;