const idListaTarefas = 'lista-tarefas';
const addTaskBtn = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById(idListaTarefas);
const allClearBtn = document.getElementById('apaga-tudo');
const clearTaskBtn = document.getElementById('remover-finalizados');
const saveBtn = document.getElementById('salvar-tarefas');
const upBtn = document.getElementById('mover-cima');
const downBtn = document.getElementById('mover-baixo');

function createElement(tagName) {
  const element = document.createElement(tagName);
  return element;
}

function addTask() {
  const inputTask = document.getElementById('texto-tarefa').value;
  const liTask = createElement('li');
  liTask.innerText = inputTask;
  listaTarefas.appendChild(liTask);
  document.getElementById('texto-tarefa').value = '';
}

function setSelected(event) {
  const el = event.target;
  if (el.id === idListaTarefas) {
    event.preventDefault();
  } else {
    const arr = listaTarefas.childNodes;
    arr.forEach((e) => e.classList.remove('selected'));
    el.classList.add('selected');
  }
}

function setTaskDone(event) {
  const el = event.target;
  if (el.id === idListaTarefas) {
    event.preventDefault();
  } else {
    el.classList.toggle('completed');
  }
}

function setEmptyList() {
  while (listaTarefas.lastChild) {
    listaTarefas.removeChild(listaTarefas.lastChild);
  }
}

// COMO REMOVER ELEMENTOS POR CLASSE
// https://stackoverflow.com/questions/44984867/javascript-remove-elements-by-class-name/44984940
function clearTask() {
  const tasksDone = document.querySelectorAll('.completed');
  tasksDone.forEach((el) => el.remove());
}

// SOBRE JSON.stringfy()
// https://www.w3schools.com/js/js_json_stringify.asp
function save() {
  localStorage.clear();
  [...listaTarefas.children].map((el, index) => {
    const str = {
      class: el.className,
      text: el.innerText,
    };
    localStorage.setItem(`${[index]}`, JSON.stringify(str));
    return true;
  });
}

// SOBRE JSON.parse()
// https://www.w3schools.com/js/js_json_parse.asp
function loadList() {
  for (let i = 0; i < localStorage.length; i += 1) {
    const obj = JSON.parse(localStorage[i]);
    const li = createElement('li');
    li.className = obj.class;
    li.innerText = obj.text;
    listaTarefas.appendChild(li);
  }
}

// SOBRE CLONAR UM ELEMENTO HTML COM cloneNode()
// https://gomakethings.com/how-to-copy-or-clone-an-element-with-vanilla-js/#:~:text=Copying%20an%20element%20%23&text=Now%2C%20we%20can%20use%20the,in%20true%20as%20an%20argument.
function moveUp() {
  listaTarefas.childNodes.forEach((el) => {
    if (el.classList.contains('selected') && el !== listaTarefas.firstChild) {
      const selected = el;
      const clonePrevious = el.previousSibling.cloneNode(true);
      const previous = el.previousSibling;
      previous.innerText = selected.innerText;
      previous.className = selected.className;
      selected.innerText = clonePrevious.innerText;
      selected.className = clonePrevious.className;
    }
  });
}

function moveDown() {
  const el = document.querySelector('.selected');
  if (el && el !== listaTarefas.lastChild) {
    const selected = el;
    const next = el.nextSibling.cloneNode(true);
    el.nextSibling.innerText = selected.innerText;
    el.nextSibling.className = selected.className;
    el.innerText = next.innerText;
    el.className = next.className;
  }
}

function start() {
  addTaskBtn.addEventListener('click', addTask);
  listaTarefas.addEventListener('click', setSelected);
  listaTarefas.addEventListener('dblclick', setTaskDone);
  allClearBtn.addEventListener('click', setEmptyList);
  clearTaskBtn.addEventListener('click', clearTask);
  saveBtn.addEventListener('click', save);
  upBtn.addEventListener('click', moveUp);
  downBtn.addEventListener('click', moveDown);
}
window.onload = function init() {
  loadList();
  start();
};
