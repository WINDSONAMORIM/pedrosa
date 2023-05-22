import React, { useEffect, useState } from "react";
import { HeaderHome } from "../../components/headerHome";
import { ModalVenda } from "../../components/modalVenda/modalVenda";
import { Grid } from "@mui/material";
import { CardVenda } from "../../components/card";
import { useNavigate } from "react-router-dom";

const fibra = require("../../assets/images/lavatorios/fibra.jpg");
const mystic = require("../../assets/images/lavatorios/mystic.jpg");
const ciranda = require("../../assets/images/ciranda.jpg");
const poltrona = require("../../assets/images/poltrona.jpg");

export const VendaLavatorio = () => {

  const navigate = useNavigate();

   const typeLavatorio = (page: string) => {
     switch (page) {
       case "Vendas": {
         navigate("/venda");
         console.log(page);
       }
     }
   };

  const [openModal, setOpenModal] = useState(false);
  const [label, setLabel] = useState("");


  const handleClose = () => {
    setOpenModal(false);
  };
  return (
    <>
      <HeaderHome />
      <Grid container spacing={2} sx={{ height: "100%" }}>
        <CardVenda label="Fibra" imagem={fibra} onClickCard={typeLavatorio} />
        <CardVenda label="Mystic" imagem={mystic} onClickCard={typeLavatorio} />
        
      </Grid>
      <ModalVenda label={label} open={openModal} handleClose={handleClose} />
    </>
  );
};
