import React from "react";
import Entrega from "../app/public/entrega.jpeg"
import Envio from "../app/public/enviar-encomendas.jpg"
import black from "../app/public/noknoxblackfriday.jpg"
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const Dashboard = () => {
  // Dados simulados
  const categorias = [
    "Em Trânsito",
    "Entregues",
    "Pendentes",
    "Canceladas",
    "Aguardando Coleta",
  ];

  const noticias = [
    {
      id: 1,
      titulo: "Sistema de Controle de Encomendas Atualizado",
      descricao: "Agora você pode rastrear suas encomendas em tempo real e gerenciar melhor os prazos de entrega.",
      imagem: Entrega.src,
    },
    {
      id: 2,
      titulo: "Novo Método de Notificação de Entregas",
      descricao: "Notificações automáticas foram aprimoradas para garantir que você não perca nenhuma entrega importante.",
      imagem: Envio.src,
    },
    {
      id: 3,
      titulo: "Aumento na Eficiência da Logística",
      descricao: "A nova integração com serviços de logística permite entregas mais rápidas e com mais visibilidade para os clientes.",
      imagem: black.src,
    },
  ];

  return (
    <Box className="dashboard-container" sx={{ padding: 2, marginTop: 15 }}>
      <Typography variant="h4" className="dashboard-title" sx={{ marginBottom: 3 , textAlign: "center"}}>
        Ominetrix - Controle de Encomendas
      </Typography>

      <Grid container spacing={3}>
        {/* Barra Lateral */}
        <Grid item xs={12} md={3}>
          <Box className="sidebar" sx={{ padding: 2, backgroundColor: "#f4f4f4", borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>
              Categorias de Encomendas
            </Typography>
            <List>
              {categorias.map((categoria, index) => (
                <ListItem key={index}>
                  <ListItemText primary={categoria} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>

        {/* Conteúdo Principal */}
        <Grid item xs={12} md={9}>
          <Grid container spacing={3}>
            {/* Seção de Notícias ou Atualizações */}
            <Grid item xs={12} sm={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Últimas Atualizações</Typography>
                  {noticias.map((noticia) => (
                    <Box key={noticia.id} sx={{ marginBottom: 2 }}>
                      <Card sx={{ display: "flex", flexDirection: "row" }}>
                        <CardMedia
                          component="img"
                          sx={{ width: 100, height: 100 }}
                          image={noticia.imagem}
                          alt={noticia.titulo}
                        />
                        <CardContent>
                          <Typography variant="subtitle1">{noticia.titulo}</Typography>
                          <Typography variant="body2">{noticia.descricao}</Typography>
                        </CardContent>
                      </Card>
                    </Box>
                  ))}
                </CardContent>
              </Card>
            </Grid>

            {/* Seção de Categorias Visuais */}
            <Grid item xs={12} sm={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Visão Geral das Encomendas
                  </Typography>
                  <Grid container spacing={2}>
                    {categorias.map((categoria, index) => (
                      <Grid item xs={6} key={index}>
                        <Card sx={{ padding: 2, textAlign: "center" }}>
                          <Typography variant="h5">{categoria}</Typography>
                          <CardMedia
                            component="img"
                            height="150"
                            image="https://via.placeholder.com/300x150?text=Imagem+Categoria"
                            alt={categoria}
                          />
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
