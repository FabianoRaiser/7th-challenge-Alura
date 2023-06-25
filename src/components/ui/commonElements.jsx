import styled from 'styled-components';
import { colorBranco, colorRoxo } from './variaveis';

export const SectionTitle = styled.h3`
    font-size: 1.75rem;
    font-weight: 500;
    text-align: center;
`

export const Botao = styled.button`
    background-color: ${colorRoxo};

    width: 6.375rem;

    border: none;

    padding: 0.5625rem 1rem;

    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 0.02856rem;

    color: ${colorBranco};
`