"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import MailIcon from "@mui/icons-material/Mail";

import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import "../home/home.css";

export default function Teste() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const menuLateral = [
    {
      text: "Cadastro",
      rota: "/cadastrar"      
    },
    {
      text: "Lista Completa",
      rota: "/tabela"      
    }
  ]

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {menuLateral.map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} href={item.rota}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>      
    </Box>
  );
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button onClick={toggleDrawer(true)} sx={{ mr: 2 }}>
            <MenuIcon color="secondary"></MenuIcon>
          </Button>
          <Drawer open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
          </Drawer>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            OmineTrix
          </Typography>
            <Button color="inherit" disabled>
              Login
            </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
