const taskList = document.getElementById('lista-tarefas');

// ALTERA A CLASSE DO ELEMENTO PARA 'selected'.
function selectedClass() {
  const currentSelected = document.querySelector('.selected');
  if (currentSelected !== null) {
    currentSelected.classList.remove('selected');
  }
  this.classList.add('selected');
}

// ADICIONA A CLASSE 'completed' CASO NAO TENHA, OU REMOVE CASO TENHA.
function completedClass() {
  if (this.className.includes('completed')) {
    this.classList.remove('completed');
  } else {
    this.classList.add('completed');
  }
}

// CARREGA A LISTA SALVA EM localStorage E ADD EVENTOS AOS ITENS
window.onload = (function loadList() {
  const savedItens = localStorage.getItem('listItens');
  taskList.innerHTML = savedItens;

  const listItens = document.querySelectorAll('.list-item');
  for (let index = 0; index < listItens.length; index += 1) {
    listItens[index].addEventListener('click', selectedClass);
    listItens[index].addEventListener('dblclick', completedClass);
  }
});

// ADICIONA O TEXTO DE INPUT NA LISTA DE TAREFAS.
function addTask() {
  const inputText = document.querySelector('#texto-tarefa');

  const newElem = document.createElement('li');
  newElem.innerText = inputText.value;
  newElem.className = 'list-item';
  taskList.appendChild(newElem);

  inputText.value = '';

  newElem.addEventListener('click', selectedClass);
  newElem.addEventListener('dblclick', completedClass);
}

const addButton = document.getElementById('criar-tarefa');
addButton.addEventListener('click', addTask);

// BOTÃO PARA LIMPAR TODA LISTA DE TAREFAS
function clearList() {
  taskList.innerHTML = '';
}

const clearButton = document.getElementById('apaga-tudo');
clearButton.addEventListener('click', clearList);

// BOTÃO PARA REMOVER AS TAREFAS FINALIZADAS
function clearCompleted() {
  const completedList = document.getElementsByClassName('completed');
  while (completedList.length > 0) {
    completedList[0].parentNode.removeChild(completedList[0]);
  }
}

const completedButton = document.getElementById('remover-finalizados');
completedButton.addEventListener('click', clearCompleted);

// REFERÊNCIA: https://stackoverflow.com/questions/13555785/remove-all-child-from-node-with-the-same-class-pure-js
// ACESSO EM 10/03/2021

// SALVA A LISTA DE TAREFAS EM localStorage
function saveList() {
  const taskItens = document.getElementById('lista-tarefas').innerHTML;
  localStorage.setItem('listItens', taskItens);
}

const saveButton = document.getElementById('salvar-tarefas');
saveButton.addEventListener('click', saveList);

// CRIA BOTAO DE REMOVER TAREFA SELECIONADA
const deleteSelectedButton = document.getElementById('remover-selecionado');
deleteSelectedButton.addEventListener('click', () => {
  const selectedItem = document.querySelector('.selected');
  selectedItem.remove();
});

// MOVE O ITEM SELECIONADO PARA CIMA
function moveUp() {
  const selectedItem = document.querySelector('.selected');
  if (selectedItem !== taskList.firstChild && selectedItem !== null) {
    taskList.insertBefore(selectedItem, selectedItem.previousSibling);
  }
}

const moveUpButton = document.getElementById('mover-cima');
moveUpButton.addEventListener('click', moveUp);

// MOVE O ITEM SELECIONADO PARA BAIXO
function moveDown() {
  const selectedItem = document.querySelector('.selected');
  if (selectedItem !== taskList.lastChild && selectedItem !== null) {
    taskList.insertBefore(selectedItem, selectedItem.nextSibling.nextSibling);
  }
}

const moveDownButton = document.getElementById('mover-baixo');
moveDownButton.addEventListener('click', moveDown);

// CRIA CHECKBOX PARA ALTERAR O TEMA PARA DARK MODE
const checkBox = document.getElementById('checkbox');

function darkMode() {
  const currentStyle = document.getElementById('page-style');
  if (checkBox.checked === true) {
    currentStyle.href = 'style-dark-mode.css';
  } else {
    currentStyle.href = 'style.css';
  }
}

checkBox.addEventListener('click', darkMode);
