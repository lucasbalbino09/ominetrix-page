"use client"; // Indica que o componente deve ser renderizado no cliente

import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import Navbar from "@/pages/navbar";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import "../pages/tabela.css";

// Definindo a interface CorrespondencePackage para refletir o seu modelo da API
interface CorrespondencePackage {
  id: string;
  morador: {
    nome: string;
    unidade: string;
    bloco: string;
  };
  funcionario: {
    nome: string;
    matricula: string;
  };
  correspondencia: {
    tipo: string;
    descricao: string;
    status: string;
    signature: string;
    signaturePath: string;
    horarioChegada: string; // Converta a data como string
  };
}

export default function Tabela() {
  const [packages, setPackages] = useState<CorrespondencePackage[]>([]); // Estado tipado

  // Função para buscar pacotes da API
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/packages")
      .then((response) => {
        setPackages(response.data); // Armazena os pacotes no estado
      })
      .catch((error) => {
        console.error("Erro ao buscar pacotes:", error);
      });
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <h1 className="titulo">Tabela de Correspondências</h1>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Morador</TableCell>
                <TableCell>Funcionario</TableCell>
                <TableCell>Tipo de Correspondência</TableCell>
                <TableCell>Descrição</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Data de Chegada</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {packages.map((pkg) => (
                <TableRow
                  key={pkg.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {pkg.id}
                  </TableCell>
                  <TableCell>
                    {pkg.morador.nome} - {pkg.morador.unidade} /{" "}
                    {pkg.morador.bloco}
                  </TableCell>
                  <TableCell>{pkg.funcionario.nome}</TableCell>
                  <TableCell>{pkg.correspondencia.tipo}</TableCell>
                  <TableCell>{pkg.correspondencia.descricao}</TableCell>
                  <TableCell>{pkg.correspondencia.status}</TableCell>
                  <TableCell>{pkg.correspondencia.horarioChegada}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
