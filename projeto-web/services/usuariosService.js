const db = require("./db")

async function listarUsuarios(){
    const result = await db.query("SELECT * FROM usuarios")
    return result.rows
}

async function criarUsuario(nome, idade){
    if(!nome || nome.trim() === ""){
        throw new Error("Nome obrigatório")
    }

    await db.query(
        "INSERT INTO usuarios (nome, idade) VALUES ($1, $2)",
        [nome, idade]
    )

    return { mensagem: "Usuário cadastrado" }
}

async function buscarPorIdade(min){
    const result = await db.query(
        "SELECT * FROM usuarios WHERE idade >= $1",
        [min]
    )

    return result.rows
}

async function totalUsuarios(){
    const result = await db.query("SELECT COUNT(*) FROM usuarios")
    return Number(result.rows[0].count)
}

module.exports = {
    listarUsuarios,
    criarUsuario,
    buscarPorIdade,
    totalUsuarios
}