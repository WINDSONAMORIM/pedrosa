import { Button } from '@mui/material';
import React, { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderHome } from '../../components/headerHome';
import { ModalVenda } from '../../components/modalVenda/modalVenda';
import { WrapperContent } from '../../components/wrapperContent';

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
    
    const [openModal, setOpenModal] = useState(false)

    const addVenda = () => {
        setOpenModal(true);
    }

    const handleClose = () => {
        setOpenModal(false);
    }

    const openPageVenda = () => {
        navigate('/venda');
    }

    return( 
        <>
        <HeaderHome />     
        <WrapperContent>
        <Button onClick={() => addVenda()}>Open modal</Button>
        <Button onClick={() => openPageVenda()}>Open Venda</Button>
        <ModalVenda open={openModal} handleClose={handleClose}/>
        </WrapperContent>  
        </>
    )
}