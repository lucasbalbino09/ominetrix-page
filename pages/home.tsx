"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export default function Teste() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/" legacyBehavior>
              <a className="menu">Início</a>
            </Link>
          </Typography>
          <Typography variant="h4" component="div" >
            <Link href="/cadastro" legacyBehavior>
              <a className="menu">Cadastro</a>
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
