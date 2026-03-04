const express = require("express");
const router = express.Router();

let usuarios = [];

router.get("/", (req, res) => {
  res.json(usuarios);
});

router.post("/", (req, res) => {

  const usuario = req.body;

  usuarios.push(usuario);

  res.status(201).json(usuario);

});

module.exports = router;


let proximoId = 1;

app.get('/api/usuarios', (req, res) => {
    res.json(usuarios);
});

app.post('/api/usuarios', (req, res) => {
    usuarios.push(req.body);
    res.json({ mensagem: "Usuário cadastrado" });
});

app.post('/api/usuarios', (req, res) => {

    const { nome, idade } = req.body;

    if (!nome || nome.trim() === "") {
        return res.status(400).json({
            erro: "Nome é obrigatório"
        });
    }

    const novoUsuario = {
        id: proximoId++,
        nome,
        idade
    };

    res.status(201).json({
        mensagem: "Usuário criado com sucesso",
        usuario: novoUsuario
    });
});

app.get('/api/usuarios', (req, res) => {
    res.json(usuarios);
});

app.post('/api/usuarios', (req, res) => {
    usuarios.push(req.body);
    res.json({ mensagem: "Usuário cadastrado" });
});