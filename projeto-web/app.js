const express = require("express");
const path = require("path");

const usuariosRoutes = require("./routes/usuarios");

const app = express();

app.use(express.json());

// Servir frontend
app.use(express.static(path.join(__dirname, "public")));

// Rotas API
app.use("/api/usuarios", usuariosRoutes);

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});