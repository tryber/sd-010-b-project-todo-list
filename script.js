// Constantes Gerais
const btnTaskCreation = document.getElementById('criar-tarefa');
const btnClearAll = document.getElementById('apaga-tudo');
const btnClearCompleted = document.getElementById('remover-finalizados');
const btnSaveTaskList = document.getElementById('salvar-tarefas');
const btnMoveUp = document.getElementById('mover-cima');
const btnMoveDown = document.getElementById('mover-baixo');
const btnClearSelected = document.getElementById('remover-selecionado');
const taskList = document.getElementById('lista-tarefas');
let tasks = document.querySelectorAll('li');

// Selecionar um item da lista

function selectedTask() {
  const selectedElement = document.querySelector('.selected');
  if (selectedElement === null) {
    this.classList.add('selected');
  } else {
    selectedElement.classList.remove('selected');
    this.classList.add('selected');
  }
}

// Completar um item da lista

function completedTask() {
  if (this.classList.contains('completed')) {
    this.className = '';
  } else {
    this.className = 'completed';
  }
}
// Funcionamento da seleção e finalização das tarefas

function tasksProperties() {
  tasks = document.querySelectorAll('li');
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].addEventListener('click', selectedTask);
    tasks[i].addEventListener('dblclick', completedTask);
    tasks[i].addEventListener('mousedown', (e) => { e.preventDefault(); }, false);
  }
}

window.onload = tasksProperties;

// Criação de nova tarefa
// Referencia: https://stackoverflow.com/questions/880512/prevent-text-selection-after-double-click

function taskCreation() {
  const input = document.getElementById('texto-tarefa').value;
  if (input === '') {
    alert('Nada a ser criado');
  } else {
    const listItem = document.createElement('li');
    listItem.innerText = input;
    taskList.appendChild(listItem);
    document.getElementById('texto-tarefa').value = '';
    tasksProperties();
  }
}

btnTaskCreation.addEventListener('click', taskCreation);

// Apagar lista

function clearAll() {
  taskList.innerHTML = '';
}

btnClearAll.addEventListener('click', clearAll);

// Apagar somente itens finalizados

function clearCompleted() {
  const completedTasks = document.querySelectorAll('.completed');
  console.log(completedTasks);
  for (let i = 0; i < completedTasks.length; i += 1) {
    completedTasks[i].remove();
  }
}

btnClearCompleted.addEventListener('click', clearCompleted);

// Apagar somente item selecionado

function clearSelected() {
  const selectedElement = document.querySelector('.selected');
  if (selectedElement) {
    selectedElement.remove();
  }
}

btnClearSelected.addEventListener('click', clearSelected);

// Salvar lista

function saveTaskList() {
  const listHTML = taskList.innerHTML;
  localStorage.setItem('taskList', listHTML);
  console.log(localStorage);
}

btnSaveTaskList.addEventListener('click', saveTaskList);

if (localStorage.getItem('taskList')) {
  taskList.innerHTML = localStorage.getItem('taskList');
}

// Mover para cima

function moveUp() {
  const selectedElement = document.querySelector('.selected');
  if (taskList.childElementCount > 0
    && selectedElement !== null
    && selectedElement.previousElementSibling !== null) {
    taskList.insertBefore(selectedElement, selectedElement.previousElementSibling);
  }
}

btnMoveUp.addEventListener('click', moveUp);

// Mover para baixo

function moveDown() {
  const selectedElement = document.querySelector('.selected');
  if (taskList.childElementCount > 0
    && selectedElement !== null
    && selectedElement.nextElementSibling !== null) {
    console.log('a');
    taskList.insertBefore(selectedElement.nextElementSibling, selectedElement);
  }
}

btnMoveDown.addEventListener('click', moveDown);
