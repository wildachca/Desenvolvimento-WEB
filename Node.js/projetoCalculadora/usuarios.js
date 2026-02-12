const lista = [];

function criarUsuario(nome, idade) {
lista.push({ nome, idade });
}

function listarUsuarios() {
return lista;
}

function buscarPorNome(nome) {
return lista.find(u => u.nome === nome);
}

module.exports = {
criarUsuario,
listarUsuarios,
buscarPorNome
};