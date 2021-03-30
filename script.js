function tarefaCompleta(event) {
  if (event.target.className === 'completed selected') {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

// guarda as informações que são mandadas// 
function tarefaSelecionada(event) {
  const selecionarTarefa = document.querySelector('.selected');
  if (selecionarTarefa) {
    selecionarTarefa.classList.remove('selected');
  }
  event.target.classList.add('selected');
}  

function criaTarefas(event, taskName, className) {
  const listadeTarefas = document.querySelector('#lista-tarefas');
  const listItem = document.createElement('li');
  if (!taskName) {
    const task = document.querySelector('#texto-tarefa');
    taskName = task.value;
    task.value = '';
  }
  if (className) {
    listItem.className = className;
  }
  listItem.innerText = taskName;
  listItem.addEventListener('click', tarefaSelecionada);
  listItem.addEventListener('dblclick', tarefaCompleta);
  listadeTarefas.appendChild(listItem);
}

function limpaTarefas() {
  const listadeTarefas = document.querySelector('#lista-tarefas');
  while (listadeTarefas.firstElementChild) {
    listadeTarefas.removeChild(listadeTarefas.firstElementChild);
  }
}

function removeTudo() {
  const listadeTarefas = document.querySelector('#lista-tarefas');
  const listaTarefaCompleta = document.querySelectorAll('completed');
  for (let index = 0; index < listaTarefaCompleta.length; index += 1) {
    listadeTarefas.removeChild(listaTarefaCompleta[index]);
  }
}

function addCreateButtonsListeners() {
  const createTaskButton = document.querySelector('#criar-tarefa');
  const clearTasksButton = document.querySelector('#apaga-tudo');
  const removeCompletedButton = document.querySelector('#remover-finalizados');
  const removeSelectedButton = document.querySelector('#remover-selecionado');
  const saveTasksButton = document.querySelector('#salvar-tarefas');
  const taskUpButton = document.querySelector('#mover-cima');
  const taskDownButton = document.querySelector('#mover-baixo');
  createTaskButton.addEventListener('click', addTask);
  clearTasksButton.addEventListener('click', clearTasks);
  removeCompletedButton.addEventListener('click', removeCompleted);
  removeSelectedButton.addEventListener('click', removeSelected);
  saveTasksButton.addEventListener('click', saveTasks);
  taskUpButton.addEventListener('click', moveTaskUp);
  taskDownButton.addEventListener('click', moveTaskDown);
}