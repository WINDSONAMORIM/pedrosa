import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from "../pages/home";
import { Login } from "../pages/login";
import { SignUp } from "../pages/signup";
import { Venda } from "../pages/venda";
import { VendaLavatorio } from "../pages/lavatorio";


export const AppRoutes = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/signUp' element= {<SignUp />} />
                <Route path='/home' element= {<Home />} />
                <Route path='/venda' element= {<Venda />} />
                <Route path='/VendaLavatorio' element= {<VendaLavatorio />} />                
                <Route path='*' element={<h1>Pagina Erro</h1>} />
            </Routes>
        </BrowserRouter>
    )
}