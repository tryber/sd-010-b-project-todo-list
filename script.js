const button = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');
const input = document.getElementById('texto-tarefa');
const clearButton = document.getElementById('apaga-tudo');
const clearActivityButton = document.getElementById('remover-finalizados');
const salveListButton = document.getElementById('salvar-tarefas');
const clearSelectedButton = document.getElementById('remover-selecionado');
const moveUpButton = document.getElementById('mover-cima');
const moveDownButton = document.getElementById('mover-baixo');

function addActivity() {
  button.addEventListener('click', () => {
    const listItem = document.createElement('li');
    list.appendChild(listItem);
    listItem.innerHTML = input.value;
    input.value = '';
  });
}
addActivity();

window.onload = function defaultBackgroundList() {
  let backgroundColorList = list.style.backgroundColor;
  backgroundColorList = 'white';
  sessionStorage.setItem('colorList', backgroundColorList);
};

function selectActivity() {
  const listItem = document.getElementsByTagName('li');
  list.addEventListener('click', (event) => {
    const element = event;
    for (let index = 0; index < listItem.length; index += 1) {
      listItem[index].classList.remove('selected');
    }
    element.target.classList.add('selected');
  });
}
selectActivity();

function completeActivity() {
  list.addEventListener('dblclick', (event) => {
    const element = event;
    element.target.classList.toggle('completed');
  });
}
completeActivity();

function clearList() {
  clearButton.addEventListener('click', () => {
    list.innerHTML = '';
  });
}
clearList();

function clearCompletedActivities() {
  clearActivityButton.addEventListener('click', () => {
    const listItemComplete = document.querySelectorAll('.completed');
    for (let index = 0; index < listItemComplete.length; index += 1) {
      listItemComplete[index].remove();
    }
  });
}
clearCompletedActivities();

window.onload = function salveList() {
  salveListButton.addEventListener('click', () => {
    localStorage.setItem('activities', list.innerHTML);
  });
  if (localStorage.activities) {
    list.innerHTML = localStorage.activities;
  }
};

function clearSelectedActivities() {
  clearSelectedButton.addEventListener('click', () => {
    const activitySelected = document.querySelector('.selected');
    activitySelected.remove();
  });
}
clearSelectedActivities();

function moveUp() {
  const allActivities = document.getElementsByTagName('li');
  moveUpButton.addEventListener('click', () => {
    for (let index = 1; index < allActivities.length; index += 1) {
      if (allActivities[index].classList.contains('selected')) {
        list.insertBefore(allActivities[index], allActivities[index - 1]); // o numero index será inserido antes do valor acima ( por isso, que sobe)
      }
    }
  });
}
moveUp();

function moveDown() {
  const allActivities = document.getElementsByTagName('li');
  moveDownButton.addEventListener('click', () => {
    for (let index = allActivities.length - 1; index >= 0; index -= 1) {
      if (allActivities[index].classList.contains('selected') && index < allActivities.length - 1) {
        list.insertBefore(allActivities[index].nextSibling, allActivities[index]); // o numero após o valor[index] será inserido antes deste
      }
    }
  });
}
moveDown();
