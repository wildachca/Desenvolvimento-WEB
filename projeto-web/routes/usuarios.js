const express = require("express")
const router = express.Router()

const service = require("../services/usuariosService")

router.get("/", async (req,res)=>{
    const usuarios = await service.listarUsuarios()
    res.json(usuarios)
})

router.post("/", async (req,res)=>{
    try{
        const { nome, idade } = req.body
        await service.criarUsuario(nome, idade)

        res.json(resultado)
    }catch(erro){
        res.status(400).json({ erro: erro.message })
    }
})

router.get("/total", async (req,res)=>{
    const total = await service.totalUsuarios()
    res.json({ total })
})

router.get("/idade/:min", async (req,res)=>{
    const min = req.params.min

    const usuarios = await service.buscarPorIdade(min)

    res.json(usuarios)
})

module.exports = router