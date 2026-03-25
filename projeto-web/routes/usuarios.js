const express = require("express");
const router = express.Router();

const controller = require("../controllers/usuariosController");

// IMPORTANTE: ordem correta
router.get("/total", controller.totalUsuarios);
router.get("/idade/:min", controller.listarPorIdade);
router.get("/ordenados", controller.listarOrdenados);
router.get("/estatisticas", controller.estatisticas);

router.get("/", controller.listarUsuarios);
router.get("/:id", controller.buscarUsuario);
router.post("/", controller.criarUsuario);
router.put("/:id", controller.atualizarUsuario);
router.delete("/:id", controller.deletarUsuario);

module.exports = router;