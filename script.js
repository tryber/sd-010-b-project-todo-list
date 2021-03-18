// requisito 5 e 6
const criarTarefa = document.getElementById('criar-tarefa');
const inputTarefa = document.getElementById('texto-tarefa');
const listaTarefa = document.getElementById('lista-tarefas');

function addTarefa(add) {
  add.preventDefault();
  const novoItem = document.createElement('li');
  const novaTarefa = inputTarefa.value;
  novoItem.innerText = novaTarefa;
  listaTarefa.appendChild(novoItem);
  inputTarefa.value = '';
}

criarTarefa.addEventListener('click', addTarefa);

// requisito 7
function alteraCor(event) {
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

listaTarefa.addEventListener('click', alteraCor);

// requisito 8 (deu ruim)
// const classTarefas = document.getElementsByTagName('li');
// classTarefas.className = 'task'
// function selecionaItem(troca) {
//   const todasTarefas = document.querySelectorAll('.task');
//   for (let i = 0; i < todasTarefas.length; i += 1) {
//     todasTarefas[i].className = 'task';
//   }
//   troca.target.classList.add('selected');
//   classTarefas.querySelector('.selected').classList.remove('selected');
//   this.classList.add('selected');
// }

// listaTarefa.addEventListener('click', selecionaItem);

// requisito 9
function markCompleted(mark) {
  if (!mark.target.classList.contains('completed')) {
    mark.target.classList.add('completed');
  } else {
    mark.target.classList.remove('completed');
  }
}
listaTarefa.addEventListener('dblclick', markCompleted);

// requisito 10
const removeAll = document.getElementById('apaga-tudo');

function removeAllButtons(rall) {
  rall.preventDefault();
  listaTarefa.innerHTML = '';
}

removeAll.addEventListener('click', removeAllButtons);

// requisito 11
const removeAllFinalized = document.getElementById('remover-finalizados');

function removeCompleted(rmCompleted) {
  rmCompleted.preventDefault();
  const allTasks = document.querySelectorAll('.task');
  for (let i = allTasks.length - 1; i >= 0; i -= 1) {
    if (allTasks[i].classList.contains('completed')) {
      allTasks[i].remove();
    }
  }
}

removeAllFinalized .addEventListener('click', removeCompleted);
