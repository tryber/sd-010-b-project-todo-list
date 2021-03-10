// elements
const olList = document.querySelector('#lista-tarefas');
const btnMoveUp = document.querySelector('#mover-cima');
const btnMoveDown = document.querySelector('#mover-baixo');
const btnAddTodo = document.querySelector('#criar-tarefa');
const inputTodo = document.querySelector('#texto-tarefa');
const btnDeleteAll = document.querySelector('#apaga-tudo');
const btnDeleteFinished = document.querySelector('#remover-finalizados');
const btnDeleteSelects = document.querySelector('#remover-selecionado');
const btnSaveTask = document.querySelector('#salvar-tarefas');
const childs = olList.children;
const bgColor = 'rgb(128, 128, 128)';

window.onload = () => {
  const todos = localStorage.getItem('todos');
  if (todos) olList.innerHTML = todos;
};

// add to-dos

const addTodo = () => {
  const task = document.createElement('li');
  task.innerText = inputTodo.value;
  task.className = 'task';
  olList.appendChild(task);
  inputTodo.value = '';
};

btnAddTodo.addEventListener('click', addTodo);
inputTodo.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) addTodo();
});

// select to-dos

const taskSelect = (e) => {
  const tasks = document.querySelectorAll('.task');

  for (let i = 0; i < tasks.length; i += 1) {
    if (tasks[i] === e.target) {
      tasks[i].style.backgroundColor = bgColor;
    } else {
      tasks[i].style.backgroundColor = 'transparent';
    }
  }
};

olList.addEventListener('click', taskSelect);

// completed to-dos

const taskCompleted = (e) => {
  e.target.classList.toggle('completed');
};

olList.addEventListener('dblclick', taskCompleted);

// moveUp to-dos

const moveUp = () => {
  for (let i = 0; i < childs.length; i += 1) {
    const index = Array.prototype.indexOf;
    if (
      childs[i].style.backgroundColor === bgColor && index.call(childs, childs[i]) !== 0
    ) {
      olList.insertBefore(childs[i], childs[i].previousElementSibling);
    }
  }
};

btnMoveUp.addEventListener('click', moveUp);

// moveDown to-dos

const moveDown = () => {
  for (let i = childs.length - 2; i >= 0; i -= 1) {
    if (childs[i].style.backgroundColor === bgColor) {
      olList.insertBefore(childs[i].nextElementSibling, childs[i]);
    }
  }
};

btnMoveDown.addEventListener('click', moveDown);

// delete All to-dos

const deleteAllTodos = () => {
  const tasks = document.querySelectorAll('.task');
  for (let i = 0; i < tasks.length; i += 1) {
    olList.removeChild(tasks[i]);
  }
};

btnDeleteAll.addEventListener('click', deleteAllTodos);

// delete finished to-dos

const deleteFinishedTodos = () => {
  const tasks = document.querySelectorAll('.task');
  for (let i = 0; i < tasks.length; i += 1) {
    if (tasks[i].classList.contains('completed')) {
      olList.removeChild(tasks[i]);
    }
  }
};

btnDeleteFinished.addEventListener('click', deleteFinishedTodos);

// delete select to-dos

const deleteSelectTodos = () => {
  for (let i = 0; i < childs.length; i += 1) {
    if (
      childs[i].nodeName === 'LI' && childs[i].style.backgroundColor === bgColor
    ) {
      olList.removeChild(childs[i]);
    }
  }
};

btnDeleteSelects.addEventListener('click', deleteSelectTodos);

// save to-dos

const saveTask = () => {
  localStorage.setItem('todos', olList.innerHTML);
};

btnSaveTask.addEventListener('click', saveTask);
