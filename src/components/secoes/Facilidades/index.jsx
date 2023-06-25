import { StyledFacilidades, StyledFacList } from "./styles"
import facilidadesData from './facilidades.json'
import { Facilidade } from "./Facilidade";

const facilidades = facilidadesData.facilidades

export const Facilidades = () => {
    return (
        <StyledFacilidades>
            <h3>Conheça todas as nossas facilidades</h3>
            <StyledFacList>
                {facilidades.map((facilidade) => {
                    return (
                        <Facilidade key={facilidade.id} facilidade={facilidade} />
                    )
                })}
            </StyledFacList>
        </StyledFacilidades>
    )
}