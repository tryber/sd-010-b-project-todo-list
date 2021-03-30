function tarefaSelecionada(event) {
  if (event.target.className === 'completed selected') {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

function tarefaCompleta(event) {
  const selectedTask = document.querySelector('.selected');
  if (selectedTask) {
    selectedTask.classList.remove('selected');
  }
  event.target.classList.add('selected');
}

function criaTarefas(event, taskName, className) {
  const taskList = document.querySelector('#lista-tarefas');
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
  taskList.appendChild(listItem);
}

function limpaTarefa() {
  const taskList = document.querySelector('#lista-tarefas');
  while (taskList.firstElementChild) {
    taskList.removeChild(taskList.firstElementChild);
  }
}

function removeTudo() {
  const taskList = document.querySelector('#lista-tarefas');
  const completedTaskList = document.querySelectorAll('.completed');
  for (let index = 0; index < completedTaskList.length; index += 1) {
    taskList.removeChild(completedTaskList[index]);
  }
}

function removeSelecionada() {
  if (document.querySelector('.selected')) {
    const taskList = document.querySelector('#lista-tarefas');
    const taskSelected = document.querySelector('.selected');
    taskList.removeChild(taskSelected);
  }
}

function salvaTarefa() {
  const taskList = document.querySelector('#lista-tarefas');
  const tasks = taskList.children;
  localStorage.clear();
  for (let index = 0; index < tasks.length; index += 1) {
    const taskProperties = JSON.stringify([tasks[index].innerText, tasks[index].className]);
    localStorage.setItem(index, taskProperties);
  }
}

function moverCima() {
  if (document.querySelector('.selected')) {
    const taskSelected = document.querySelector('.selected');
    if (taskSelected.previousElementSibling) {
      const taskUp = taskSelected.previousElementSibling;
      const taskName = taskSelected.innerText;
      const taskClass = taskSelected.className;
      taskSelected.innerText = taskUp.innerText;
      taskSelected.className = taskUp.className;
      taskUp.innerText = taskName;
      taskUp.className = taskClass;
    }
  }
}

function moverBaixo() {
  if (document.querySelector('.selected')) {
    const taskSelected = document.querySelector('.selected');
    if (taskSelected.nextElementSibling) {
      const taskDown = taskSelected.nextElementSibling;
      const taskName = taskSelected.innerText;
      const taskClass = taskSelected.className;
      taskSelected.innerText = taskDown.innerText;
      taskSelected.className = taskDown.className;
      taskDown.innerText = taskName;
      taskDown.className = taskClass;
    }
  }
}

function criarCarregarBotoes() {
  const btnCriarTarefa = document.querySelector('#criar-tarefa');
  const btnLimpaTarefa = document.querySelector('#apaga-tudo');
  const btnRemoveTudo = document.querySelector('#remover-finalizados');
  const btnRemoveSelecionada = document.querySelector('#remover-selecionado');
  const btnSalvaTarefa = document.querySelector('#salvar-tarefas');
  const btnMoveCima = document.querySelector('#mover-cima');
  const btnMoveBaixo = document.querySelector('#mover-baixo');
  btnCriarTarefa.addEventListener('click', criaTarefas);
  btnLimpaTarefa.addEventListener('click', limpaTarefa);
  btnRemoveTudo.addEventListener('click', removeTudo);
  btnRemoveSelecionada.addEventListener('click', removeSelecionada);
  btnSalvaTarefa.addEventListener('click', salvaTarefa);
  btnMoveCima.addEventListener('click', moverCima);
  btnMoveBaixo.addEventListener('click', moverBaixo);
}

function carregarTarefas() {
  for (let index = 0; index < localStorage.length; index += 1) {
    const tarefaPropriedade = JSON.parse(localStorage.getItem(index));
    criaTarefas(null, tarefaPropriedade[0], tarefaPropriedade[1]);
  }
}

window.onload = function () {
  criarCarregarBotoes();
  carregarTarefas();
};
