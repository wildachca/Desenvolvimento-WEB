const form=document.getElementById("formCadastro")
const mensagem=document.getElementById("mensagem")

form.addEventListener("submit",async e=>{

e.preventDefault()

const nome=document.getElementById("nome").value
const idade=document.getElementById("idade").value
const email=document.getElementById("email").value

const usuario={nome,idade:Number(idade),email}

try{

const resposta=await fetch("/api/usuarios",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify(usuario)
})

const dados=await resposta.json()

if(!resposta.ok){
throw new Error(dados.erro)
}

mensagem.textContent=`Usuário ${dados.nome} cadastrado com sucesso`
mensagem.style.color="green"
form.reset()

}catch(erro){

mensagem.textContent=erro.message
mensagem.style.color="red"

}

})