/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-param-reassign */
const lista = document.querySelector('#lista-tarefas');
function addItem() {
  const inputTexto = document.querySelector('#texto-tarefa').value;
  const newItem = document.createElement('li');
  newItem.innerText = inputTexto;
  lista.appendChild(newItem);
  document.getElementById('texto-tarefa').value = '';
}
const addButton = document.getElementById('criar-tarefa');
addButton.addEventListener('click', addItem);

function selectedItem(event) {
  for (let index = 0; index < lista.children.length; index += 1) {
    lista.children[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}
lista.addEventListener('click', selectedItem);

function clearAll() {
  lista.innerHTML = '';
}
const rmButton = document.getElementById('apaga-tudo');
rmButton.addEventListener('click', clearAll);

function finishedItem(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}
lista.addEventListener('dblclick', finishedItem);

function removeFinalized() {
  const itemList = document.querySelectorAll('li');
  for (let index = 0; index < itemList.length; index += 1) {
    if (itemList[index].classList.contains('completed')) {
      lista.removeChild(itemList[index]);
    }
  }
}
const rmFBtn = document.getElementById('remover-finalizados');
rmFBtn.addEventListener('click', removeFinalized);

const saveBtn = document.querySelector('#salvar-tarefas');
saveBtn.addEventListener('click', () => {
  localStorage.setItem('list', lista.innerHTML);
});
window.onload = () => {
  lista.innerHTML = localStorage.getItem('list');
};

function removeSelected() {
  const itemList = document.querySelectorAll('li');
  for (let index = 0; index < itemList.length; index += 1) {
    if (itemList[index].classList.contains('selected')) {
      lista.removeChild(itemList[index]);
    }
  }
}

function moveUp() {
  const selectedNode = document.querySelector('.selected');
  const getOl = document.querySelector('ol');
  const firstItemClass = getOl.firstChild.className;
  if (selectedNode && !firstItemClass) {
    const previousSibling = selectedNode.previousElementSibling;
    getOl.insertBefore(selectedNode, previousSibling);
  }
}

function moveDown() {
  const selectedNode = document.querySelector('.selected');
  const getOl = document.querySelector('ol');
  const lastItemClass = getOl.lastChild.className;
  if (selectedNode && !lastItemClass) {
    const nextSibling = selectedNode.nextElementSibling.nextElementSibling;
    getOl.insertBefore(selectedNode, nextSibling);
  }
}
const rmSBtn = document.getElementById('remover-selecionado');
rmSBtn.addEventListener('click', removeSelected);

const upBtn = document.getElementById('mover-cima');
upBtn.addEventListener('click', moveUp);

const downBtn = document.getElementById('mover-baixo');
downBtn.addEventListener('click', moveDown);
