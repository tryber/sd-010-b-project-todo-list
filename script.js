// Funções utilizadas
function createTask() {
  const task = document.getElementById('texto-tarefa').value;
  const orderedList = document.getElementById('lista-tarefas');
  const newTask = document.createElement('li');
  newTask.innerHTML = task;
  newTask.classList = 'tarefa';
  orderedList.appendChild(newTask);
  document.getElementById('texto-tarefa').value = '';
}

function selectTask(task) {
  const selectedTask = task;
  if (selectedTask.classList.contains('tarefa')) {
    if (document.querySelector('.selected')) {
      const oldSelection = document.querySelector('.selected');
      oldSelection.classList.remove('selected');
    }
    selectedTask.classList.add('selected');
  }
}

function completeTask(task) {
  const completedTask = task;
  completedTask.classList.add('completed');
}

function removeCompletedTask(task) {
  const completedTask = task;
  completedTask.classList.remove('completed');
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function clearList() {
  const parent = document.getElementById('lista-tarefas');
  removeAllChildNodes(parent);
}

function clearCompleted() {
  const parent = document.getElementById('lista-tarefas');
  const children = document.querySelectorAll('.completed');
  for (let index = 0; index < children.length; index += 1) {
    parent.removeChild(children[index]);
  }
}

function clearSelected() {
  const parent = document.getElementById('lista-tarefas');
  const children = document.querySelector('.selected');
  parent.removeChild(children);
}

function moveUp() {
  if (!document.querySelector('.selected')) {
    alert('selecione uma tarefa para mover');
  } else {
    const array = Array.from(document.querySelectorAll('.tarefa'));
    const selected = document.querySelector('.selected');
    for (let index = 1; index < array.length; index += 1) {
      if (array[index].className === selected.className) {
        const auxiliary = array[index - 1];
        array[index - 1] = array[index];
        array[index] = auxiliary;
      }
    }
    const listaPai = document.getElementById('lista-tarefas');
    removeAllChildNodes(listaPai);
    const orderedList = document.getElementById('lista-tarefas');
    for (let index = 0; index < array.length; index += 1) {
      orderedList.appendChild(array[index]);
    }
  }
}

function moveDown() {
  if (!document.querySelector('.selected')) {
    alert('selecione uma tarefa para mover');
  } else {
    const array = Array.from(document.querySelectorAll('.tarefa'));
    const selected = document.querySelector('.selected');
    for (let index = 0; index < (array.length - 1); index += 1) {
      if (array[index].className === selected.className) {
        const auxiliary = array[index + 1];
        array[index + 1] = array[index];
        array[index] = auxiliary;
        break;
      }
    }
    const listaPai = document.getElementById('lista-tarefas');
    removeAllChildNodes(listaPai);
    const orderedList = document.getElementById('lista-tarefas');
    for (let index = 0; index < array.length; index += 1) {
      orderedList.appendChild(array[index]);
    }
  }
}

function saveList() {
  localStorage.clear();
  const array = Array.from(document.querySelectorAll('.tarefa'));
  for (let index = 0; index < array.length; index += 1) {
    localStorage.setItem(index, `${array[index].innerHTML}|${array[index].classList}`);
  }
}

function retrieveList() {
  const orderedList = document.getElementById('lista-tarefas');
  for (let index = 0; index < localStorage.length; index += 1) {
    const returned = localStorage.getItem(index).split('|');
    // console.log(returned);
    const text = returned[0];
    const classes = returned[1];
    const newTask = document.createElement('li');
    newTask.innerHTML = text;
    newTask.classList = classes;
    orderedList.appendChild(newTask);
  }
}

// Captura de cliques e lógica básica
window.onload = function () {
  if (localStorage) {
    retrieveList();
  }
  document.addEventListener('click', (event) => {
    if (event.target.id === 'criar-tarefa') {
      createTask();
    }
    if (event.target.classList.contains('tarefa')) {
      selectTask(event.target);
    }
    if (event.target.id === 'apaga-tudo') {
      clearList();
    }
    if (event.target.id === 'remover-finalizados') {
      clearCompleted();
    }
    if (event.target.id === 'remover-selecionado') {
      clearSelected();
    }
    if (event.target.id === 'mover-cima') {
      moveUp();
    }
    if (event.target.id === 'mover-baixo') {
      moveDown();
    }
    if (event.target.id === 'salvar-tarefas') {
      saveList();
    }
  }, false);
  document.addEventListener('dblclick', (event) => {
    if (event.target.classList.contains('completed')) {
      removeCompletedTask(event.target);
    } else {
      completeTask(event.target);
    }
  }, false);
};
