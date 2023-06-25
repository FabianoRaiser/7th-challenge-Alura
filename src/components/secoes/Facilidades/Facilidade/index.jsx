/* eslint-disable react/prop-types */

import { StyledFacilidade } from "./styles";

export const Facilidade = ({ facilidade }) => {
    const { titulo, texto, icone375, icone768, icone1440 } = facilidade;

    return (
        <StyledFacilidade>
            <img
                src={icone1440}
                srcSet={`${icone375} 375w, ${icone768} 768w, ${icone1440} 1440w`}
                sizes="375px, (min-width: 768px) 768px, (min-width: 1440px) 1440px"
            />
            <div>
                <h4>{titulo.toUpperCase()}</h4>
                <p>{texto}</p>
            </div>
        </StyledFacilidade>
    )
}