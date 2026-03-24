const form = document.getElementById("form")

form.addEventListener("submit", async (e)=>{
    e.preventDefault()

    const nome = document.getElementById("nome").value

    const res = await fetch("/api/usuarios",{
        method:"POST",
        headers:{ "Content-Type":"application/json" },
        body: JSON.stringify({ nome })
    })

    const dados = await res.json()

    if(!res.ok){
        alert(dados.erro)
    }else{
        alert(dados.mensagem)
    }
})