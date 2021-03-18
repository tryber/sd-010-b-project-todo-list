const addButton = document.getElementById('criar-tarefa');
const task = document.getElementById('texto-tarefa');
const oL = document.getElementById('lista-tarefas');
// const taskList = {};

function creatOL() {
  const taski = document.createElement('li');
  taski.className = 'task';
  taski.innerText = task.value;
  oL.appendChild(taski);
  task.value = '';
}
addButton.addEventListener('click', creatOL);

function listenClick() {
  const clickList = document.getElementsByTagName('li');
  oL.addEventListener('click', (e) => {
    for (let i = 0; i < clickList.length; i += 1) {
      if (clickList[i].classList.contains('selected')) {
        clickList[i].classList.remove('selected');
      }
    }
    e.target.classList.add('selected');
  });
}
listenClick();

// Para as funções abaixo eu tive ajuda do colega Robson Cardoso //

// function completedTask(parameter) {
//   const completed = parameter;
//   completed.classList.add('completed');
// }

// function removeCompleted(parameter) {
//   const incompleted = parameter;
//   incompleted.classList.remove('completed');
// }

// Até aqui! //

function taskCompleted() {
  oL.addEventListener('dblclick', (e) => {
    if (e.target.classList.contains('completed')) {
      e.target.classList.remove('completed');
    } else {
      e.target.classList.add('completed');
    }
  });
}
taskCompleted();

function eraseList() {
  const listItem = document.querySelectorAll('li');
  for (let index = 0; index < listItem.length; index += 1) {
    listItem[index].remove();
  }
}

document.getElementById('apaga-tudo').addEventListener('click', eraseList);

function eraseCompleted() {
  const completedTasks = document.querySelectorAll('.completed');
  for (let i = 0; i < completedTasks.length; i += 1) {
    completedTasks[i].remove();
  }
}

document.getElementById('remover-finalizados').addEventListener('click', eraseCompleted);

function removeSelected() {
  const eraseSelected = document.querySelector('.selected');
  eraseSelected.remove();
}

document.getElementById('remover-selecionado').addEventListener('click', removeSelected);

const list = document.getElementById('lista-tarefas');
list.innerHTML = localStorage.getItem('savedList');

document.getElementById('salvar-tarefas').addEventListener('click', () => {
  localStorage.setItem('savedList', list.innerHTML);
});

function moveItemUp() {
  const selectedItem = document.querySelector('.selected');
  const previousItem = selectedItem.previousSibling;
  if (selectedItem && previousItem) {
    const selectedText = selectedItem.innerText;
    const previousText = selectedItem.previousSibling.innerText;
    const selected = selectedItem.className;
    const previous = previousItem.className;
    selectedItem.textContent = previousText;
    selectedItem.className = previous;
    previousItem.textContent = selectedText;
    previousItem.className = selected;
  }
}
document.getElementById('mover-cima').addEventListener('click', moveItemUp);

function moveItemDown() {
  const selectedItem = document.querySelector('.selected');
  const nextItem = selectedItem.nextSibling;
  if (selectedItem && nextItem) {
    const selectedText = selectedItem.innerText;
    const nextText = nextItem.innerText;
    const selected = selectedItem.className;
    const next = nextItem.className;
    selectedItem.textContent = nextText;
    selectedItem.className = next;
    nextItem.textContent = selectedText;
    nextItem.className = selected;
  }
}
document.getElementById('mover-baixo').addEventListener('click', moveItemDown);
