import { colorBranco, colorPreto } from 'components/ui/variaveis'
import styled from 'styled-components'

export const StyledFooter = styled.footer`
    background-color: ${colorPreto};
    color: ${colorBranco};

    padding: 1.0625rem 1.4375rem    ;

    & p {
        text-align: center;
        font-size: 0.8125rem;
        line-height: 1.25rem;
    }
`