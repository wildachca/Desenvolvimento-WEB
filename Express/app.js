app.post('/usuarios', (req, res) => {

    if (!req.body.nome || !req.body.idade) {
        return res.status(400).json({ erro: "Nome e idade são obrigatórios" });
    }

    const usuario = req.body;

    usuarios.push(usuario);

    res.status(201).json(usuario);

});