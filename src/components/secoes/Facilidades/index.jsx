import { StyledFacilidades, StyledFacList } from "./styles"
import facilidadesData from './facilidades.json'
import { Facilidade } from "./Facilidade";
import { SectionTitle } from "components/ui/commonElements";

const facilidades = facilidadesData.facilidades

export const Facilidades = () => {
    return (
        <StyledFacilidades>
            <SectionTitle>Conheça todas as nossas facilidades</SectionTitle>
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