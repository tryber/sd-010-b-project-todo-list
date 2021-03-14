//Cria Novos Itens na Lista de Tarefas
//Adiciona Evento Click no Botão com a Captura da informação do input
let btnAddItem = document.querySelector('#criar-tarefa');
let inptAddItem = document.querySelector('#texto-tarefa');
btnAddItem.addEventListener('click', insertItemsList);
inptAddItem.addEventListener('keyup', insertItemsListKeyUp);

function insertItemsList (){
    let textInput = document.querySelector('#texto-tarefa');
    let localOl = document.querySelector('#lista-tarefas');
    
    if (textInput.value != '') {
        let listItems = document.createElement('li');
        listItems.className = 'task';
        listItems.innerHTML = textInput.value;
        localOl.appendChild(listItems);
        textInput.value = '';
    }
}

    function insertItemsListKeyUp (event){ // Resolução baseada no conteúdo do site https://pt.stackoverflow.com/questions/180333/evento-tecla-enter-no-input
        let textInput = document.querySelector('#texto-tarefa');
        let localOl = document.querySelector('#lista-tarefas');
        let key = event.which || event.keyCode;
        
        if (textInput.value != '' && key == 13) {
            let listItems = document.createElement('li');
            listItems.className = "task"
            listItems.innerHTML = textInput.value;
            localOl.appendChild(listItems);
            textInput.value = '';
        }   
}

//Adiciona o Background cinza no item clicado
//Adiciona a classe selected no item clicado e retira dos demais
function removeAddClassSelected (event){
    let itemClass = document.querySelector('.selected');

    if (!itemClass){
        event.target.classList.add('selected');
        event.target.style.cursor = 'pointer';
    } else {
        itemClass.classList.remove('selected');
        event.target.classList.add('selected');
        event.target.style.cursor = 'pointer';
    }
//Podemos fazer esse mesmo algoritmo de cima de uma forma mais didática aberto em passos: (ainda incompleto)
    // let taskList = document.querySelector('#lista-tarefas');
    // let tasks = document.querySelectorAll('li');
    // let qtidLI = taskList.childNodes.length; // definição da quantidade de itens na lista
    // for (let i = 0; i < qtidLI; i += 1){
    //    tasks[i].classList.remove('selected');
    // }
    //     if (event.target.tagName == 'li'){
    //         event.target.classList.add('selected')
    //     }   
 }
 function mouseOver (event){  // Adiciona a propriedade mouseOver (ponteiro indicador do mouse) ao passar o mouse sobre a tarefa
    let itemClass = document.querySelector('.selected');
    if (!itemClass){
        event.target.style.cursor = 'pointer';
    } else {
        event.target.style.cursor = 'pointer';
    }
 } 
function taskSelected () {
    let taskList = document.querySelector('#lista-tarefas');
    taskList.addEventListener('click', removeAddClassSelected);
    taskList.addEventListener('mouseover', mouseOver);
}

// Adiciona e Remove uma linha riscando o(s) item(s) já finalizado
function taskCompleted (){
    let taskList = document.querySelector('#lista-tarefas');
    taskList.addEventListener('dblclick', elementCompleted);

    function elementCompleted (event){
        event.target.classList.toggle('completed'); // Resuloção Baseada no conteúdo do site https://www.w3schools.com/howto/howto_js_toggle_class.asp
    }
}

// Remove todos os itens da lista
function clearAllTaskList (){
    let clearAllBtn = document.querySelector('#apaga-tudo');
    clearAllBtn.addEventListener('click', clearAll);

    function clearAll (){
        let listItems = document.querySelectorAll ('.task');
        for (let i = 0; i < listItems.length; i += 1){
            listItems[i].remove();
        }
    }
}

// Remove todos os itens marcados como completados (riscados) da lista
function clearAllCompleted () {
    let clearCompletedBtn = document.querySelector('#remover-finalizados'); 
    clearCompletedBtn.addEventListener('click', clearCompleted);

    function clearCompleted (){
        let listItems = document.querySelectorAll ('.completed');
        if (listItems.length != 0){
            for (let i = 0; i < listItems.length; i += 1){  
            listItems[i].remove();
            }
        } else {
            alert('Clique duas vezes sobre uma tarefa para marcá-la como finalizada antes de excluí-la'); 
        }
    }
}

// Remove tarefa marcada como selecionada
function removeSelected(){
    let clearSelectedBtn = document.querySelector('#remover-selecionado');
    clearSelectedBtn.addEventListener('click', () => {
        let itemsSelected = document.querySelector('.selected');
            itemsSelected.remove();
    });
}

// Cria a lista de tarefas salvas
function savedList () {
    let btnSavedList = document.querySelector('#salvar-tarefas');
    btnSavedList.addEventListener('click', () => {
        let listItems = document.querySelectorAll ('.task');
        for (let i = 0; i < listItems.length; i += 1){
            let saved = {
                text: listItems[i].innerText,
                class: listItems[i].className,
            };
            localStorage.setItem(i, JSON.stringify(saved));
        }
    });
}
// Recupera a lista de tarefas salva
function getSavedList (){
    let taskList = document.querySelector('#lista-tarefas');
    for (let i = 0; i < localStorage.length; i += 1){
        let recoverList = document.createElement('li');
        let recoverObj = JSON.parse(localStorage.getItem(i));
        recoverList.innerText = recoverObj.text;
        recoverList.className = recoverObj.class;
        recoverList.classList.remove('selected');
        taskList.appendChild(recoverList);
    }
}
// Apaga lista salva no localStorage
function clearStorage (){
    let clearStorageBtn = document.querySelector('#apagar-storage');
    clearStorageBtn.addEventListener('click', () =>{
        localStorage.clear();
        alert('Tarefas Apagadas com Sucesso!')
    });
}

// Cria funções de mover uma tarefa para cima ou para baixo
function moveUp (){
    let upBtn = document.querySelector('#mover-cima');
    upBtn.addEventListener('click', () => {
        let taskSelected = document.querySelector('.selected');
        if (taskSelected){
            let previousElem = taskSelected.previousElementSibling;
            if (previousElem){previousElem.before(taskSelected);}
        }   
    });
}
function moveDown (){
    let downBtn = document.querySelector('#mover-baixo');
    downBtn.addEventListener('click',() => {
        let taskSelected = document.querySelector('.selected');
        if (taskSelected){
            let nextElem = taskSelected.nextElementSibling;
            if (nextElem){nextElem.after(taskSelected);}
        }
    });
}


window.onload = function () {
    taskSelected();
    taskCompleted();
    clearAllTaskList();
    clearAllCompleted();
    savedList();
    getSavedList();
    clearStorage();
    moveUp();
    moveDown();
    removeSelected();
};