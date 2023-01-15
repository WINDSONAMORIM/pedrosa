import React, { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { HomeContent } from '../../components/wrapperContent';

export const Home = ()=>{
    const navigate = useNavigate();
    const [userLogged, setUserLogged] = useState('');

    const usuarioLogado = (JSON.parse(localStorage.getItem('usuarioLogado') ?? '[]'));
    
    useEffect( ()=>{
        const usuarioLogado = localStorage.getItem('usuarioLogado');
            if(!usuarioLogado) {
                navigate('/')
            } else {
                setUserLogged(usuarioLogado);
            }
    },[])    

    return(      
        <HomeContent>
            <h1>bemvindo</h1>
        </HomeContent>    
    )
}