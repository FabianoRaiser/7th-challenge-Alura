import { colorBranco, colorPreto } from "components/ui/variaveis";
import styled from "styled-components";


export const StyledCatCard = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;

    width: max-content;
    max-width: 45%;

    
    @media (min-width: 1440px) {
        max-width: 33%;
    }

    img {
        width: 100%;
        margin-bottom: -0.45rem;
    }
    
    h4 {
        background-color: ${colorPreto};
        color: ${colorBranco};

        min-width: 100%;
        text-align: center;

    }
`