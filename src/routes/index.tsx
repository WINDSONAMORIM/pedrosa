import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from "../pages/home";
import { Login } from "../pages/login";
import { Signup } from "../pages/signup";
import { Venda } from "../pages/venda";


export const AppRoutes = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/signup' element= {<Signup />} />
                <Route path='/home' element= {<Home />} />
                <Route path='/venda' element= {<Venda />} />
                <Route path='*' element={<h1>Pagina Erro</h1>} />
            </Routes>
        </BrowserRouter>
    )
}