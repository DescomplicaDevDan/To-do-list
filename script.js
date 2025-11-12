const addForm = document.querySelector('.add-form');
const inputItem = document.getElementById('input-item');
const listaItens = document.querySelector('.lista-itens');

const notificationError = document.querySelector('.notification-error');
const btnCloseNotification = document.querySelector('.btn-close-notification');
let notificationTimeout;

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

            exibirNotificacao(`Item adicionado com sucesso!`);
            
        } else {
            exibirNotificacao("O campo do item não pode estar vazio.");
        }
    }

function removerItem(event) {
    const botaoDelete = event.target.closest('.btn-delete');
    
    if (botaoDelete) {
        const itemLi = botaoDelete.closest('.item-lista');

        if (itemLi) {
            const itemTexto = itemLi.querySelector('.item-texto').textContent;

            listaItens.removeChild(itemLi);

            exibirNotificacao(`Item removido da lista!`);
        }
    }
}

function exibirNotificacao(mensagem) {
    clearTimeout(notificationTimeout);

    const pTag = notificationError.querySelector('p');

    if(pTag) {
        pTag.textContent = mensagem;
    }
    notificationError.classList.add('show');
    notificationTimeout = setTimeout(ocultarNotificacao, 3000);
}

function ocultarNotificacao() {
    notificationError.classList.remove('show');
}

addForm.addEventListener('submit', adicionarItem);
listaItens.addEventListener('click', removerItem);

btnCloseNotification.addEventListener('click', (event) => {
    event.preventDefault();
    ocultarNotificacao();

});


console.log("Quicklist Script inicializado e funcional!");
