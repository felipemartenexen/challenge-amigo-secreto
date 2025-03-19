//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nome = inputAmigo.value.trim(); // Remove espaços extras

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome);
    inputAmigo.value = ""; // Limpa o campo de entrada
    atualizarLista(); // Atualiza a exibição da lista
}

// Função para atualizar a lista de amigos na interface
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    amigos.forEach((amigo, index) => {
        let item = document.createElement("li");
        item.textContent = amigo;

        // Botão para remover nome da lista
        let botaoRemover = document.createElement("button");
        botaoRemover.textContent = "❌";
        botaoRemover.onclick = function () {
            removerAmigo(index);
        };

        item.appendChild(botaoRemover);
        lista.appendChild(item);
    });
}

// Função para remover um amigo da lista
function removerAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista(); // Atualiza a interface
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 O amigo secreto é: <strong>${amigoSorteado}</strong>! 🎉</li>`;
}
