
import { colorCinza, colorPreto } from 'components/ui/variaveis';
import styled from 'styled-components';

export const StyledProdModal = styled.dialog`
    left: 10%;
    
    &::backdrop {
        background: rgba(0, 0, 0, 0.7);
    }
`
export const ProdModalCabecalho = styled.div`
    background-color: ${colorPreto};
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1rem 1.12rem;
`

export const ProdModalMain = styled.div`
    border: 1px solid ${colorCinza};
    margin: 1rem;
`

export const ProdModalSection = styled.div`
    display: flex;
    flex-direction: column;
`