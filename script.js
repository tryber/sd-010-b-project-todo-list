//Crio a função do botão "Enviar", apagando o conteúdo da caixa de input e criando um item na lista de tarefas com o valor que o usuario digitou.
let tarefa = document.getElementById("texto-tarefa");
let enviar = document.getElementById("criar-tarefa");

enviar.addEventListener("click", adicionaNaListaEApaga);
tarefa.addEventListener("keydown", adicionaNaListaEApagaEnter)

function adicionaNaListaEApaga() {
    let li = document.createElement("li");
    if (tarefa.value != "") {
        li.innerHTML = tarefa.value;
        document.getElementById("lista-tarefas").appendChild(li);
        tarefa.value = "";
    }
}

//Source: https://stackoverflow.com/questions/155188/trigger-a-button-click-with-javascript-on-the-enter-key-in-a-text-box
function adicionaNaListaEApagaEnter(entradaDaFuncao) {
    let teclaPressionada = entradaDaFuncao.keyCode || entradaDaFuncao.which;
    if (teclaPressionada == 13) {
        adicionaNaListaEApaga();
        }
    }
    


/*   
    Acessei o repositório de Ana Luiza Machado Salgado, onde compreendi a ideia de adicionar uma classe ao invés do backgroundColor direto.
    Source: https://github.com/tryber/sd-09-project-todo-list/tree/analuizams-todo-list-project.

    Acessei o blog de David Walsh para compreender melhor o uso da delegação de um evento ao elemento que o causou utilizando a propagação bubbling. 
    Source: https://davidwalsh.name/event-delegate.
*/

//Seleciono o elemento da minha lista (não dos itens) e determino um event listener para que ao ser clicada, ela mude a classe do elemento que foi o gatilho da ativação do evento.
let lista = document.getElementById("lista-tarefas");
lista.addEventListener("click", atribuiClasseSelected);

function atribuiClasseSelected(entradaDaFuncao) {
    apagaClasse();
    if (entradaDaFuncao.target.tagName == "LI") {
        entradaDaFuncao.target.classList.add("selected");
    }
}

//Apago a classe selected dos demais elementos para garantir que apenas o atual elemento clicado estará em highlight.
function apagaClasse() {
    let itens = lista.childNodes;
    for (i=0; i<itens.length; i++) {
        itens[i].classList.remove("selected");
    } 
}

//Faço com que, ao ser clicado duas vezes, um item verifique se já está riscado. Se estiver, tira o risco, do contrário, risca o item.
lista.addEventListener("dblclick", riscaItem);

function riscaItem(entradaDaFuncao) {
    if (entradaDaFuncao.target.className == "completed selected") {
        entradaDaFuncao.target.classList.remove("completed");
    } else if (entradaDaFuncao.target.tagName == "LI") {
        entradaDaFuncao.target.classList.add("completed");
    }
}

//Crio a função do botão que apaga todos os itens da lista
let apagarTudo = document.getElementById("apaga-tudo");
apagarTudo.addEventListener("click", apagaTudo);

function apagaTudo() {
    let itens = document.getElementsByTagName("li");
    let numeroDeItens = itens.length;
    for (i=0; i<numeroDeItens; i++) {
        itens[0].remove();
    }
}

let removerTarefasCompletadas = document.getElementById("remover-finalizados");
removerTarefasCompletadas.addEventListener("click", removeCompletadas);

function removeCompletadas() {
    let tarefasTerminadas = document.getElementsByClassName("completed");
    let numeroTarefas = tarefasTerminadas.length
    for (i=0; i<numeroTarefas; i++) {
        tarefasTerminadas[0].remove()
    }
}