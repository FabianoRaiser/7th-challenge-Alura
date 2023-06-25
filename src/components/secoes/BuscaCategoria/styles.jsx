import styled from "styled-components";

export const StyledBuscaCat = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 1.5rem;

    padding: 0 1.7rem;   
`

export const StyledCatCards = styled.div`
    display: flex;
    flex-wrap: wrap;

    justify-content: center;

    gap: 1rem 1.88rem;

    @media (min-width: 1440px) {
        width: 80%;
    }

`