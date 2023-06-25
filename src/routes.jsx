import { Header } from "components/Header"
import ScrollToTop from "components/ScrollToTop"
import { Home } from "pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"


export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}