const form = document.getElementById("formCadastro");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value;

    const resposta = await fetch('/api/usuarios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome })
    });
    
    const dados = await resposta.json();
    
    if (!resposta.ok) {
        alert(dados.erro);
    } else {
        alert(dados.mensagem);
    }

    await fetch('/api/usuarios', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome })
    });

    alert("Usuário cadastrado!");
});