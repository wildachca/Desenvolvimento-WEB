const express = require("express")
const router = express.Router()

let filmes = []
let proximoId = 1

function buscarFilmePorId(id){
return filmes.find(f => f.id === id)
}

router.get("/",(req,res)=>{
res.json(filmes)
})

router.get("/:id",(req,res)=>{
const filme = buscarFilmePorId(Number(req.params.id))

if(!filme){
return res.status(404).json({erro:"Filme não encontrado"})
}

res.json(filme)
})

router.post("/",(req,res)=>{

const {titulo,ano,genero} = req.body

if(!titulo || titulo.length < 2){
return res.status(400).json({erro:"Título inválido"})
}

if(ano < 1888){
return res.status(400).json({erro:"Ano inválido"})
}

if(!genero){
return res.status(400).json({erro:"Gênero obrigatório"})
}

const novoFilme = {
id: proximoId++,
titulo,
ano,
genero
}

filmes.push(novoFilme)

res.status(201).json(novoFilme)

})

router.put("/:id",(req,res)=>{

const filme = buscarFilmePorId(Number(req.params.id))

if(!filme){
return res.status(404).json({erro:"Filme não encontrado"})
}

const {titulo,ano,genero} = req.body

if(!titulo || titulo.length < 2){
return res.status(400).json({erro:"Título inválido"})
}

if(ano < 1888){
return res.status(400).json({erro:"Ano inválido"})
}

if(!genero){
return res.status(400).json({erro:"Gênero obrigatório"})
}

filme.titulo = titulo
filme.ano = ano
filme.genero = genero

res.json(filme)

})

router.delete("/:id",(req,res)=>{

const id = Number(req.params.id)

const index = filmes.findIndex(f => f.id === id)

if(index === -1){
return res.status(404).json({erro:"Filme não encontrado"})
}

filmes.splice(index,1)

res.status(204).send()

})

module.exports = router