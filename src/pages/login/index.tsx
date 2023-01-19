import { Box, Grid } from '@mui/material';
import React from 'react';
import { BannerLogin } from '../../components/bannerLogin';
import { ContainerForm } from '../../components/containerForm';
import { Form } from '../../components/form';
import { WrapperContent } from '../../components/wrapperContent';

export const Login = () => {
    return (   
    <Box sx={{ width: '100vw', height: '100vh'}}>
        <Grid container spacing={2} sx={{ height: '100%'}} >
            <Grid item xs={12} md={8}>
                <Box sx={{width: '100%', height: '100%', px:2}}>
                    <BannerLogin />
                </Box>
            </Grid>            
            <Grid item xs={12} md={4}>                    
                <ContainerForm>
                    <Form mode='login' />
                </ContainerForm>                
            </Grid>            
        </Grid>
    </Box> 
    )
} 