const textoTarefa = document.querySelector('#texto-tarefa');
const newTasksButton = document.querySelector('#criar-tarefa');
const buttonFinalizados = document.querySelector('#remover-finalizados');
const buttonSelecionado = document.querySelector('#remover-selecionado');
const buttonCima = document.querySelector('#mover-cima');
const buttonBaixo = document.querySelector('#mover-baixo');
const buttonSaveList = document.querySelector('#salvar-tarefas');
const taskList = document.querySelector('#lista-tarefas');

const corFundo = (newTask) => {
  const myNewTask = newTask.target;
  const allSelectedItem = document.querySelectorAll('.selected');
  if (allSelectedItem.length === 0) {
    myNewTask.className += ' selected';
    myNewTask.style.backgroundColor = 'rgb(128,128,128)';
  } else {
    const selectedItem = document.querySelector('.selected');
    selectedItem.classList.remove('selected');
    selectedItem.style.backgroundColor = 'white';
    myNewTask.className += ' selected';
    myNewTask.style.backgroundColor = 'rgb(128,128,128)';
  }
};

const riskItemOrNot = (newTask) => {
  const myNewTask = newTask.target;
  if (myNewTask.style.textDecoration === '') {
    myNewTask.className += ' completed';
    myNewTask.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
  } else {
    myNewTask.classList.remove('completed');
    myNewTask.style.textDecoration = '';
  }
};

function createNewItem() {
  const newTask = document.createElement('li');
  newTask.innerHTML = textoTarefa.value;
  taskList.appendChild(newTask);
  newTask.className += 'created';
  newTask.addEventListener('click', corFundo);
  newTask.addEventListener('dblclick', riskItemOrNot);
  textoTarefa.value = '';
}

newTasksButton.addEventListener('click', createNewItem);

const buttonReset = document.querySelector('#apaga-tudo');
buttonReset.addEventListener('click', () => {
  taskList.innerHTML = '';
  localStorage.clear();
});

buttonFinalizados.addEventListener('click', () => {
  const allFinalizados = document.querySelectorAll('.completed');
  for (let index = 0; index < allFinalizados.length; index += 1) {
    allFinalizados[index].remove();
  }
});

buttonSelecionado.addEventListener('click', () => {
  const selectedItem = document.querySelector('.selected');
  if (selectedItem) {
    selectedItem.remove();
  }
});

buttonCima.addEventListener('click', () => {
  const selected = document.querySelector('.selected');
  if (selected && selected.previousElementSibling) {
    taskList.insertBefore(selected, selected.previousElementSibling);
  }
});

const insertAfter = (newNode, existingNode) => {
  if (existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
  }
};
// A lógica dentro da função insertAfter foi tirada do seguinte site:
// https://www.javascripttutorial.net/javascript-dom/javascript-insertafter/

// A função insertBefore foi retirada do seguinte site:
// https://pt.stackoverflow.com/questions/150305/como-mudar-a-posi%C3%A7%C3%A3o-de-um-elemento-html-com-javascript

buttonBaixo.addEventListener('click', () => {
  const selected = document.querySelector('.selected');
  if (selected) {
    insertAfter(selected, selected.nextElementSibling);
  }
});

buttonSaveList.addEventListener('click', () => {
  const allItemsCreated = document.querySelectorAll('.created');
  for (let index = 0; index < allItemsCreated.length; index += 1) {
    if (allItemsCreated[index].className.includes('completed')) {
      localStorage.setItem(index, `]${allItemsCreated[index].innerHTML}`);
    } else { localStorage.setItem(index, allItemsCreated[index].innerHTML); }
  }
});

function createNewItemFromLocalStorage(localStorageParam) {
  let localStorageParamFixed = localStorageParam;
  const newTask = document.createElement('li');
  if (localStorageParam.substr(0, 1) === ']') {
    localStorageParamFixed = localStorageParam.slice(1);
    newTask.className = 'completed ';
  }
  newTask.innerHTML = localStorageParamFixed;
  taskList.appendChild(newTask);
  newTask.className += 'created';
  newTask.addEventListener('click', corFundo);
  newTask.addEventListener('dblclick', riskItemOrNot);
  textoTarefa.value = '';
}

function gettingItemOnInit() {
  for (let index = 0; index < localStorage.length; index += 1) {
    if (localStorage.getItem(index).substr(0, 1) === ']') {
      createNewItemFromLocalStorage(localStorage.getItem(index));
    } else { createNewItemFromLocalStorage(localStorage.getItem(index)); }
  }
  return null;
}

window.onload = gettingItemOnInit();
