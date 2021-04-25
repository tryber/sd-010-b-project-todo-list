const taskList = document.getElementById('lista-tarefas');
const taskText = document.getElementById('texto-tarefa');
const btnCriarTarefa = document.getElementById('criar-tarefa');
const btnClearTaskList = document.getElementById('apaga-tudo');
const btnRemoveFinished = document.getElementById('remover-finalizados');
const btnSaveTaskList = document.getElementById('salvar-tarefas');
const btnMoveUp = document.getElementById('mover-cima');
const btnMoveDown = document.getElementById('mover-baixo');

const checkBackgroundColor = () => {
  const li = document.querySelector('.colorGray');
  if (li) {
    li.classList.remove('colorGray');
  }
};

const taskCompleted = (event) => {
  event.target.classList.toggle('completed');
};

const selectTask = (event) => {
  const liSelect = event.target;
  if (liSelect.classList.contains('colorGray')) {
    liSelect.classList.remove('colorGray');
  } else {
    checkBackgroundColor();
    liSelect.classList.add('colorGray');
  }
};

const createList = () => {
  const creatLi = document.createElement('li');

  creatLi.className = '';
  creatLi.innerText = taskText.value;
  taskText.value = '';

  taskList.appendChild(creatLi);

  creatLi.addEventListener('dblclick', taskCompleted);
  creatLi.addEventListener('click', selectTask);
  taskText.focus();
};

const clearTaskList = () => {
  taskList.innerHTML = '';
};

const removeFinished = () => {
  const completeds = document.querySelectorAll('.completed');
  completeds.forEach((completed) =>
    completed.parentNode.removeChild(completed)
  );
};

const saveTaskList = () => {
  const getOl = document.querySelector('#lista-tarefas').innerHTML;
  
  localStorage.setItem('taskList', getOl);
};

const restoreTaskList = () => {
  const getItemsLocalStorage = localStorage.getItem('taskList');
  const getOl = document.querySelector('#lista-tarefas');
  getOl.innerHTML = getItemsLocalStorage;
  const addEventAgainLi = document.querySelectorAll('li'); 
  addEventAgainLi.forEach((li) => {
    li.addEventListener('dblclick', taskCompleted);
    li.addEventListener('click', selectTask);
  });
};

const moveUp = () => {
  const li = document.querySelectorAll('li');
  li.forEach((liSelect, index) => {
    const liBefore = li[index - 1];
    if (liSelect.classList.contains('colorGray')){
      liSelect.parentNode.insertBefore(liBefore, liSelect.nextSibling)
    }
  });  
};

const moveDown = () => {
  const li = document.querySelectorAll('li');
  li.forEach((liSelect, index) => {
    const liAfter = li[index + 1];
    if (liSelect.classList.contains('colorGray')){
      liSelect.parentNode.insertBefore(liSelect, liAfter.nextSibling)
    }
  });  
};

btnCriarTarefa.addEventListener('click', createList);

btnClearTaskList.addEventListener('click', clearTaskList);

btnRemoveFinished.addEventListener('click', removeFinished);

btnSaveTaskList.addEventListener('click', saveTaskList);

btnMoveUp.addEventListener('click', moveUp);
btnMoveDown.addEventListener('click', moveDown);

window.onload = () => {
  restoreTaskList();
};
