const createListButton = document.getElementById('criar-tarefa'); // button Criar Tarefa
const clearButton = document.getElementById('apaga-tudo'); // button Apagar Lista
const clearCompletedButton = document.getElementById('remover-finalizados'); // button Remover Finalizados
const clearSelectedButton = document.getElementById('remover-selecionado'); // button Remover Selecionado

function createListItem() {
  const listCreate = document.getElementById('lista-tarefas');
  const capture = document.getElementById('texto-tarefa');
  const newListItem = document.createElement('li');

  newListItem.innerText = capture.value;
  listCreate.appendChild(newListItem);
  capture.value = '';
}

function selectedLine() {
  const listColor = document.getElementsByTagName('li');
  const listCreate = document.getElementById('lista-tarefas');
  listCreate.addEventListener('click', (event) => {
    for (let i = 0; i < listColor.length; i += 1) {
      if (listColor[i].classList.contains('selected')) {
        listColor[i].classList.remove('selected');
      }
    }
    event.target.classList.add('selected');
  });
}

function taskComplete(aux) {
  const completedTask = aux;
  completedTask.classList.add('completed');
}

function removeTaskComplete(aux) {
  const completedTask = aux;
  completedTask.classList.remove('completed');
}

function clearList() {
  const list = document.querySelectorAll('li');
  for (let i = 0; i < list.length; i += 1) {
    list[i].remove();
  }
}

function clearCompletedList() {
  const completeList = document.querySelectorAll('.completed');
  for (let i = 0; i < completeList.length; i += 1) {
    completeList[i].remove();
  }
}

function clearSelected() {
  const selectList = document.querySelector('.selected');
  selectList.remove();
}

selectedLine();
createListButton.addEventListener('click', createListItem);
clearButton.addEventListener('click', clearList);
clearCompletedButton.addEventListener('click', clearCompletedList);
clearSelectedButton.addEventListener('click', clearSelected);

function DbllistColorener() {
  document.addEventListener('dblclick', (action) => {
    if (action.target.classList.contains('completed')) {
      removeTaskComplete(action.target);
    } else {
      taskComplete(action.target);
    }
  });
}
DbllistColorener();
