const createTaskButton = document.querySelector('#criar-tarefa');
const taskInput = document.querySelector('#texto-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const deleteTasksButton = document.querySelector('#apaga-tudo');
const removeDoneTasksButton = document.querySelector('#remover-finalizados');
const storage = localStorage;
const saveTaskButton = document.querySelector('#salvar-tarefas');
const taskUpButton = document.querySelector('#mover-cima');
const taskDownButton = document.querySelector('#mover-baixo');
const removeSelectedTaskButton = document.querySelector('#remover-selecionado');

// Seleciona uma tarefa
function selectTask(event) {
  const taskItems = document.querySelectorAll('.tarefa');
  for (let i = 0; i < taskItems.length; i += 1) {
    taskItems[i].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

// Marca como feita a tarefa
function doneTask(event) {
  event.target.classList.toggle('completed');
}

// Cria o elemento a ser adicionado a lista
function createTaskElement(text, classes) {
  const taskElement = document.createElement('li');
  taskElement.innerHTML = text;
  if (!taskElement.innerHTML) return alert('Tarefa em branco');
  taskElement.className = classes;
  taskElement.addEventListener('click', selectTask);
  taskElement.addEventListener('dblclick', doneTask);
  return taskElement;
}

// Adiciona uma tarefa a lista de tarefas
function addTask(text, classes) {
  const listItem = createTaskElement(text, classes);
  if (listItem) taskList.appendChild(listItem);
  taskInput.value = '';
  taskInput.focus();
}

// Deleta tarefa selecionada
function removeSelectedTask() {
  const selected = document.querySelector('.selected');
  if (selected) taskList.removeChild(selected);
}

// Deleta toda a lista de tarefas
function clearTaskList() {
  taskList.innerHTML = '';
}

// Deleta as tarefas já realizadas da lista
function removeDoneTasks() {
  const done = document.querySelectorAll('.completed');
  for (let i = 0; i < done.length; i += 1) taskList.removeChild(done[i]);
}

// Sobe na lista a tarefa seleciona
function moveTaskUp() {
  const selected = document.querySelector('.selected');
  if (selected && selected.previousSibling) {
    const upper = selected.previousSibling;
    taskList.removeChild(upper);
    selected.insertAdjacentElement('afterend', upper);
  }
}

// Desce na lista a tarefa seleciona
function moveTaskDown() {
  const selected = document.querySelector('.selected');
  if (selected && selected.nextElementSibling) {
    const lower = selected.nextElementSibling;
    taskList.removeChild(lower);
    selected.insertAdjacentElement('beforebegin', lower);
  }
}

// Salva tarefas da lista no storage
function saveTasks() {
  const arrTasks = [];
  const tasks = document.querySelectorAll('.tarefa');
  tasks.forEach((task) => {
    const properties = {
      text: task.innerText,
      classes: task.className,
    };
    arrTasks.push(properties);
  });
  storage.setItem('tasks', JSON.stringify(arrTasks));
}

// Carrega tarefas salvas no storage e adiciona a lista
function loadTasks() {
  const tasks = JSON.parse(storage.getItem('tasks'));
  if (!tasks) return;
  for (let i = 0; i < tasks.length; i += 1) {
    addTask(tasks[i].text, tasks[i].classes);
  }
}

// O que será executado quando a página for carregada
window.onload = () => {
  loadTasks();
  saveTaskButton.addEventListener('click', saveTasks);
  createTaskButton.addEventListener('click', () => {
    addTask(taskInput.value, 'tarefa');
  });
  window.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') addTask(taskInput.value, 'tarefa');
    if (event.key === 'ArrowUp') moveTaskUp();
    if (event.key === 'ArrowDown') moveTaskDown();
  });
  taskUpButton.addEventListener('click', moveTaskUp);
  taskDownButton.addEventListener('click', moveTaskDown);
  removeSelectedTaskButton.addEventListener('click', removeSelectedTask);
  deleteTasksButton.addEventListener('click', clearTaskList);
  removeDoneTasksButton.addEventListener('click', removeDoneTasks);
};
