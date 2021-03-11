let tasks = {}
window.onload = () =>{
    if(localStorage.getItem("toDo") != null){
    tasks = JSON.parse(localStorage.getItem("toDo"))
}
    atualizarCache();

}


const inputField = document.getElementById('texto-tarefa');
const list = document.getElementById('lista-tarefas');
const btn = document.getElementById('criar-tarefa');
const apagar = document.getElementById('apaga-tudo');
const finalizados = document.getElementById('remover-finalizados');
const save = document.getElementById('salvar-tarefas')

const cima = document.getElementById('mover-cima')
const baixo = document.getElementById('mover-baixo')
const rmv = document.getElementById('remover-selecionado')


let tamanho = 0;

function loadLen(){
    for(let key in tasks) tamanho = key;
}

function atualizarCache(){
    for(let key in tasks){
        const listItem = document.createElement('li');
        listItem.innerText = tasks[key][0]; 
        listItem.className = tasks[key][1];       
        list.appendChild(listItem);
        tamanho = key;
    }
}

btn.addEventListener ('click', function(){
    const listItem = document.createElement('li');
    loadLen();
    listItem.innerText = inputField.value;
    listItem.className = 'li '
    tasks[parseInt(tamanho) + 1] = [inputField.value, listItem.className]
    inputField.value = "";
    list.appendChild(listItem);
    
})

function itemSelection (evt){
    clearListClass ();
    evt.target.classList.add('selected');
}

function clearListClass (){
    //limpar os outros Itens
    const listItem = document.querySelectorAll('.li')
    for (let index = 0; index < listItem.length; index += 1){
        let classes = `${listItem[index].className}`;
        const classe = classes.replace('selected','');
        listItem[index].className = classe;
    }
}


function itemCheck(evt){
    const entrada = evt.target.className.split(" ");
    if(entrada.includes('completed')) {
        evt.target.classList.remove('completed');
    }
    else{
        evt.target.classList.add('completed');
    }
    const lista = document.querySelector('#lista-tarefas');
    let filho = lista.firstElementChild;
    let counter = 0;
    while(filho != null){
        tasks[counter] = [filho.innerText,filho.className]
        
        counter += 1;
        filho = filho.nextSibling;
    }
}

list.addEventListener ('dblclick', itemCheck, false)
list.addEventListener ('click', itemSelection, false)

apagar.addEventListener('click', eraseList)

function eraseList(){
    if(list.lastElementChild == null) {
        return;
    }
   while(list.lastElementChild != null) {
       list.lastChild.remove();
   }
   atualizarTasks ();
}
function atualizarTasks (){
    const lista = document.querySelector('#lista-tarefas');
    let filho = lista.firstElementChild;
    let counter = 0;
    tasks = {};
    if(filho == null) return;
    while(filho != null){
        tasks[counter] = [filho.innerText,filho.className]
        filho = filho.nextSibling;
        if (filho == null){
            break;
        }
        counter += 1;
    }
}
finalizados.addEventListener('click', function(){
    let finalizados = document.querySelectorAll('.completed');
    for (let index = 0; index < finalizados.length; index += 1){
        finalizados[index].remove();
    }
    atualizarTasks ();

 

 })

 finalizados.addEventListener('click', function(){
    let finalizados = document.querySelectorAll('.completed');
    for (let index = 0; index < finalizados.length; index += 1){
        finalizados[index].remove();
    }
 })

 save.addEventListener('click', function(){
    atualizarTasks ();
    localStorage.setItem('toDo', JSON.stringify(tasks))
 })

 cima.addEventListener('click', function(){
  
    const selected = document.querySelector('.selected') != null ? document.querySelector('.selected') : 'null'
    let cima = selected.previousElementSibling;
    
    if(selected == null) return;
    if(selected == null) return;
    if(cima == null) return;

    let bufferT = cima.innerText;
    let bufferC = cima.className;


    cima.innerText = selected.innerText;
    cima.className = selected.className;

    selected.innerText = bufferT;
    selected.className = bufferC;


    atualizarTasks ();
  
 })

 baixo.addEventListener('click', function(){
    const selected = document.querySelector('.selected') != null ? document.querySelector('.selected') : 'null'

    let baixo = selected.nextElementSibling;
    if(selected == null) return;
    if(baixo == null) return;
    if(selected == null) return;
    let bufferT = baixo.innerText;
    let bufferC = baixo.className;


    baixo.innerText = selected.innerText;
    baixo.className = selected.className;

    selected.innerText = bufferT;
    selected.className = bufferC;


    atualizarTasks ();
 })

 rmv.addEventListener('click', function(){
    const selected = document.querySelector('.selected');
    selected.remove();


    atualizarTasks ();
 })