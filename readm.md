````markdown
# 🛍️ Quicklist: Sua Lista de Compras Inteligente

| | |
| :---: | :--- |
| **Status** | 🟢 **Concluído** |
| **Tecnologias** | HTML5, CSS3 & JavaScript (Puro) |
| **Persistência** | Local Storage (Sem perda de dados) |
| **Tema** | Rosa Chiclete / Roxo (`#CA3884`) |

## ✨ Sobre o Projeto

A **Quicklist** é uma aplicação web de lista de tarefas (*To-Do List*) minimalista e focada em **persistência de dados**. O principal objetivo é garantir que seus itens de compra e seus respectivos status de conclusão **nunca sejam perdidos** ao fechar ou recarregar a página.

O projeto foi construído utilizando apenas o *Vanilla Stack* (HTML, CSS e JavaScript puro), demonstrando o poder de manipular o DOM e gerenciar o estado da aplicação de forma eficiente com o **Local Storage**.



---
## 💡 Funcionalidades Principais

Esta aplicação oferece uma experiência de usuário (UX) completa e com feedback constante:

* **💾 Persistência de Dados:** O estado da lista (itens e status `checked`) é salvo e carregado automaticamente usando a API **Local Storage** do navegador.
* **✅ Marcar como Concluído:** Clique no *checkbox* para riscar o item, indicando conclusão. O status é persistido instantaneamente.
* **🗑️ Remoção Eficiente:** Remova itens da lista e do armazenamento com o botão de lixeira.
* **🔔 Notificações:** Exibe *pop-ups* de feedback temporários e estilizados para confirmar ações (adição, remoção, conclusão e erros).
* **📱 Design Responsivo:** Layout totalmente adaptado e otimizado para telas móveis e *desktop*.

---
## 💻 Conceitos Aplicados

O projeto é baseado em tecnologias web puras:

| Área | Tecnologia | Conceitos Aplicados |
| :--- | :--- | :--- |
| **Estrutura** | HTML5 | Semântica, Linkagem de assets (ícones). |
| **Estilo** | CSS3 | Variáveis CSS (`:root`), Flexbox, Design Responsivo, Customização de *Checkbox*. |
| **Lógica** | JavaScript (ES6+) | Manipulação do DOM, `addEventListener`, CRUD e **Local Storage** (`JSON.stringify`/`JSON.parse`). |

---
## 🛠️ Como Executar

Não são necessárias dependências externas ou pacotes NPM.

1.  **Clone o Repositório** (ou baixe os arquivos):
    ```bash
    git clone [LINK_DO_SEU_REPOSITORIO]
    ```
2.  **Abra o `index.html`:** Simplesmente abra o arquivo `index.html` em qualquer navegador moderno (Chrome, Firefox, Edge).
    *Recomendação: Utilize a extensão "Live Server" do VS Code para executar a aplicação em um servidor local.*

---
## 📌 Estrutura do Projeto

````

quicklist/
├── assets/
│   ├── icons/           \# Ícones SVG (trash.svg, warning-circle-filled.svg)
│   └── logo.svg         \# Imagem de logo
├── index.html           \# Estrutura principal
├── style.css            \# Estilos, variáveis de tema e responsividade
└── script.js            \# Lógica principal e persistência (Local Storage)

```
---
## ✍️ Autor

Desenvolvido por:

**[Danilo Texeira / DescomplicaDevDan]**
```