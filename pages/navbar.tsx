"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Button from "@mui/material/Button";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="absolute">
          <Toolbar>
            <Typography component="div" sx={{ flexGrow: 1 }}>
              <Link href="/" legacyBehavior>
                <Button variant="contained">Inicio</Button>
              </Link>
            </Typography>
            <Typography
              component="h1"
              variant="h6"
              sx={{ flexGrow: 35 }}
              className="titulo-site"
              justifyContent={"center"}
              display={"flex"}
            >
              Ominetrix
            </Typography>
            <Typography component="div">
              <Link href="/cadastro" legacyBehavior>
                <Button variant="contained">Cadastro</Button>
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
