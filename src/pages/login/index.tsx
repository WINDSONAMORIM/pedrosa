import React from 'react';
import { BannerLogin } from '../../components/bannerLogin';
import { ContainerForm } from '../../components/containerForm';
import { Form } from '../../components/form';
import { WrapperContent } from '../../components/wrapperContent';

export const Login = ()=>{
    return(
        <WrapperContent>
            <BannerLogin />
            <ContainerForm>
                <Form mode='login' />
            </ContainerForm>    
        </WrapperContent>
        
    )
} 