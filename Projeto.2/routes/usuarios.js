const express = require("express");
const router = express.Router();

const usuariosController = require("../controllers/usuariosController");

router.get("/", usuariosController.listarUsuarios);

router.get("/:id", usuariosController.buscarUsuario);

router.post("/", usuariosController.criarUsuario);

router.put("/:id", usuariosController.atualizarUsuario);

router.delete("/:id", usuariosController.deletarUsuario);

module.exports = router;

async function criarUsuario(nome, idade) {

    if (!nome || nome.trim() === "") {
        throw new Error("Nome é obrigatório");
    }

    const resultado = await pool.query(
        `
        INSERT INTO usuarios (nome, idade)
        VALUES ($1, $2)
        RETURNING *
        `,
        [nome, idade]
    );

    return resultado.rows[0];

}