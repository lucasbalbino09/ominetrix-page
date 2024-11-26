"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Button from "@mui/material/Button";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import HomeIcon from "@mui/icons-material/Home";
import AssignmentIcon from "@mui/icons-material/Assignment";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import "./Navbar.css";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="absolute">
          <Toolbar>
            <Typography component="div" sx={{ flexGrow: 1 }}>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                variant="contained"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <MenuOutlinedIcon></MenuOutlinedIcon>
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <Link href="/" legacyBehavior>
                  <MenuItem onClick={handleClose}>
                    <HomeIcon></HomeIcon> &nbsp; Inicio
                  </MenuItem>
                </Link>
                <Link href="/cadastro" legacyBehavior>
                  <MenuItem onClick={handleClose}>
                    <AssignmentIcon></AssignmentIcon> &nbsp; Cadastro
                  </MenuItem>
                </Link>
                <Link href="/cadastro" legacyBehavior>
                  <MenuItem onClick={handleClose}>
                    <BackupTableIcon></BackupTableIcon> &nbsp; Tabela
                  </MenuItem>
                </Link>
              </Menu>
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
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
