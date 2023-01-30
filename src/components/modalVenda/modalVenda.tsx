import { Autocomplete, Box, Dialog, DialogContent, DialogContentText, DialogProps, DialogTitle, Grid, Modal, TextField, Typography } from "@mui/material"
import { useState } from "react";
import styled from "styled-components";

interface ModalProps {
    open: boolean;
    handleClose: () => void;
}

const itens = [
'Lavatório',
'Cadeira',
'Mocho'
]

const modelo = [
    'Mistic',
    'Perola',
    'Gobli',
    'futurama'
]

const cores = [
    'Preto',
    'Preto Croco',
    'Preto blink',
    'Perola',
    'Rose', 
    'Bordo',
    'Fendi'
]

const costura = [
    'Lisa',
    'Padrão',
    'Matelassê'
]

export function ModalVenda({ open, handleClose}: ModalProps) {
    const [fullWidth, setFullWidth] = useState(true);
    const [maxWidth, setMaxWidth] = useState<DialogProps['maxWidth']>('md');
    return(
        <Dialog open = {open} onClose={handleClose} fullWidth={fullWidth} maxWidth={maxWidth}>
        <DialogTitle>Insirar os dados para incluir uma venda</DialogTitle>
        <DialogContent style={{height:'90vh'}}>
            <DialogContentText>
                <Grid container marginTop={1}>
                    <Grid item xs={4}>
                    <TextField id="cliente" label="Cliente" variant="standard" />
                    </Grid>
                    <Grid item xs={4}>
                        <Autocomplete 
                        disablePortal
                        id="item" 
                        options={itens}
                        sx={{ width: 200 }} 
                        renderInput={(params) => <TextField {...params} label="Item"/>}
                        />
                    </Grid>
                    <Grid item xs={4}>  
                        <Autocomplete 
                        disablePortal
                        id="item" 
                        options={cores}
                        sx={{ width: 200 }} 
                        renderInput={(params) => <TextField {...params} label="Cores"/>}
                        />
                    </Grid>
                </Grid>    
                <Grid container marginTop={1}>
                    <Grid item xs={4}>
                    <TextField id="quantidade" label="Quantidade" variant="standard" />
                    </Grid>
                    <Grid item xs={4}>
                        <Autocomplete 
                        disablePortal
                        id="costura" 
                        options={costura}
                        sx={{ width: 200 }} 
                        renderInput={(params) => <TextField {...params} label="costura"/>}
                        />
                    </Grid>
                    <Grid item xs={4}>  
                        <Autocomplete 
                        disablePortal
                        id="linha" 
                        options={cores}
                        sx={{ width: 200 }} 
                        renderInput={(params) => <TextField {...params} label="linha"/>}
                        />
                    </Grid>
                </Grid>      
            </DialogContentText>
        </DialogContent>           
        </Dialog>        
    )
}