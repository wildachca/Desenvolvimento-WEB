function pegarId() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
}

async function carregarUsuario() {
    const id = pegarId();

    const res = await fetch(`/api/usuarios/${id}`);
    const usuario = await res.json();

    const div = document.getElementById("dados");

    if (usuario.erro) {
        div.innerHTML = "Usuário não encontrado";
        return;
    }

    div.innerHTML = `
        <p>Nome: ${usuario.nome}</p>
        <p>Idade: ${usuario.idade}</p>
        <p>Email: ${usuario.email || "Não informado"}</p>
    `;
}

carregarUsuario();