const usuariosService = require("../services/usuariosService");

async function listarUsuarios(req, res) {
    const usuarios = await usuariosService.listarUsuarios();
    res.json(usuarios);
}

async function buscarUsuario(req, res) {
    const id = Number(req.params.id);
    const usuario = await usuariosService.buscarUsuarioPorId(id);

    if (!usuario) {
        return res.status(404).json({ erro: "Usuário não encontrado" });
    }

    res.json(usuario);
}

async function criarUsuario(req, res) {
    try {
        const { nome, idade, email } = req.body;

        const usuario = await usuariosService.criarUsuario(nome, idade, email);

        res.status(201).json(usuario);
    } catch (err) {
        res.status(400).json({ erro: err.message });
    }
}

async function atualizarUsuario(req, res) {
    const id = Number(req.params.id);
    const { nome, idade, email } = req.body;

    const usuario = await usuariosService.atualizarUsuario(id, nome, idade, email);

    if (!usuario) {
        return res.status(404).json({ erro: "Usuário não encontrado" });
    }

    res.json(usuario);
}

async function deletarUsuario(req, res) {
    const id = Number(req.params.id);
    const removido = await usuariosService.deletarUsuario(id);

    if (!removido) {
        return res.status(404).json({ erro: "Usuário não encontrado" });
    }

    res.status(204).send();
}

// Exercícios
async function totalUsuarios(req, res) {
    const total = await usuariosService.totalUsuarios();
    res.json({ total });
}

async function listarPorIdade(req, res) {
    const min = parseInt(req.params.min, 10);
    const usuarios = await usuariosService.buscarPorIdade(min);
    res.json(usuarios);
}

async function listarOrdenados(req, res) {
    const usuarios = await usuariosService.usuariosOrdenados();
    res.json(usuarios);
}

async function estatisticas(req, res) {
    const dados = await usuariosService.estatisticas();
    res.json(dados);
}

module.exports = {
    listarUsuarios,
    buscarUsuario,
    criarUsuario,
    atualizarUsuario,
    deletarUsuario,
    totalUsuarios,
    listarPorIdade,
    listarOrdenados,
    estatisticas
};