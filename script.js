const addForm = document.querySelector('.add-form')
const inputItem = document.getElementById('input-item')
const listaItens = document.querySelector('.lista-itens')

function adicionarItem(event) {
    
    event.preventDefault()
    
    const nomeItem = inputItem.ariaValueMax.trim()

    if (nomeItem) {
        console.log(`Novo item adicionado: ${nomeItem}`)
        inputItem.value = ''
    } else {
        console.log("O campo do item não pode estar vazio.")
    }

    addForm.addEventListener('submit', adicionarItem)

    console.log("Quicklist Script inicializado!")
}
