let toDoList = document.getElementById('lista-tarefas');

function getToDoList() {
  toDoList.innerHTML = localStorage.getItem('ol');
  console.log(toDoList.innerHTML);
}
getToDoList();

function createListItem() {
  if (inputText.value === '') {
    alert("Campo de texto vazio, favor preencher");
  } else {
    let newLi = document.createElement('li');
    newLi.innerText = inputText.value;
    document.getElementById('lista-tarefas').appendChild(newLi);
    inputText.value = '';
  }
}

let buttonCreateTask = document.getElementById('criar-tarefa');
let inputText = document.getElementById('texto-tarefa');

buttonCreateTask.addEventListener('click', createListItem);

let getLi = document.getElementsByTagName('li');

toDoList.addEventListener('click', function (event) {
  for (let index = 0; index < getLi.length; index += 1) {
    if (getLi[index].classList.contains('selected')) {
      getLi[index].classList.remove('selected');
      event.target.classList.add('selected');
    } else {
      event.target.classList.add('selected');
    }
  }
})

toDoList.addEventListener('dblclick', function (event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
})

let buttonDeleteList = document.getElementById('apaga-tudo');

function deleteList() {
  localStorage.clear();
  let getLi = document.querySelectorAll('li');
  for (let index = 0; index < getLi.length; index += 1) {
    getLi[index].remove();
  }
}

buttonDeleteList.addEventListener('click', deleteList);

let buttonRemoveCompleted = document.getElementById('remover-finalizados');

function removeCompleted() {
  let getLiCompleted = document.querySelectorAll('.completed');
  for (let index = 0; index < getLiCompleted.length; index += 1) {
    getLiCompleted[index].remove();
  }
}

buttonRemoveCompleted.addEventListener('click', removeCompleted);

//Realizado com ajuda do Henrique Zózimo!
let buttonSaveTask = document.getElementById('salvar-tarefas');
buttonSaveTask.addEventListener('click', function () {
  let toDoListInnerHTML = toDoList.innerHTML;
  localStorage.setItem('ol', toDoListInnerHTML);
})

let buttonMoveUp = document.getElementById('mover-cima');
let buttonMoveDown = document.getElementById('mover-baixo');
let selectedElement = document.querySelector('.selected');

function moveUp() {
  let allLi = document.querySelectorAll('li');
  for (let index = 0; index < allLi.length; index += 1) {
    if (allLi[index].classList.contains('selected')) {
      if (index !== 0) {
        let aux = allLi[index].previousElementSibling.outerHTML;
        allLi[index].previousElementSibling.outerHTML = allLi[index].outerHTML;
        allLi[index].outerHTML = aux;
      }
    }
  }
}

buttonMoveUp.addEventListener('click', moveUp);

function moveDown() {
  let allLi = document.querySelectorAll('li');
  for (let index = 0; index < allLi.length; index += 1) {
    if (allLi[index].classList.contains('selected')) {
      if(index !== (allLi.length - 1)){
        let aux = allLi[index].nextElementSibling.outerHTML;
        allLi[index].nextElementSibling.outerHTML = allLi[index].outerHTML;
        allLi[index].outerHTML = aux;
      }
    }
  }
}

buttonMoveDown.addEventListener('click', moveDown);

let buttonRemoveSelected = document.getElementById('remover-selecionado')

function removeSelected () {
  let selectedElement = document.querySelector('.selected');
  selectedElement.remove();
}

buttonRemoveSelected.addEventListener('click', removeSelected);