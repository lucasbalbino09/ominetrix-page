import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../tabela/Tabela.css";
import Filme from "../../class/filme";

const rows = [
  Filme("Dois Homens e meio",new Date(),2024,2, "Ação","Filme muito divertido e interessate."),
  Filme("Dois Homens e meio",new Date(),2024,2, "Ação","Filme muito divertido e interessate."),
  Filme("Dois Homens e meio",new Date(),2024,2, "Ação","Filme muito divertido e interessate."),
  Filme("Dois Homens e meio",new Date(),2024,2, "Ação","Filme muito divertido e interessate."),
];

export default function Tabela() {
  return (
    <>
      <h1 className="titulo">Tabela</h1>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Titulo</TableCell>
                <TableCell align="right">Lançamento</TableCell>
                <TableCell align="right">Ano</TableCell>
                <TableCell align="right">Duração</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.titulo}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.titulo}
                  </TableCell>
                  <TableCell align="right">{row.dataLancamento.toDateString()}</TableCell>
                  <TableCell align="right">{row.anoLancamento}</TableCell>
                  <TableCell align="right">{row.duracao} Horas</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
