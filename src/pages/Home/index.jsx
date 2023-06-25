import Banner from "components/Banner"
import { BuscaCategoria } from "components/secoes/BuscaCategoria"
import { Facilidades } from "components/secoes/Facilidades"
import { Produtos } from "components/secoes/Produtos"

export const Home = () => {
    return (
        <main>
            <Banner />
            <BuscaCategoria />
            <Produtos />
            <Facilidades />
        </main>
    )
}