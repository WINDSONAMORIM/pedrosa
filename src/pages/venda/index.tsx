import React, { useEffect, useState} from 'react';
import { HeaderHome } from '../../components/headerHome';
import { ModalVenda } from '../../components/modalVenda/modalVenda';
import { WrapperContent } from '../../components/wrapperContent';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

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
        <WrapperContent>
        <ul>
            <li>
                <Card style={{ boxShadow: "10px 10px 5px #888888" }} sx={{ minWidth: 275, maxWidth: 345}}>
                    <CardContent >
                        <Typography variant="h5" component="div" textAlign='center'>
                        LAVATÓRIOS
                        </Typography>
                    </CardContent>
                    <CardMedia
                        component="img"
                        height='275' 
                        image={require('../../assets/images/lavatorio.png')}
                        alt="lavatorio"
                    />
                    <CardActions sx={{m:2, justifyContent:'right'}}>                        
                        <AddShoppingCartIcon color="primary" />                        
                    </CardActions>
                </Card>
            </li>
            <li><span>Cadeira</span><AddShoppingCartIcon /></li>
            <li><span>Mocho</span><AddShoppingCartIcon /></li>
            <li><span>Sofás</span><AddShoppingCartIcon /></li>
            <li><span>Espelhos</span><AddShoppingCartIcon /></li>
        </ul>
        <ModalVenda open={openModal} handleClose={handleClose}/>
        </WrapperContent>  
        </>
    )
}