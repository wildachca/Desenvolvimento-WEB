const db = require("../database/db");

// CRUD
async function listarUsuarios() {
    const result = await db.query("SELECT * FROM usuarios ORDER BY id");
    return result.rows;
}

async function buscarUsuarioPorId(id) {
    const result = await db.query(
        "SELECT * FROM usuarios WHERE id = $1",
        [id]
    );
    return result.rows[0];
}

async function criarUsuario(nome, idade, email) {
    if (!nome || nome.trim() === "") {
        throw new Error("Nome obrigatório");
    }

    const result = await db.query(
        "INSERT INTO usuarios (nome, idade, email) VALUES ($1, $2, $3) RETURNING *",
        [nome, idade, email]
    );

    return result.rows[0];
}

async function atualizarUsuario(id, nome, idade, email) {
    const result = await db.query(
        "UPDATE usuarios SET nome = $1, idade = $2, email = $3 WHERE id = $4 RETURNING *",
        [nome, idade, email, id]
    );

    return result.rows[0];
}

async function deletarUsuario(id) {
    const result = await db.query(
        "DELETE FROM usuarios WHERE id = $1",
        [id]
    );

    return result.rowCount > 0;
}

// Exercícios
async function totalUsuarios() {
    const result = await db.query("SELECT COUNT(*) FROM usuarios");
    return Number(result.rows[0].count);
}

async function buscarPorIdade(min) {
    const result = await db.query(
        "SELECT * FROM usuarios WHERE idade >= $1",
        [min]
    );
    return result.rows;
}

async function usuariosOrdenados() {
    const result = await db.query(
        "SELECT * FROM usuarios ORDER BY nome"
    );
    return result.rows;
}

// Desafio
async function estatisticas() {
    const result = await db.query(`
        SELECT 
            COUNT(*) AS total,
            AVG(idade) AS media_idade,
            MAX(idade) AS maior_idade,
            MIN(idade) AS menor_idade
        FROM usuarios
    `);

    const dados = result.rows[0];

    return {
        total: Number(dados.total),
        media_idade: Number(dados.media_idade),
        maior_idade: Number(dados.maior_idade),
        menor_idade: Number(dados.menor_idade)
    };
}

module.exports = {
    listarUsuarios,
    buscarUsuarioPorId,
    criarUsuario,
    atualizarUsuario,
    deletarUsuario,
    totalUsuarios,
    buscarPorIdade,
    usuariosOrdenados,
    estatisticas
};