"use client";
import React, { useState } from "react";
import Navbar from "@/pages/navbar";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import "./cadastro.css";

const Cadastro = () => {
  const [tipo, setTipo] = useState("");
  const [horarioChegada, setHorarioChegada] = useState("");
  const [descricao, setDescricao] = useState("");
  const [status, setStatus] = useState("");
  const [signature, setSignature] = useState("");
  const [signaturePath, setSignaturePath] = useState("");
  const [imagemUrl, setImagemUrl] = useState("");

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const correspondenciaData = {
      tipo,
      horarioChegada,
      descricao,
      status,
      signature,
      signaturePath,
      imagemUrl,
    };

    console.log("Dados da Correspondência:", correspondenciaData);
    // Aqui você pode enviar os dados para uma API, por exemplo.
  };

  return (
    <>
      <Navbar></Navbar>
      <h1 className="titulo-formulario">Cadastrar Correspondência</h1>
      <h2 className="sub-titulo-formulario">preencha o formulario</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tipo:</label>
          <input
            type="text"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            placeholder="Informe o tipo"
          />
        </div>

        <div>
          <label>Horário de Chegada:</label>
          <input
            type="datetime-local"
            value={horarioChegada}
            onChange={(e) => setHorarioChegada(e.target.value)}
          />
        </div>

        <div>
          <label>Descrição:</label>
          <textarea
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            placeholder="Informe a descrição"
          ></textarea>
        </div>

        <div>
          <label>Status:</label>
          <input
            type="text"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            placeholder="Informe o status"
          />
        </div>

        <div>
          <label>Assinatura:</label>
          <input
            type="text"
            value={signature}
            onChange={(e) => setSignature(e.target.value)}
            placeholder="Informe a assinatura"
          />
        </div>

        <div>
          <label>Caminho da Assinatura:</label>
          <input
            type="text"
            value={signaturePath}
            onChange={(e) => setSignaturePath(e.target.value)}
            placeholder="Informe o caminho da assinatura"
          />
        </div>

        <div>
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
          >
            Upload files
            <VisuallyHiddenInput
              type="file"
              onChange={(event) => console.log(event.target.files)}
              multiple
            />
          </Button>
        </div>

        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default Cadastro;
