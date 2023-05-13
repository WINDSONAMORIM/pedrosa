import React from 'react' 
import { TextField } from '@mui/material'

interface InputDefaultProps{
    type: string;
    name: Name;
    label: string;
    value: string;
    color: 'error' | 'primary';
    handleChange: (value: string, key: Name) => void;
}

export type Name = "name" | "email" | "password" | "repeatPassword"; 

export const InputDefault = ({type, color, name, label,value, handleChange}: InputDefaultProps)=>{
    return(
    <TextField type={type} color={color} name={name} label={label} value={value} onChange={(e)=> handleChange(e.target.value, name)}/>
    )
}