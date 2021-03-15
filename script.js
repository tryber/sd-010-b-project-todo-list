function localStorageTaskList(tasksObject) {
  const taskList = document.getElementById('lista-tarefas');
  let cont = -1;
  for (let key in tasksObject) {
    taskItem = document.createElement('li');
    taskItem.innerText = tasksObject[key][0];
    taskItem.className = tasksObject[key][1];
    taskItem.style.backgroundColor = tasksObject[key][2];
    taskItem.setAttribute('id', cont += 1);
    taskList.appendChild(taskItem);
    addEventClickAndDobleClickInTask(taskItem);
  }
}
if (localStorage.getItem('tasks')) {
  localStorageTaskList(JSON.parse(localStorage.getItem('tasks')));
}

function setAllTasksWithBackgroundColorWhite() {
  const tasks = document.getElementsByTagName('li');
  for (let index = 0; index < tasks.length; index += 1) {
    tasks[index].style.backgroundColor = '';
  }
}

function changeColorTask(element) {
  const el = element;
  setAllTasksWithBackgroundColorWhite();
  el.target.style.backgroundColor = 'rgb(128,128,128)';
}

function lineThrough(element) {
  const el = element;
  if (element.target.className === 'completed') {
    el.target.className = '';
  } else {
    el.target.className = 'completed';
  }
}

function addEventClickAndDobleClickInTask(task) {
  task.addEventListener('dblclick', lineThrough);
  task.addEventListener('click', changeColorTask);
}

let cont = -1;
function addTaskInList() {
  const taskList = document.getElementById('lista-tarefas');
  const taskText = document.getElementById('texto-tarefa');
  const task = document.createElement('li');
  task.innerText = taskText.value;
  task.setAttribute('id', cont += 1);
  taskList.appendChild(task);
  taskText.value = '';
  addEventClickAndDobleClickInTask(task);
}

function deleteTasksEnded() {
  while (document.getElementsByClassName('completed')[0]) {
    document.getElementsByClassName('completed')[0].remove();
  }
}

function clearListTasks() {
  const taskList = document.getElementById('lista-tarefas');
  taskList.innerHTML = '';
}

const buttonCriarTarefa = document.getElementById('criar-tarefa');
buttonCriarTarefa.addEventListener('click', addTaskInList);

const buttonDeleteTasksEnded = document.getElementById('remover-finalizados');
buttonDeleteTasksEnded.addEventListener('click', deleteTasksEnded);

const buttonClearListTasks = document.getElementById('apaga-tudo');
buttonClearListTasks.addEventListener('click', clearListTasks);

/* Exercício 12: */
const buttonSaveTasks = document.getElementById('salvar-tarefas');
function saveTasks() {
  const tasks = document.getElementsByTagName('li');
  const tasksArray = [];
  const tasksObject = {};
  for (let task of tasks) {
    tasksArray.push([task.innerText, task.className, task.style.backgroundColor]);
  }

  for (let index in tasksArray) {
    tasksObject[index] = tasksArray[index]
  }
  localStorage.setItem('tasks', JSON.stringify(tasksObject));
}
buttonSaveTasks.addEventListener('click', saveTasks);

/* 13 movimentação dos elementos para cima e para baixo: */
function createTaskList(tasks) {
  let cont = -1;
  const taskList = document.getElementById('lista-tarefas');
  taskList.innerHTML = '';
  for (let index = 0; index < tasks.length; index += 1) {
    let li = document.createElement('li');
    li.innerText = tasks[index][0];
    li.className = tasks[index][1];
    li.style.backgroundColor = tasks[index][2]
    li.setAttribute('id', cont += 1);
    taskList.appendChild(li);
  }
  addEventClickAndDobleClickInTask(taskList);
}

const buttonMoveTaskUp = document.getElementById('mover-cima');
const buttonMoveTaskDn = document.getElementById('mover-baixo');

function getSelectedItem() {
  const tasks = document.getElementsByTagName('li');
  let task = null;
  for (let index = 0; index < tasks.length; index += 1) {
    if (tasks[index].style.backgroundColor === 'rgb(128, 128, 128)') {
      task = tasks[index];
    }
  }
  return task;
}

function moveTaskUp(el) {
  const tasks = document.getElementsByTagName('li');
  console.log(getSelectedItem(), tasks[0], tasks[tasks.length - 1]);
  if (getSelectedItem() !== tasks[0] && getSelectedItem()) {
    let arrayTasks = [];
    for (let index = 0; index < tasks.length; index += 1) {
      arrayTasks.push([tasks[index].innerText,
      tasks[index].className,
      tasks[index].style.backgroundColor,
      tasks[index].getAttribute('id')]);
    }
    for (let index = 0; index < arrayTasks.length; index += 1) {
      let backColor = arrayTasks[index][2];
      if (backColor === 'rgb(128, 128, 128)') {
        let notSelected = arrayTasks[index - 1];
        let selected = arrayTasks[index];
        arrayTasks[index - 1] = selected;
        arrayTasks[index] = notSelected;
      }
    }
    createTaskList(arrayTasks);
  }
}

function moveTaskDn() {
  const tasks = document.getElementsByTagName('li');
  if (getSelectedItem() !== tasks[tasks.length - 1] && getSelectedItem()) {
  let arrayTasks = [];
  let positionChange = null;
  let notSelected = null;
  let selected = null;

  for (let index = 0; index < tasks.length; index += 1) {
    arrayTasks.push([tasks[index].innerText,
    tasks[index].className,
    tasks[index].style.backgroundColor,
    tasks[index].getAttribute('id')
  ]);
  }
  
  for (let index = 0; index < arrayTasks.length; index += 1) {
    let backColor = arrayTasks[index][2];
    if (backColor === 'rgb(128, 128, 128)') {
      positionChange = index;
      notSelected = arrayTasks[index + 1];
      selected = arrayTasks[index];
    }
  }
  arrayTasks.splice(positionChange, 1, notSelected);
  arrayTasks.splice(positionChange + 1, 1, selected);
  createTaskList(arrayTasks);
}
}

buttonMoveTaskUp.addEventListener('click', moveTaskUp);
buttonMoveTaskDn.addEventListener('click', moveTaskDn);

/* 14 - Criando botão para remover item selecionado */

function removeSelected() {
  getSelectedItem().remove();
}

buttonRemoveSelected = document.getElementById('remover-selecionado');

buttonRemoveSelected.addEventListener('click', removeSelected);