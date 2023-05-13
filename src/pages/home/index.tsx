import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HeaderHome } from "../../components/headerHome";
import { ModalVenda } from "../../components/modalVenda/modalVenda";
import { WrapperContent } from "../../components/wrapperContent";
import { useAppSelector } from "../../store/hooks";

export const Home = () => {
  const navigate = useNavigate();

  //const userLogged = useAppSelector((state) => state.userLogged);
  // const [userLogged, setUserLogged] = useState(
  //   useAppSelector((state) => state.userLogged)
  // );
  const [userLogged, setUserLogged] = useState(null);

  // const usuarioLogado = JSON.parse(
  //   localStorage.getItem("usuarioLogado") ?? "[]"
  // );

  useEffect(() => {
    //const user = useAppSelector((state) => state.userLogged);
    // console.log('home: ',userLogged.name);
    //  usuarioLogado = localStorage.getItem("usuarioLogado");
    // if (!user) {
    //   navigate("/");
    // } else {
    //   setUserLogged(user);
    // }
  }, []);

  const [openModal, setOpenModal] = useState(false);

  const addVenda = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const openPageVenda = () => {
    navigate("/venda");
  };

  return (
    <>
      <HeaderHome />
      <WrapperContent>
        <Button onClick={() => addVenda()}>Open modal</Button>
        <Button onClick={() => openPageVenda()}>Open Venda</Button>
        <ModalVenda label={""} open={openModal} handleClose={handleClose} />
      </WrapperContent>
    </>
  );
};
