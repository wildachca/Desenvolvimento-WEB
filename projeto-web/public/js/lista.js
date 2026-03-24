async function carregar(){
    const res = await fetch("/api/usuarios")
    const usuarios = await res.json()

    const lista = document.getElementById("lista")
    lista.innerHTML = ""

    usuarios.forEach(u=>{
        const li = document.createElement("li")
        li.textContent = u.nome
        lista.appendChild(li)
    })
}

carregar()