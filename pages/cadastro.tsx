"use client";
import React, { useState } from "react";
import Navbar from "@/pages/navbar";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import axios from "axios"; 
import "./cadastro.css";

const Cadastro = () => {
  const [tipo, setTipo] = useState("");
  const [horarioChegada, setHorarioChegada] = useState("");
  const [descricao, setDescricao] = useState("");
  const [morador, setMorador] = useState({ nome: "", unidade: "", bloco: "" });
  const [funcionario, setFuncionario] = useState({ nome: "", matricula: "" });
  const [file, setFile] = useState<File | null>(null); // Ajuste aqui
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [correspondencia, setCorrespondencia] = useState({
    tipo: "",
    horarioChegada: "",
    descricao: "",
    status: "Triagem"
  });

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const handleAddPackage = () => {
    const newPackage = {
      morador,
      funcionario,
      correspondencia: {
        ...correspondencia,
        tipo,
        horarioChegada,
        descricao,
        status: "Triagem",
      },
    };

    const formData = new FormData();
    formData.append("data", JSON.stringify(newPackage));
    if (file) {
      formData.append("file", file);
    }

    axios
      .post("http://localhost:8080/api/packages", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        setMorador({ nome: "", unidade: "", bloco: "" });
        setFuncionario({ nome: "", matricula: "" });
        setCorrespondencia({ tipo: "", horarioChegada: "", descricao: "", status: "Triagem" });
        setFile(null);
        setSuccessMessage("Cadastro realizado com sucesso!");
        setErrorMessage("");
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      })
      .catch((error) => {
        console.error("Erro ao adicionar correspondência:", error);
        setErrorMessage(
          "Ocorreu um erro ao cadastrar a correspondência. Tente novamente mais tarde."
        );
      });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    handleAddPackage();
  };

  return (
    <>
      {successMessage && <p className="success">{successMessage}</p>}
      {errorMessage && <p className="error">{errorMessage}</p>}

      <Navbar></Navbar>
      <h1 className="titulo-formulario">Cadastrar Correspondência</h1>
      <h2 className="sub-titulo-formulario">Preencha o formulário</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tipo:</label>
          <select
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
          >
            <option value="Caixa">Caixa</option>
            <option value="Envelope">Envelope</option>
            <option value="Pacote">Pacote</option>
          </select>
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

        <div className="adicionar-foto">
          <Button
            component="label"
            className="btn-adicionar-foto"
            variant="contained"
            startIcon={<CloudUploadIcon />}
          >
            Adicionar Foto
            <VisuallyHiddenInput
              type="file"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  setFile(e.target.files[0]); // Armazena o arquivo para upload
                }
              }}
            />
          </Button>
          <span className="input-adicionar-foto">{file ? file.name : ""}</span>
        </div>

        <button type="submit">Enviar</button>

        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </>
  );
};

export default Cadastro;
