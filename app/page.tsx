"use client"
import Navbar from "@/pages/navbar";
import Tabela from "@/pages/tabela";
import Typography from "@mui/material/Typography";
import "./globals.css";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Typography 
      variant="h1" 
      component="h1" 
      sx={{ flexGrow: 1 }} 
      justifyContent={"center"} 
      display={"flex"}>         
          Bem vindo ao Ominetrix. 
      </Typography>    
      <Tabela></Tabela>
    </>   
  );
}
