import { colorBranco, colorPreto } from "components/ui/variaveis";
import styled from "styled-components";

export const StyledFacilidades = styled.section`
    background-color: ${colorPreto};
    color: ${colorBranco};

    margin-top: 3rem;

    & h3 {
        font-size: 1.5rem;
        font-weight: 500;

        text-align: center;

        padding: 2rem 1.9rem;
    }
`

export const StyledFacList = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 1.7rem;
    gap: 2rem;
`