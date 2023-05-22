import React, { useEffect, useState } from "react";
import { HeaderHome } from "../../components/headerHome";
import { ModalVenda } from "../../components/modalVenda/modalVenda";
import { Grid } from "@mui/material";
import { CardVenda } from "../../components/card";
import { useNavigate } from "react-router-dom";

const lavatorio = require("../../assets/images/lavatorio.jpg");
const cadeira = require("../../assets/images/cadeira.jpg");
const ciranda = require("../../assets/images/ciranda.jpg");
const poltrona = require("../../assets/images/poltrona.jpg");

export const Venda = () => {
  const [openModal, setOpenModal] = useState(false);
  const [label, setLabel] = useState("");

  const navigate = useNavigate();

  const addVenda = (label: string) => {
    setOpenModal(true);
    setLabel(label);
    console.log(label);
    switch (label) {
      case "LAVATÓRIOS": {
        navigate("/VendaLavatorio");
        console.log(label);
      }
    }
  };

  const handleClose = () => {
    setOpenModal(false);
  };
  return (
    <>
      <HeaderHome />
      <Grid container spacing={2} sx={{ height: "100%" }}>
        <CardVenda label="LAVATÓRIOS" imagem={lavatorio} onClickCard={addVenda}/>
        <CardVenda label="CADEIRAS" imagem={cadeira} onClickCard={addVenda}/>
        <CardVenda label="CIRANDAS" imagem={ciranda} onClickCard={addVenda}/>
        <CardVenda label="SOFÁS" imagem={poltrona} onClickCard={addVenda}/>
      </Grid>
      <ModalVenda label={label} open={openModal} handleClose={handleClose} />
    </>
  );
};
