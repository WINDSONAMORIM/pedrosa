import {
  Autocomplete,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogProps,
  DialogTitle,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

interface ModalProps {
  open: boolean;
  handleClose: () => void;
  label: string;
}

const itens = ["Lavatório", "Cadeira", "Mocho"];

const modelo = ["Mistic", "Perola", "Gobli", "futurama"];
const modeloLavatorio = [
  "Mistic",
  "Perola",
  "Gobbi",
  "Viena",
  "Espinela",
  "Fibra",
];

const coresTecido = [
  "Preto",
  "Preto Croco",
  "Preto blink",
  "Perola",
  "Rose",
  "Bordo",
  "Fendi",
];

const coresMadeira = ["Preto", "Branco"];
const coresLinha = ["Preto", "Branco"];
const cuba = ["Porcelana", "Fibra"];
const coresCuba = ["Preto", "Branco", "Dourada", "Prata"];

const costura = ["Lisa", "Padrão", "Matelassê"];

export function ModalVenda({ open, handleClose, label }: ModalProps) {
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState<DialogProps["maxWidth"]>("md");

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth={fullWidth}
      maxWidth={maxWidth}
    >
      {label === "LAVATÓRIOS" && (
        <>
          <DialogTitle>Insirar os dados do seu lavatório</DialogTitle>
        </>
      )}
      {label === "CADEIRAS" && (
        <>
          <DialogTitle>Insirar os dados da sua cadeira</DialogTitle>
        </>
      )}
      <DialogContent style={{ height: "90vh" }}>
        <DialogContentText>
          <Grid container marginTop={1}>
            <Grid item xs={4}>
              <TextField id="cliente" label="Cliente" variant="standard" />
            </Grid>
            <Grid item xs={4}>
              <TextField id="qtd" label="Quantidade" variant="standard" />
            </Grid>
            <Grid item xs={4}>
              <Autocomplete
                disablePortal
                id="modelo"
                options={modeloLavatorio}
                sx={{ width: 200 }}
                renderInput={(params) => (
                  <TextField {...params} label="Modelo" />
                )}
              />
            </Grid>
          </Grid>
          <Grid container marginTop={1}>
            <Grid item xs={4}>
              <Autocomplete
                disablePortal
                id="item"
                options={coresTecido}
                sx={{ width: 200 }}
                renderInput={(params) => (
                  <TextField {...params} label="Cores" />
                )}
              />
            </Grid>
            <Grid item xs={4}>
              <Autocomplete
                disablePortal
                id="costura"
                options={costura}
                sx={{ width: 200 }}
                renderInput={(params) => (
                  <TextField {...params} label="costura" />
                )}
              />
            </Grid>
            <Grid item xs={4}>
              <Autocomplete
                disablePortal
                id="linha"
                options={coresLinha}
                sx={{ width: 200 }}
                renderInput={(params) => (
                  <TextField {...params} label="linha" />
                )}
              />
            </Grid>
          </Grid>
          <Grid container marginTop={1}>
            <Grid item xs={4}>
              <Autocomplete
                disablePortal
                id="cuba"
                options={cuba}
                sx={{ width: 200 }}
                renderInput={(params) => <TextField {...params} label="cuba" />}
              />
            </Grid>
            <Grid item xs={4}>
              <Autocomplete
                disablePortal
                id="coresCuba"
                options={coresCuba}
                sx={{ width: 200 }}
                renderInput={(params) => (
                  <TextField {...params} label="Cores Cuba" />
                )}
              />
            </Grid>
          </Grid>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}
