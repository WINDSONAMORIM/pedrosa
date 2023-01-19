import React from 'react';
import { ContainerForm } from '../../components/containerForm';
import { WrapperContent } from '../../components/wrapperContent';
import { BannerLogin } from '../../components/bannerLogin';
import { Form } from '../../components/form';
import { Box, Grid } from '@mui/material';

export const Signup = ()=>{
    return(
        <Box sx={{ width: '100vw', height: '100vh'}}>
        <Grid container spacing={2} sx={{ height: '100%'}} >
            <Grid item xs={12} md={8}>
                <Box sx={{width: '100%', height: '100%', px:2}}>
                    <BannerLogin />
                </Box>
            </Grid>            
            <Grid item xs={12} md={4}>                    
                <ContainerForm>
                    <Form mode='signup' />
                </ContainerForm>                
            </Grid>            
        </Grid>
        </Box> 

    )
}