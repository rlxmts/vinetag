import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./inicio";
import Favoritos from "./favoritos";
import Cabecalho from "../components/layout/Cabecalho";

const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Cabecalho />
            <Routes>
                <Route path='/' element={<Inicio />}/>
                <Route path='/favoritos' element={<Favoritos />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;