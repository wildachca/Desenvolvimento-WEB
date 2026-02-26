const express = require('express');
const app = express();

app.use(express.json());

const PORT = 3000;

const usuarios = [];
constprodutos= [];

app.get('/', (req, res) => {
    res.send('API funcionando!');
  });

  app.get('/usuarios', (req, res) => {
    res.json(usuarios);
  });

  app.post('/usuarios', (req, res) => {

    const usuario = req.body;
  
    usuarios.push(usuario);
  
    res.status(201).json(usuario);

  });

  app.get('/sobre', (req, res) => {
    res.send('Sistema de cadastro - Desenvolvido por Wil');
  });

  app.get('/produtos', (req, res) => {
    res.json(produtos);
  });



app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

