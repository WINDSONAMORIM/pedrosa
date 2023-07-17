import React, { useState, useEffect } from "react";
import { useAppDispatch } from "../../store/hooks";
import { addClient } from "../../store/modules/clients/clientsSlice";
import {
  Box,
  Button,
  Grid,
  Modal,
  Stack,
  Typography,
  TextField,
} from "@mui/material";

interface ModalClient {
  open: boolean;
  handleClose: () => void;
}

export function ModalClient({ open, handleClose }: ModalClient) {
  const styleModal = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");

  const dispatch = useAppDispatch();

  const handleChange = (value: string, key: string) => {
    console.log(value, key)
    switch (key) {
      case "name":
        setName(value);
        break;
      case "contact":
        setContact(value);
        break;
    }
  };

  const creatClient = () => {
    const newClient = {
      name,
      contact,
    };
    dispatch(addClient(newClient));
  };

  return (
    <Modal sx={styleModal} open={open}>
      <Box
        style={{
          backgroundColor: "white",
          width: "100%",
          height: "100%",
          padding: "20px",
        }}
      >
        <Typography variant="h6">ADICIONAR NOVO RECADO</Typography>
        <Typography>Preencha todos os campos</Typography>
        <TextField
          id="name"
          label="Nome"
          value={name}
          onChange={(e) => handleChange(e.target.value, e.target.id)}
          variant="standard"
        />
        <TextField
          id="contact"
          label="Contato"
          value={contact}
          onChange={(e) => handleChange(e.target.value, e.target.id)}
          variant="standard"
        />
        <Button variant="outlined" onClick={creatClient}>
          Inserir
        </Button>
        <Button variant="outlined" onClick={handleClose}>
          Fechar
        </Button>
      </Box>
    </Modal>
  );
}
