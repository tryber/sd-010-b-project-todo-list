// Requisito 5: function que adiciona funcionalidades ao button com o id 'criar-tarefa'.
const button = document.querySelector('#criar-tarefa');

function generateTask() {
  const dataInserted = document.querySelector('#texto-tarefa');
  const listFather = document.querySelector('#lista-tarefas');
  const value = dataInserted.value;
  const listElements = document.createElement('li');
  listElements.innerText = value;
  listElements.className = 'task';

  // function que verifica se foi introduzido algo no input:
  function verifiesInput() {
    if (value !== '') {
      listFather.appendChild(listElements);
      dataInserted.focus();
    } else {
      alert('Erro: campo de preenchimento vazio!');
    }
    dataInserted.value = '';
  }
  verifiesInput();
}

// 7 e 8 Mudar a cor de fundo do item ao clicar nele Somente permitir um elemento selecionado por vez:
const background = 'rgb(128, 128, 128)';
const allElements = document.querySelector('#lista-tarefas');
const tasks = document.getElementsByTagName('li');

function setSelected() {
  allElements.addEventListener('click', function (event) {
    const actual = event.target;

    for (let index = 0; index < tasks.length; index += 1) {
      tasks[index].style.backgroundColor = '';
    }
    actual.style.backgroundColor = background;
  });
}

// 9. Ao clicar duas vezes no item, ele será riscado (e vice-e-versa):
function completedTasks(event) {
  const actual = event.target;

  if (actual.className === 'completed') {
    actual.className = 'task';
  } else {
    actual.className = 'completed';
  }
}

// 10. Botão que apaga tudo:
const deleteButton = document.querySelector('#apaga-tudo');
function deleteAllItems() {
  while (allElements.firstChild) {
    allElements.removeChild(allElements.firstChild);
  }
  localStorage.clear();
}

// 11. Botão que remove todas as tarefas finalizadas:
const deleteCompletedButton = document.querySelector('#remover-finalizados');
function removeCompleted() {
  const listSons = document.querySelectorAll('li');
  const listFather = document.getElementById('lista-tarefas');

  for (let index = 0; index < listSons.length; index += 1) {
    // Dica retirada do link 'http://devfuria.com.br/javascript/dom-remove-child/#:~:text=O%20m%C3%A9todo%20removeChild()%20remove,filho%20que%20deve%20ser%20removido.':
    if (listSons[index].classList.contains('completed') === true) {
      listFather.removeChild(listSons[index]);
    }
  }
}

// 12. Botão que salva tarefas:
const saveTasks = document.querySelector('#salvar-tarefas');
const actualTasksFather = document.getElementById('lista-tarefas');

// Parte da lógica das funções saveTasksStatus e recoverSavedTasks foram implementadas-refatoradas com apoio do material do colega Thiago Felipe (https://github.com/tryber/sd-010-b-project-todo-list/blob/thiago-felipe-todo-list/script.js):
function saveTasksStatus() {
  const actualTasks = document.querySelectorAll('li');
  if (actualTasks.length > 0) {
    localStorage.tasks = actualTasksFather.innerHTML; // nesta linha.
  } else {
    alert('Erro: a lista de tarefas está vazia!');
  }
}

// Recuperar as tarefas no carregamento da página:
function recoverSavedTasks() {
  const tasksFather = document.getElementById('lista-tarefas');
  if (localStorage.tasks) tasksFather.innerHTML = localStorage.tasks; // e em parte desta linha.
}

// 13. Function que permite mover o item selecionado para cima ou para baixo na lista de tarefas:
// Lógica das funções moveUp e moveDown baseadas no exemplo do link 'https://stackoverflow.com/questions/34913953/move-an-element-one-place-up-or-down-in-the-dom-tree-with-javascript'.
const upButton = document.querySelector('#mover-cima');
const downButton = document.querySelector('#mover-baixo');

function moveUp() {
  for (let index = 0; index < tasks.length; index += 1) {
    if (tasks[index].style.backgroundColor === background) {
      if (tasks[index].previousElementSibling) {
        tasks[index].parentNode.insertBefore(tasks[index], tasks[index].previousElementSibling);
      }
    }
  }
}

function moveDown() {
  // Resolvido o problema do loop de repetição com ajuda do Abimael Albuquerque Rocha.
  for (let index = tasks.length - 1; index >= 0; index -= 1) {
    if (tasks[index].style.backgroundColor === background) {
      if (tasks[index].nextSibling) {
        tasks[index].parentNode.insertBefore(tasks[index].nextSibling, tasks[index]);
      }
    }
  }
}

// 14. Botão que remove a tarefa selecionada:
const selectedButton = document.querySelector('#remover-selecionado');
function removeSelected() {
  const listSons = document.querySelectorAll('li');
  const listFather = document.getElementById('lista-tarefas');

  for (let index = 0; index < listSons.length; index += 1) {
    if (listSons[index].style.backgroundColor === background) {
      listFather.removeChild(listSons[index]);
    }
  }
}

setSelected();
button.addEventListener('click', generateTask);
allElements.addEventListener('dblclick', completedTasks);
deleteButton.addEventListener('click', deleteAllItems);
deleteCompletedButton.addEventListener('click', removeCompleted);
saveTasks.addEventListener('click', saveTasksStatus);
selectedButton.addEventListener('click', removeSelected);
upButton.addEventListener('click', moveUp);
downButton.addEventListener('click', moveDown);
window.onload = recoverSavedTasks();
