import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

interface CardDefaultProps{
    label: string;
    imagem: string;
}

export const CardVenda = ({label, imagem}:CardDefaultProps) =>{
    return(
        <>
            <Card style={{ boxShadow: "10px 10px 5px #888888" }} sx={{ minWidth: 275, maxWidth: 345}}>
                <CardContent >
                    <Typography variant="h5" component="div" textAlign='center'>
                    {label}
                    </Typography>
                </CardContent>
                <CardMedia
                    component="img"
                    height='275' 
                    image={imagem}
                    alt="lavatorio"
                />
                <CardActions sx={{m:2, justifyContent:'right'}}>                        
                    <AddShoppingCartIcon color="primary" />                        
                </CardActions>
            </Card>
        </>
    )
}