const createTasksBtn = document.getElementById('criar-tarefa');
const toDoList = document.getElementById('lista-tarefas');
const taskInput = document.getElementById('texto-tarefa');
const deleteAllTasksBtn = document.getElementById('apaga-tudo');
const deleteCompletedTasksBtn = document.getElementById('remover-finalizados');
const saveTasksBtn = document.getElementById('salvar-tarefas');
const moveDownBtn = document.getElementById('mover-baixo');
const moveUpBtn = document.getElementById('mover-cima');
const deleteSelectedBtn = document.getElementById('remover-selecionado');

function createTasks() {
  const toDoListItem = document.createElement('li');
  toDoListItem.innerText = taskInput.value;
  toDoList.appendChild(toDoListItem);
  taskInput.value = '';
}
createTasksBtn.addEventListener('click', createTasks);

function selectTask(event) {
  const selectedTask = document.querySelector('.selected');
  if (selectedTask) {
    selectedTask.classList.remove('selected');
  }
  event.target.classList.add('selected');
}
toDoList.addEventListener('click', selectTask);

function completeTask(event) {
  event.target.classList.toggle('completed');
}
toDoList.addEventListener('dblclick', completeTask);

function deleteAllTasks() {
  toDoList.innerHTML = '';
}
deleteAllTasksBtn.addEventListener('click', deleteAllTasks);

function deleteCompletedTasks() {
  while (document.querySelector('.completed')) {
    const completedTask = document.querySelector('.completed');
    completedTask.remove();
  }
}
deleteCompletedTasksBtn.addEventListener('click', deleteCompletedTasks);

/**
 * Crédito ao colega Marcos Mantovani que compartilhou seu código e me ajudou
 * na criação das funções saveTasks(), loadList(), moveUp() e moveDown()
 */
function saveTasks() {
  localStorage.mySavedTasks = toDoList.innerHTML;
}
saveTasksBtn.addEventListener('click', saveTasks);

function loadList() {
  if (localStorage.mySavedTasks) {
    toDoList.innerHTML = localStorage.mySavedTasks;
  }
}

function moveUp() {
  const toDoListItem = document.querySelectorAll('li');
  for (let index = 0; index < toDoListItem.length; index += 1) {
    const pos = toDoListItem[index];
    if (pos.classList.contains('selected') && pos.previousElementSibling !== null) {
      toDoList.insertBefore(pos, toDoListItem[index - 1]);
    }
  }
}
moveUpBtn.addEventListener('click', moveUp);

function moveDown() {
  const toDoListItem = document.querySelectorAll('li');
  for (let index = 0; index < toDoListItem.length; index += 1) {
    const pos = toDoListItem[index];
    if (pos.classList.contains('selected') && pos.nextElementSibling !== null) {
      toDoList.insertBefore(toDoListItem[index + 1], pos);
    }
  }
}
moveDownBtn.addEventListener('click', moveDown);

function deleteSelectedTask() {
  while (document.querySelector('.selected')) {
    document.querySelector('.selected').remove();
  }
}
deleteSelectedBtn.addEventListener('click', deleteSelectedTask);

window.onload = () => {
  loadList();
};
