import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HeaderHome } from "../../components/headerHome";
import { ModalVenda } from "../../components/modalVenda/modalVenda";
import { WrapperContent } from "../../components/wrapperContent";
import { useAppSelector } from "../../store/hooks";

export const Home = () => {
  const navigate = useNavigate();

  const [userLogged, setUserLogged] = useState(null);

  const [openModal, setOpenModal] = useState(false);

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <>
      <HeaderHome />
      <WrapperContent>
        <ModalVenda label={""} open={openModal} handleClose={handleClose} />
      </WrapperContent>
    </>
  );
};
