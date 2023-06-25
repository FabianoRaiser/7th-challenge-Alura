import { colorBranco, colorPreto } from "components/ui/variaveis";
import styled from "styled-components";


export const StyledCatCard = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;

    width: 45%;
    
    @media (min-width: 1440px) {
        width: 30%;
    }

    & img {
        width: 100%;
    }
    
    & span {
        background-color: ${colorPreto};
        color: ${colorBranco};

        width: 100%;
        text-align: center;

    }
`