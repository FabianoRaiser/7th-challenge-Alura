import { colorPreto } from "components/ui/variaveis";
import styled from "styled-components";
import { Input } from 'components/ui/commonElements';


export const StyledNewsletterSub = styled.section`
    margin: 1.78rem 1.66rem;
    border: 1px solid ${colorPreto};

    padding: 1.5rem;

    p {
        text-align: center;
        font-size: 1rem;
        line-height: 1.4375rem;
    }

    @media (min-width: 1440px) {
        max-width: 45rem;
        margin: 2.5rem auto;

        p {
            font-size: 1.25rem;
        }
    }
`

export const SubDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 1.5rem;
`

export const SubInput = styled(Input)`
    width: 15rem;

    @media (min-width: 768px) {
        width: 48rem
    }

    @media (min-width: 1440px) {
        width: 90rem;
    }
`