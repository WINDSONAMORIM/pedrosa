import React, { useEffect, useState } from "react";
import { HeaderHome } from "../../components/headerHome";
import { ModalVenda } from "../../components/modalVenda/modalVenda";
import { Grid } from "@mui/material";
import { CardVenda } from "../../components/card";

const lavatorio = require("../../assets/images/lavatorio.png");
const cadeira = require("../../assets/images/cadeira.jpg");
const ciranda = require("../../assets/images/ciranda.jpg");
const poltrona = require("../../assets/images/poltrona.jpg");

export const Venda = () => {
  const [openModal, setOpenModal] = useState(false);
  const [label, setLabel] = useState("");

  const addVenda = (label: string) => {
    setOpenModal(true);
    setLabel(label);
  };

  const handleClose = () => {
    setOpenModal(false);
  };
  return (
    <>
      <HeaderHome />
      <Grid container spacing={2} sx={{ height: "100%" }}>
        <Grid item xs={6} md={3}>
          <CardVenda
            label="LAVATÓRIOS"
            imagem={lavatorio}
            onClickCard={addVenda}
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <CardVenda label="CADEIRAS" imagem={cadeira} onClickCard={addVenda} />
        </Grid>
        <Grid item xs={6} md={3}>
          <CardVenda label="CIRANDAS" imagem={ciranda} onClickCard={addVenda} />
        </Grid>
        <Grid item xs={6} md={3}>
          <CardVenda label="SOFÁS" imagem={poltrona} onClickCard={addVenda} />
        </Grid>
      </Grid>
      <ModalVenda label={label} open={openModal} handleClose={handleClose} />
    </>
  );
};
