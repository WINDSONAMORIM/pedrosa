import React, { useEffect, useState} from 'react';
import { HeaderHome } from '../../components/headerHome';
import { ModalVenda } from '../../components/modalVenda/modalVenda';
import { WrapperContent } from '../../components/wrapperContent';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { CardVenda } from '../../components/card';

const imagem = require('../../assets/images/lavatorio.png')

export const Venda = ()=> {

    const [openModal, setOpenModal] = useState(false)

    const addVenda = () => {
        setOpenModal(true);
    }

    const handleClose = () => {
        setOpenModal(false);
    }
    return(
        <>
        <HeaderHome />     
        <Grid container spacing={2} sx={{ height: '100%'}} >
            <Grid item xs={6} md={4}>
                <CardVenda label='LAVATÓRIOS' imagem={imagem}/>
            </Grid>
            <Grid item xs={6} md={4}>
                <CardVenda label='CADEIRAS' imagem={imagem}/>
            </Grid>
            <Grid item xs={6} md={4}>
                <CardVenda label='SOFÁS' imagem={imagem}/>
            </Grid>
        </Grid>
        <ModalVenda open={openModal} handleClose={handleClose}/>        
        </>
    )
}