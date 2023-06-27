import styled from 'styled-components';
import { colorBranco, colorRoxo } from './variaveis';
import { colorPreto, colorVerde } from 'components/ui/variaveis';

export const SectionTitle = styled.h3`
    font-size: 1.75rem;
    font-weight: 500;
    text-align: center;
`

export const Botao = styled.button`
    background-color: ${colorRoxo};

    width: 6.375rem;
    height: 2.375rem;

    border: none;

    padding: 0.5625rem 1rem;

    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 0.02856rem;

    color: ${colorBranco};
`

export const Input = styled.input`
    height: 3em;
    width: 320px;
    padding: 1em;
    font-size: 12px;

    border: 1px solid ${colorPreto};

    &:focus {
        outline: none;
        border: 2px solid ${colorVerde};
    }

    @media (min-width: 768px) {
        width: 9.0625rem;
    }

    @media (min-width: 1440px) {
        width: 320px ;
    }
`