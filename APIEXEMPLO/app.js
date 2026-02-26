const express = require('express');
const app = express();

app.use(express.json());

const usuarios = [];

app.get('/usuarios', (req, res) => {
    res.json(usuarios);
});