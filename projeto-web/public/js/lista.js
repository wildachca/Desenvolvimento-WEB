const lista = document.getElementById('lista');
const emptyMsg = document.getElementById('emptyMsg');

// Função para carregar todos os usuários
async function carregarUsuarios() {
    try {
        const res = await fetch('/api/usuarios');
        const usuarios = await res.json();

        lista.innerHTML = '';

        if (usuarios.length === 0) {
            emptyMsg.style.display = 'block';
            return;
        }

        emptyMsg.style.display = 'none';

        usuarios.forEach(usuario => {
            const li = document.createElement('li');

            // Link para detalhes do usuário
            const detalhes = document.createElement('a');
            detalhes.href = `usuario.html?id=${usuario.id}`;
            detalhes.textContent = `${usuario.nome} - ${usuario.idade} anos`;

            // Botão de deletar
            const btnExcluir = document.createElement('button');
            btnExcluir.textContent = 'Excluir';
            btnExcluir.onclick = async () => {
                if (confirm(`Deseja realmente excluir ${usuario.nome}?`)) {
                    await fetch(`/api/usuarios/${usuario.id}`, { method: 'DELETE' });
                    carregarUsuarios(); // Atualiza lista após exclusão
                }
            };

            li.appendChild(detalhes);
            li.appendChild(btnExcluir);

            lista.appendChild(li);
        });
    } catch (err) {
        console.error('Erro ao carregar usuários:', err);
    }
}

// Carrega a lista assim que a página abrir
carregarUsuarios();