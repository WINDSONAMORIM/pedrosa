import React, { useEffect, useState } from "react";
import { HeaderHome } from "../../components/headerHome";
import { ModalVenda } from "../../components/modalVenda/modalVenda";
import {
  Autocomplete,
  Grid,
  TextField,
} from "@mui/material";
import { CardVenda } from "../../components/card";
import { useNavigate } from "react-router-dom";

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

const lavatorio = require("../../assets/images/lavatorio.jpg");
const cadeira = require("../../assets/images/cadeira.jpg");
const ciranda = require("../../assets/images/ciranda.jpg");
const poltrona = require("../../assets/images/poltrona.jpg");

export const Venda = () => {
  const [openModal, setOpenModal] = useState(false);
  const [label, setLabel] = useState("");
  const [categoria, setCategoria] = useState<string | null>("");

  useEffect(() => {
    console.log("teste", categoria);
  }, [categoria]);
  // const navigate = useNavigate();

  return (
    <>
      <HeaderHome />
      <Grid
        container
        spacing={1}
        sx={{margin:1}}
        paddingRight={4}         
      >
        <Grid item xs={8} md={3}>
          <TextField id="cliente" label="Cliente" variant="standard" />
        </Grid>
        <Grid item xs={4} md={3}>
          <TextField id="qtd" label="Quantidade" variant="standard" />
        </Grid>

        <Grid item xs={6} md={3}>
          <Autocomplete
            disablePortal
            id="categoria"
            options={categorias}
            value={categoria}
            onChange={(event: any, newValue: string | null) => {
              setCategoria(newValue);
            }}
            renderInput={(params) => (
              <TextField {...params} label="Categoria" />
            )}
          />
        </Grid>

        <Grid item xs={6}md={3}>
          <Autocomplete
            disablePortal
            id="modelo"
            options={modeloLavatorio}
            renderInput={(params) => <TextField {...params} label="Modelo" />}
          />
        </Grid>
        {categoria === "Lavatório" && (
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

        {categoria !== "Espelho" && (
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
      <ModalVenda label={label} open={openModal} handleClose={handleClose} /> */}
    </>
  );
};
