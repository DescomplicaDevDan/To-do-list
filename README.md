-----

# 🛍️ Quicklist: Sua Lista de Compras Inteligente

| | |
| :---: | :--- |
| **Status** | 🟢 **Concluído** |
| **Tecnologias** | HTML5, CSS3 & JavaScript (Puro) |
| **Persistência** | Local Storage (Sem perda de dados) |
| **Tema** | Tema Verde Oliva (Sucesso) e Alerta Vermelho (Erro) |

# 🛍️ Quicklist: Sua Lista de Compras Inteligente

---

## ✨ Sobre o Projeto

A **Quicklist** é uma aplicação web de lista de tarefas (To-Do List) minimalista e focada em **persistência de dados**. O principal objetivo é garantir que seus itens de compra e seus respectivos status de conclusão **nunca sejam perdidos** ao fechar ou recarregar a página.

O projeto foi construído utilizando apenas o **Vanilla Stack** (HTML, CSS e JavaScript puro), demonstrando o poder de manipular o DOM e gerenciar o estado da aplicação de forma eficiente com o **Local Storage**.

---

## 💡 Funcionalidades Principais

Esta aplicação oferece uma experiência de usuário (UX) completa e com feedback constante:

💾 **Persistência de Dados:** O estado da lista (itens e status `checked`) é salvo e carregado automaticamente usando a API **Local Storage** do navegador.
✅ **Marcar como Concluído:** Clique no checkbox para riscar o item, indicando conclusão. O status é persistido instantaneamente.
🗑️ **Remoção Eficiente:** Remova itens da lista e do armazenamento com o botão de lixeira. A lógica utiliza `event.target.closest()` para garantir remoção robusta.
🔔 **Notificações Inteligentes:** Exibe pop-ups de feedback temporários e estilizados para confirmar ações (adição, remoção, conclusão e erros), com cores distintas: **Verde Oliva para sucesso** e **Vermelho Forte para alertas/erros**.
📱 **Design Responsivo:** Layout totalmente adaptado e otimizado para telas móveis e desktop.

---

## 💻 Tecnologias Utilizadas

O projeto é baseado em tecnologias web puras:

| Área | Tecnologia | Tópicos Abordados |
| :--- | :--- | :--- |
| Estrutura | **HTML5** | Semântica, Linkagem de assets (ícones). |
| Estilo | **CSS3** | Variáveis CSS (`:root`), Flexbox, Design Responsivo, **Classes Modificadoras** para notificações. |
| Lógica | **JavaScript (ES6+)** | Manipulação do DOM, `addEventListener`, CRUD e **Local Storage** (`JSON.stringify/JSON.parse`), Lógica de remoção robusta (`closest()`). |

---

## 🛠️ Como Executar

Não são necessárias dependências externas ou pacotes NPM.

1.  **Clone o Repositório** (ou baixe os arquivos):
    `git clone [LINK_DO_SEU_REPOSITORIO]`

2.  **Abra o `index.html`:** Simplesmente abra o arquivo `index.html` em qualquer navegador moderno (Chrome, Firefox, Edge). **Recomendação:** Utilize a extensão "Live Server" do VS Code para executar a aplicação em um servidor local.

---

## 📌 Estrutura do Projeto
O seu arquivo `README.md` está bem estruturado e detalhado. Para refletir as **últimas alterações** no seu código e garantir que as informações estejam 100% alinhadas com o estado atual do seu projeto Quicklist, os ajustes mais importantes são:

1.  **Tecnologia:** Adicionar a manipulação de classes CSS (classes modificadoras) que você implementou para as notificações.
2.  **Tema:** Atualizar a seção de cores para refletir as alterações no erro (vermelho) e sucesso (verde oliva).

-----

## 🛠️ README.md Atualizado

Aqui está a versão revisada do seu `README.md` com as alterações necessárias:

```markdown
# 🛍️ Quicklist: Sua Lista de Compras Inteligente

Status: 🟢 Concluído
Tecnologias: HTML5, CSS3 & JavaScript (Puro)
Persistência: Local Storage (Sem perda de dados)
Tema: Tema Verde Oliva (Sucesso) e Alerta Vermelho (Erro)

---

## ✨ Sobre o Projeto

A **Quicklist** é uma aplicação web de lista de tarefas (To-Do List) minimalista e focada em **persistência de dados**. O principal objetivo é garantir que seus itens de compra e seus respectivos status de conclusão **nunca sejam perdidos** ao fechar ou recarregar a página.

O projeto foi construído utilizando apenas o **Vanilla Stack** (HTML, CSS e JavaScript puro), demonstrando o poder de manipular o DOM e gerenciar o estado da aplicação de forma eficiente com o **Local Storage**.

---

## 💡 Funcionalidades Principais

Esta aplicação oferece uma experiência de usuário (UX) completa e com feedback constante:

💾 **Persistência de Dados:** O estado da lista (itens e status `checked`) é salvo e carregado automaticamente usando a API **Local Storage** do navegador.
✅ **Marcar como Concluído:** Clique no checkbox para riscar o item, indicando conclusão. O status é persistido instantaneamente.
🗑️ **Remoção Eficiente:** Remova itens da lista e do armazenamento com o botão de lixeira. A lógica utiliza `event.target.closest()` para garantir remoção robusta.
🔔 **Notificações Inteligentes:** Exibe pop-ups de feedback temporários e estilizados para confirmar ações (adição, remoção, conclusão e erros), com cores distintas: **Verde Oliva para sucesso** e **Vermelho Forte para alertas/erros**.
📱 **Design Responsivo:** Layout totalmente adaptado e otimizado para telas móveis e desktop.

---

## 💻 Tecnologias Utilizadas

O projeto é baseado em tecnologias web puras:

| Área | Tecnologia | Tópicos Abordados |
| :--- | :--- | :--- |
| Estrutura | **HTML5** | Semântica, Linkagem de assets (ícones). |
| Estilo | **CSS3** | Variáveis CSS (`:root`), Flexbox, Design Responsivo, **Classes Modificadoras** para notificações. |
| Lógica | **JavaScript (ES6+)** | Manipulação do DOM, `addEventListener`, CRUD e **Local Storage** (`JSON.stringify/JSON.parse`), Lógica de remoção robusta (`closest()`). |

---

## 🛠️ Como Executar

Não são necessárias dependências externas ou pacotes NPM.

1.  **Clone o Repositório** (ou baixe os arquivos):
    `git clone [LINK_DO_SEU_REPOSITORIO]`

2.  **Abra o `index.html`:** Simplesmente abra o arquivo `index.html` em qualquer navegador moderno (Chrome, Firefox, Edge). **Recomendação:** Utilize a extensão "Live Server" do VS Code para executar a aplicação em um servidor local.

---

## 📌 Estrutura do Projeto

```

quicklist/
├── assets/
│   ├── icons/           \# Ícones SVG (trash.svg, warning-circle-filled.svg, check.svg)
│   └── logo.svg         \# Imagem de logo
├── index.html           \# Estrutura principal
├── style.css            \# Estilos, variáveis de tema e responsividade
└── script.js            \# Lógica principal, manipulação do DOM e persistência (Local Storage)

```

---

## ✍️ Autor

Desenvolvido por:
[Danilo Texeira / DescomplicaDevDan]
```
