// requesito 5 e 6

function createListItem() {
  const taskName = document.querySelector('#texto-tarefa');
  if (taskName.value !== '') {
    const makeList = document.querySelector('#lista-tarefas');
    const listItem = document.createElement('li');
    listItem.innerText = taskName.value;
    makeList.appendChild(listItem);
    listItem.classList.add('taskList');
    taskName.value = '';
  }
}

const btnListAdd = document.querySelector('#criar-tarefa');
btnListAdd.addEventListener('click', createListItem);

// requesito 7 e 8 - Tive ajuda dos colegas Gabriel Miranda e Lucas Martins

const olParent = document.getElementById('lista-tarefas');

olParent.addEventListener('click', function (event) {
  const taskList = document.querySelector('.selected');
  if (taskList !== null) {
    taskList.classList.remove('selected');
  }
  event.target.classList.toggle('selected');
});

// Requesito 9

olParent.addEventListener('dblclick', function (event) {
  event.target.classList.toggle('completed');
});

// Requesito 10 --> https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/ (referência)

function removeAllListItens() {
  while (olParent.firstChild) {
    olParent.removeChild(olParent.firstChild);
  }
}

const btnRemoveAll = document.getElementById('apaga-tudo');
btnRemoveAll.addEventListener('click', removeAllListItens);

// Requesito 11 --> https://www.javascripttutorial.net/dom/manipulating/remove-a-dom-element/ (referência)
function removeCompletedItens() {
  const completedList = document.querySelectorAll('.completed');
  for (let i = 0; i < completedList.length; i += 1) {
    olParent.removeChild(completedList[i]);
  }
}

const btnRemoveCompleted = document.getElementById('remover-finalizados');
btnRemoveCompleted.addEventListener('click', removeCompletedItens);
