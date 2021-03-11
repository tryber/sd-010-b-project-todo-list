const taskList = document.getElementById('lista-tarefas');

function saveTasksList() {
  const tasks = document.getElementsByClassName('task');
  const items = [];
  const classes = [];
  if (tasks.length > 0) {
    for (let i = 0; i < tasks.length; i += 1) {
      items.push(tasks[i].innerHTML);
      classes.push(tasks[i].className);
      localStorage.setItem('tasks', JSON.stringify(items));
      localStorage.setItem('classes', JSON.stringify(classes)); // https://stackoverflow.com/questions/58422340/trying-to-save-all-generated-li-elements-to-local-storage-using-javascript
    }
  } else {
    localStorage.clear();
  }
}

function taskSelect(e) {
  const taskSelected = document.querySelector('.selected');
  if (taskSelected) {
    taskSelected.classList.remove('selected');
  }
  e.target.classList.add('selected');
  saveTasksList();
}

function taskCompleted(e) {
  e.target.classList.toggle('completed');
  saveTasksList();
}

function addTask() {
  const newTask = document.getElementById('texto-tarefa');
  if (newTask.value !== '') {
    const task = document.createElement('li');
    task.className = 'task';
    task.innerHTML = newTask.value;
    taskList.appendChild(task);
    task.addEventListener('click', taskSelect);
    task.addEventListener('dblclick', taskCompleted);
    newTask.value = '';
  }
}

function removeAllTasks() {
  taskList.innerHTML = '';
  localStorage.clear();
  saveTasksList();
}

function removeCompletedTasks() {
  const completedTasks = document.getElementsByClassName('completed');
  for (let i = 0; i < completedTasks.length; i += 1) {
    completedTasks[i].remove();
  }
  // saveTasksList();
  if (completedTasks.length > 0) {
    removeCompletedTasks();
  }
}

function removeSelectedTasks() {
  const selectedTask = document.querySelector('.selected');
  if (selectedTask) {
    selectedTask.remove();
    saveTasksList();
  }
}

function addList(storedTask, classTask) {
  const task = document.createElement('li');
  task.className = classTask;
  task.innerHTML = storedTask;
  taskList.appendChild(task);
  task.addEventListener('click', taskSelect);
  task.addEventListener('dblclick', taskCompleted);
}

// moveUp e moveDown baseado em: https://stackoverflow.com/questions/34913953/move-an-element-one-place-up-or-down-in-the-dom-tree-with-javascript
function moveUp() {
  const element = document.querySelector('.selected');
  if (element && element.previousElementSibling) {
    element.parentNode.insertBefore(element, element.previousElementSibling);
    saveTasksList();
  }
}

function moveDown() {
  const element = document.querySelector('.selected');
  if (element && element.nextElementSibling) {
    element.parentNode.insertBefore(element.nextElementSibling, element);
    saveTasksList();
  }
}

function init() {
  const storedTask = JSON.parse(localStorage.getItem('tasks'));
  const storedClass = JSON.parse(localStorage.getItem('classes'));
  if (storedTask) {
    for (let i = 0; i < storedTask.length; i += 1) {
      addList(storedTask[i], storedClass[i]);
    }
  }
}
init();

const btnAdd = document.getElementById('criar-tarefa');
btnAdd.addEventListener('click', addTask);

const btnRmvAll = document.getElementById('apaga-tudo');
btnRmvAll.addEventListener('click', removeAllTasks);

const btnRmvCompleted = document.getElementById('remover-finalizados');
btnRmvCompleted.addEventListener('click', removeCompletedTasks);

const btnRmvSelected = document.getElementById('remover-selecionado');
btnRmvSelected.addEventListener('click', removeSelectedTasks);

const btnSave = document.getElementById('salvar-tarefas');
btnSave.addEventListener('click', saveTasksList);

const btnMoveUp = document.getElementById('mover-cima');
btnMoveUp.addEventListener('click', moveUp);

const btnMoveDown = document.getElementById('mover-baixo');
btnMoveDown.addEventListener('click', moveDown);
