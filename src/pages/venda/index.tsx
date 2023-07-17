import React, { useEffect, useState } from "react";
import { HeaderHome } from "../../components/headerHome";
import { Autocomplete, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Paper, TextField } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  searchClients,
  searchClientsName,
} from "../../store/modules/clients/clientsSlice";
import { useDebounce } from "../../hooks/useDebounce";
import { ModalClient } from "../../components/modalClient";
import { getCategoriesAll, searchCategories } from "../../store/modules/category/categorySlice";

const categorias = [
  "Cadeira",
  "Ciranda",
  "Espelho",
  "Lavatório",
  "Mocho",
  "Poltrona",
];
const modeloCadeira = ["Mistic", "Perola", "Gobli", "futurama"];
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
  "Uva",
];

const coresMadeira = ["Preto", "Branco"];
const coresLinha = ["Preto", "Branco"];
const cuba = ["Porcelana", "Fibra"];
const coresCuba = ["Preto", "Branco", "Dourada", "Prata"];

const costura = ["Lisa", "Padrão", "Matelassê", "Matrix"];

// const lavatorio = require("../../assets/images/lavatorio.jpg");
// const cadeira = require("../../assets/images/cadeira.jpg");
// const ciranda = require("../../assets/images/ciranda.jpg");
// const poltrona = require("../../assets/images/poltrona.jpg");

export const Venda = () => {
  const [openModal, setOpenModal] = useState(false);

  const [category, setCategory] = useState<string | null>("");
  const [categories, setCategories] = useState<string[]>([]);
  const [client, setClient] = useState("");
  const [clients, setClients] = useState<string[]>([]);
  const debouncedValue = useDebounce<string>(client);
  const [open, setOpen] = React.useState(false);

    const handleClose = () => {
      setOpen(false);
      setOpenModal(true);
    };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const dispatch = useAppDispatch();
  let listClients = useAppSelector(searchClients);
  const listCategories = useAppSelector(searchCategories);

  useEffect(() => {
    if (client) {
      dispatch(searchClientsName(client));
      if(!listClients.length){
        setOpen(true);
      }
      setClients(listClients.map((c) => c.name));
    }
    //  if (category) {
       dispatch(getCategoriesAll());
       setCategories(listCategories.map((c) => c.name));
    //  }

  }, [debouncedValue]);

  const handleClientChange = (event: any, newValue: string) => {
    setClient(newValue);
    console.log(client);
  };

  return (
    <>
      <HeaderHome />
      <Paper
        variant="elevation"
        elevation={3}
        square
        sx={{ margin: 2, padding: 1, backgroundColor: "#F5F5F5" }}
      >
        <Grid container spacing={1} sx={{ margin: 1 }} paddingRight={4}>
          <Grid item xs={8} md={3}>
            <Autocomplete
              disablePortal
              id="clients"
              options={clients}
              inputValue={client}
              onInputChange={handleClientChange}
              renderInput={(params) => (
                <TextField {...params} label="Clientes" />
              )}
            />
          </Grid>
          <Grid item xs={4} md={3}>
            <TextField id="qtd" label="Quantidade" variant="standard" />
          </Grid>

          <Grid item xs={6} md={3}>
            <Autocomplete
              disablePortal
              id="categoria"
              options={categories}
              value={category}
              onChange={(event: any, newValue: string | null) => {
                setCategory(newValue);
              }}
              renderInput={(params) => (
                <TextField {...params} label="Categoria" />
              )}
            />
          </Grid>

          <Grid item xs={6} md={3}>
            <Autocomplete
              disablePortal
              id="modelo"
              options={modeloLavatorio}
              renderInput={(params) => <TextField {...params} label="Modelo" />}
            />
          </Grid>
          {category === "Lavatório" && (
            <>
              <Grid item xs={4}>
                <Autocomplete
                  disablePortal
                  id="cuba"
                  options={cuba}
                  renderInput={(params) => (
                    <TextField {...params} label="Tipo de Cuba" />
                  )}
                />
              </Grid>

              <Grid item xs={4}>
                <Autocomplete
                  disablePortal
                  id="item"
                  options={coresCuba}
                  renderInput={(params) => (
                    <TextField {...params} label="Cores Cuba" />
                  )}
                />
              </Grid>
            </>
          )}

          {category !== "Espelho" && (
            <>
              <Grid item xs={4}>
                <Autocomplete
                  disablePortal
                  id="item"
                  options={coresTecido}
                  renderInput={(params) => (
                    <TextField {...params} label="Cores Tecido" />
                  )}
                />
              </Grid>

              <Grid item xs={4}>
                <Autocomplete
                  disablePortal
                  id="costura"
                  options={costura}
                  renderInput={(params) => (
                    <TextField {...params} label="Modelo da Costura" />
                  )}
                />
              </Grid>

              <Grid item xs={4}>
                <Autocomplete
                  disablePortal
                  id="linha"
                  options={coresLinha}
                  renderInput={(params) => (
                    <TextField {...params} label="Cor da Linha" />
                  )}
                />
              </Grid>
            </>
          )}
        </Grid>
      </Paper>
      <div>
        {open && (
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Cliente não encontrado"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Let Google help apps determine location. This means sending
                anonymous location data to Google, even when no apps are
                running.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cadastrar cliente</Button>
              {/* <Button onClick={handleClose} autoFocus>
                Fechar
              </Button> */}
            </DialogActions>
          </Dialog>
        )}        
      </div>
      <ModalClient open={openModal} handleClose={handleCloseModal}/>
      {/* <Grid container spacing={2} sx={{ height: "100%" }}>
          <CardVenda
            label="LAVATÓRIOS"
            imagem={lavatorio}
            onClickCard={addVenda}
          />
          <CardVenda label="CADEIRAS" imagem={cadeira} onClickCard={addVenda} />
          <CardVenda label="CIRANDAS" imagem={ciranda} onClickCard={addVenda} />
          <CardVenda label="SOFÁS" imagem={poltrona} onClickCard={addVenda} />
        </Grid>
                  <ModalVenda label={label} open={openModal} handleClose={handleClose} />*/}
    </>
  );
};
