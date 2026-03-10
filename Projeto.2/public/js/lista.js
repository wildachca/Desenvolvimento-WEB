const lista = document.getElementById("lista")
const botao = 
document.getElementById("btnAtualizar")

botao.addEventListener("click", carregarUsuarios)

async function carregarUsuarios(){

lista.innerHTML = ""

try{

const resposta = await fetch("/api/usuarios")

const usuarios = await resposta.json()

usuarios.forEach(usuario => {

const item = document.createElement("li")

item.textContent = usuario.nome + " - " + usuario.idade + " anos - " + usuario.email

lista.appendChild(item)

})

}catch(erro){

lista.innerHTML = "<li>Erro ao carregar usuários</li>"

}
}
carregarUsuarios()