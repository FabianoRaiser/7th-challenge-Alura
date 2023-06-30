import { Header } from "components/Header"
import { Rodape } from "components/Rodape"
import ScrollToTop from "components/ScrollToTop"
import { Home } from "pages/Home"
import { Pagina404 } from "pages/Pagina404"
import { BrowserRouter, Routes, Route } from "react-router-dom"


export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/*" element={<Pagina404 />} />
            </Routes>
            <Rodape />
        </BrowserRouter>
    )
}