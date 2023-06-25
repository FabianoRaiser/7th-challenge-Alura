import Banner from "components/Banner"
import { BuscaCategoria } from "components/secoes/BuscaCategoria"
import { Facilidades } from "components/secoes/Facilidades"

export const Home = () => {
    return (
        <main>
            <Banner />
            <BuscaCategoria />
            <Facilidades />
        </main>
    )
}