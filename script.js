const addForm = document.querySelector('.add-form');
const inputItem = document.getElementById('input-item');
const listaItens = document.querySelector('.lista-itens');

const notificationError = document.querySelector('.notification-error');
const btnCloseNotification = document.querySelector('.btn-close-notification');

let notificationTimeout;
let itens = [];

function criarElementoLi (item, index) {
    const novoLi = document.createElement('li');
    novoLi.classList.add('item-lista');

    novoLi.dataset.index = index;

    const textStyle = item.checked ? 'text-decoration: line-through; opacity: 0.6;' : '';

    novoLi.innerHTML = `
    <label class="checkbox-container">
        <input type="checkbox" ${item.checked ? 'checked' : ''}>
            <span class="item-texto" style="${textStyle}">${item.nome}</span>
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
            itens.push({ nome: nomeItem, checked: false });
            salvarItens();

            exibirItens();

            inputItem.value = '';
            inputItem.focus();
            exibirNotificacao("Item adicionado à lista!", 'success');
            
        } else {
            exibirNotificacao("O campo do item não pode estar vazio.");
        }
    }

function removerItem(event) {
    const botaoDelete = event.target.closest('.btn-delete');
    
    if (botaoDelete) {
        const itemLi = botaoDelete.closest('.item-lista');

        if (itemLi) {
            const index = parseInt(itemLi.dataset.index);
            itens.splice(index, 1);
            
            salvarItens();
            exibirItens();
            exibirNotificacao("O Item foi removido da lista!", 'error');;
        }
    }
}

function alternarItem(event) {
    const checkbox = event.target.closest('input[type="checkbox"]');

    if (checkbox) {
        const itemLi = checkbox.closest('.item-lista');
        const index = parseInt(itemLi.dataset.index);

        itens[index].checked = checkbox.checked;

        salvarItens();

        const itemTextoElement = itemLi.querySelector('.item-texto');

        if(checkbox.checked) {
            itemTextoElement.style.textDecoration = 'line-through';
            itemTextoElement.style.opacity = '0.6';
            exibirNotificacao("Item marcado como concluído.", 'success');
        } else {
            itemTextoElement.style.textDecoration = 'none';
            itemTextoElement.style.opacity = '1';
            exibirNotificacao("Item desmarcado.", 'success')
        }
    }
}

function exibirNotificacao(mensagem, tipo = 'error') {
    clearTimeout(notificationTimeout);

    const pTag = notificationError.querySelector('p');
    const notificationDiv = notificationError;

    if (pTag) {
        pTag.textContent = mensagem;
    }

    notificationDiv.classList.remove('notification-error', 'notification-success');

    if (tipo === 'success') {
        notificationDiv.classList.add('notification-success');
    } else {
        notificationDiv.classList.add('notification-error');
    }

    notificationDiv.classList.add('show');
    notificationTimeout = setTimeout(ocultarNotificacao, 3000);
}


function ocultarNotificacao() {
    notificationError.classList.remove('show');
}

addForm.addEventListener('submit', adicionarItem);
listaItens.addEventListener('click', removerItem);
listaItens.addEventListener('change', alternarItem);

btnCloseNotification.addEventListener('click', (event) => {
    event.preventDefault();
    ocultarNotificacao();
});

function salvarItens() {
    localStorage.setItem('quicklistItens', JSON.stringify(itens));
}

function carregarItens() {
    const itensSalvos = localStorage.getItem('quicklistItens');

    if(itensSalvos) {
        itens = JSON.parse(itensSalvos);
    } else {
        itens = [];
    }

    exibirItens();
}

function exibirItens() {
    listaItens.innerHTML = '';
    itens.forEach((item, index) => {
        const novoItem = criarElementoLi(item, index);
        listaItens.appendChild(novoItem);
    });
}

document.addEventListener('DOMContentLoaded', carregarItens);
console.log("Quicklist Script inicializado e funcional!");
