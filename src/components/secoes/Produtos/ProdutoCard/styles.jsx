import { colorCinza } from 'components/ui/variaveis';
import styled from 'styled-components';

export const StyledProdCard = styled.div`
    display: flex;
    height: 38.4375rem;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    align-self: stretch;

    max-width: 20.625rem;

    & img {
        width: 100%;
    }
`

export const CardDescricao = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.8rem 0.5rem;

    border-radius: 0 0 1rem 1rem;

    background-color: ${colorCinza};

    gap: 0.8rem;

    & h4 {
        font-size: 1rem;
        font-weight: 700;
        line-height: 1.4375rem;
    }

    & p {
        font-size: 0.8125rem;
        line-height: 1.25rem;
    }

    & span {
        font-size: 1rem;
        font-weight: 700;
        line-height: 1.4375rem;
    }
`