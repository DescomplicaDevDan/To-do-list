const addForm = document.querySelector('.add-form');
const inputItem = document.getElementById('input-item');
const listaItens = document.querySelector('.lista-itens');

function adicionarItem(event) {
    
    event.preventDefault();
    
    const nomeItem = inputItem.Value.trim();

    if (nomeItem) {
        console.log(`Novo item adicionado: ${nomeItem}`);
        inputItem.value = '';
    } else {
        console.log("O campo do item não pode estar vazio.");
    }

    addForm.addEventListener('submit', adicionarItem);

    console.log("Quicklist Script inicializado!");
}

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

    addForm.addEventListener('submit', adicionarItem);

    console.log("Quicklist Script inicializado!");