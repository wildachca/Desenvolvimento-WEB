const express = require("express")
const app = express()
const usuariosRoutes = require("./routes/usuarios")
//const filmesRoutes = require("./routes/filmes")

app.use(express.json())
app.use(express.static("public"))

app.use("/api/usuarios", usuariosRoutes)
//app.use("/api/filmes", filmesRoutes)

app.listen(3000, () => {
console.log("Servidor rodando em http://localhost:3000")
})