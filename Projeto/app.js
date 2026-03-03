const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));

let usuarios = [];

app.post('/api/usuarios', (req, res) => {

    const { nome } = req.body;

    if (!nome || nome.trim() === "") {
        return res.status(400).json({
            erro: "Nome é obrigatório"
        });
    }

    const novoUsuario = { nome };
    usuarios.push(novoUsuario);

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

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});
