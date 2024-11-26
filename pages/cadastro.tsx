"use client";
import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Navbar from "./navbar";
import "../app/Globals.css";
import "./cadastro.css";

export default function Cadastro() {
  return (
    <>
      <Navbar></Navbar>
      <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
        Cadastro de encomenda
      </Typography>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Preencha o formulario para cadastrar uma nova encomenda.
      </Typography>

      <TextField id="outlined-basic" className="input-text"  label="Nome" variant="outlined" />
      
    </>
  );
}
