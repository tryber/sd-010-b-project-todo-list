const botaoCriarTarefas = document.querySelector('#criar-tarefa');
const botaoLimparTarefas = document.querySelector('#apaga-tudo');
const botaoRemover = document.querySelector('#remover-finalizados');
 
botaoCriarTarefas.addEventListener('click', criaTarefas);
botaoLimparTarefas.addEventListener('click', limpaTarefas);
botaoRemover.addEventListener('click', removeTudo);

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

