const addForm = document.querySelector('.add-form');
const inputItem = document.getElementById('input-item');
const listaItens = document.querySelector('.lista-itens');


function criarElementoLi (nomeItem) {
    const novoLi = document.createElement('li');
    novoLi.classList.add('item-lista');

    novoLi.innerHTML = `
    <label class="checkbox-container">
        <input type="checkbox">
            <span class="item-texto">${nomeItem}</span>
    </label>
                        
     <button class="btn-delete" title="Remover item">
        <img src="assets/icons/trash.svg" alt="ícone de lixeira">
    </button>
    `;

    return novoLi;
}

    function adicionarItem(event) {
        event.preventDefault();

        const nomeItem = inputItem.value.trim();

        if (nomeItem) {
            const novoItem = criarElementoLi(nomeItem);

            listaItens.appendChild(novoItem);

            inputItem.value = '';
            inputItem.focus();
        } else {
            console.log("O campo do item não pode estar vazio.");
        }
    }

function removerItem(event) {
    const botaoDelete = event.target.closest('.btn-delete');
    
    if (botaoDelete) {
        const itemLi = botaoDelete.closest('.item-lista');

        if (itemLi) {
            listaItens.removeChild(itemLi);

            console.log("Item removido com sucesso!");
        }
    }
}

addForm.addEventListener('submit', adicionarItem);
listaItens.addEventListener('click', removerItem);

console.log("Quicklist Script inicializado e funcional!");
