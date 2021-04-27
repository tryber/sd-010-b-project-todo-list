const listaTarefas = 'lista-tarefas';
const tasksList = document.getElementById(listaTarefas);

function riskCompleted(evt) {
  const tgt = evt.target;
  tgt.className = tgt.className.includes('completed') ? '' : 'completed';
}

const selectTask = (event) => {
  const allLis = document.getElementsByTagName('li');
  for (let i = 0; i < allLis.length; i += 1) {
    allLis[i].id = '';
  }
  const tgt = event.target;
  tgt.id += 'selected';
};

function createNewTask() {
  const newTaskBtn = document.getElementById('criar-tarefa');
  const taskText = document.getElementById('texto-tarefa');
  newTaskBtn.addEventListener('click', () => {
    const newTask = document.createElement('li');
    newTask.innerText = taskText.value;
    tasksList.appendChild(newTask);
    newTask.addEventListener('click', selectTask);
    newTask.addEventListener('dblclick', riskCompleted);
    taskText.value = '';
  });
}
const eraseBtn = document.getElementById('apaga-tudo');
eraseBtn.addEventListener('click', () => {
  tasksList.innerHTML = '';
  const tasks = document.getElementById(listaTarefas).innerHTML;
  localStorage.setItem('tasks', tasks);
});

const rmCompletedBtn = document.getElementById('remover-finalizados');
rmCompletedBtn.addEventListener('click', () => {
  // utilizei o forEach nessa situação após consultar o stackoverflow
  // link: https://stackoverflow.com/questions/44984867/javascript-remove-elements-by-class-name/44984940
  document.querySelectorAll('.completed').forEach((a) => {
    a.remove();
  });
  const tasks = document.getElementById(listaTarefas).innerHTML;
  localStorage.setItem('tasks', tasks);
});

const input = document.querySelector('input');
input.addEventListener('keypress', (evt) => {
  if (evt.code === 'Enter') {
    document.getElementById('criar-tarefa').click();
  }
});

const saveTasksBtn = document.getElementById('salvar-tarefas');
saveTasksBtn.addEventListener('click', () => {
  const tasks = document.getElementById(listaTarefas).innerHTML;
  localStorage.setItem('tasks', tasks);
});

function putSavedTasks() {
  tasksList.innerHTML = localStorage.getItem('tasks');
  const allLis = document.getElementsByTagName('li');
  for (let i = 0; i < allLis.length; i += 1) {
    allLis[i].addEventListener('click', selectTask);
    allLis[i].addEventListener('dblclick', riskCompleted);
  }
}

const moveUpBtn = document.getElementById('mover-cima');
moveUpBtn.addEventListener('click', () => {
  const selectedTask = document.getElementById('selected');
  if (selectedTask && selectedTask.parentElement.firstChild !== selectedTask) {
    selectedTask.parentElement.insertBefore(selectedTask, selectedTask.previousElementSibling);
  }
});

const moveDownBtn = document.getElementById('mover-baixo');
moveDownBtn.addEventListener('click', () => {
  const selectedTask = document.getElementById('selected');
  if (selectedTask && selectedTask.parentElement.lastChild !== selectedTask) {
    selectedTask.parentElement.insertBefore(selectedTask,
      selectedTask.nextElementSibling.nextElementSibling);
  }
});

const eraseSelectedBtn = document.getElementById('remover-selecionado');
eraseSelectedBtn.addEventListener('click', () => {
  const selectedTask = document.getElementById('selected');
  if (selectedTask) selectedTask.parentElement.removeChild(selectedTask);
});

createNewTask();
putSavedTasks();
