const express = require("express")
const router = express.Router()

let usuarios = []
let proximoId = 1

function buscarUsuarioPorId(id){
return usuarios.find(u => u.id === id)
}

function criarUsuario(req,res){

const {nome,idade,email} = req.body

if(!nome || nome.trim()===""){
return res.status(400).json({erro:"Nome é obrigatório"})
}

if(nome.length < 3){
return res.status(400).json({erro:"Nome deve ter no mínimo 3 caracteres"})
}

if(idade < 0 || idade > 120){
return res.status(400).json({erro:"Idade inválida"})
}

if(!email || !email.includes("@")){
return res.status(400).json({erro:"Email inválido"})
}

const novoUsuario={
id:proximoId++,
nome,
idade,
email
}

usuarios.push(novoUsuario)

res.status(201).json(novoUsuario)

}

router.get("/",(req,res)=>{
res.json(usuarios)
})

router.get("/:id",(req,res)=>{
const usuario=buscarUsuarioPorId(Number(req.params.id))
if(!usuario){
return res.status(404).json({erro:"Usuário não encontrado"})
}
res.json(usuario)
})

router.post("/",criarUsuario)

router.delete("/:id",(req,res)=>{
const id=Number(req.params.id)
const index=usuarios.findIndex(u=>u.id===id)

if(index===-1){
return res.status(404).json({erro:"Usuário não encontrado"})
}

usuarios.splice(index,1)
res.status(204).send()
})

router.put("/:id",(req,res)=>{

const usuario=buscarUsuarioPorId(Number(req.params.id))

if(!usuario){
return res.status(404).json({erro:"Usuário não encontrado"})
}

const {nome,idade,email}=req.body

if(!nome || nome.length<3){
return res.status(400).json({erro:"Nome inválido"})
}

if(idade<0 || idade>120){
return res.status(400).json({erro:"Idade inválida"})
}

if(!email || !email.includes("@")){
return res.status(400).json({erro:"Email inválido"})
}

usuario.nome=nome
usuario.idade=idade
usuario.email=email

res.json(usuario)

})

module.exports=router