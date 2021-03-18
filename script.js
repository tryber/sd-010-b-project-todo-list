const header = document.querySelector('#titulo');
const title = document.createElement('h1');
title.innerText = 'Minha Lista de Tarefas';
header.appendChild(title);
const p = document.querySelector('#funcionamento');
p.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
const btnCreateTask = document.querySelector('#criar-tarefa');
const catchText = document.querySelector('#texto-tarefa');
const catchList = document.querySelector('#lista-tarefas');
const btnClear = document.querySelector('#apaga-tudo');
const btnClearMarked = document.querySelector('#remover-finalizados');
const btnSaveTask = document.querySelector('#salvar-tarefas');
const btnEraserSelected = document.querySelector('#remover-selecionado');
catchText.focus();

function click() {
  if (catchText.value !== '') {
    const list = document.createElement('li');
    list.className = 'listas';
    list.innerText = catchText.value;
    catchList.appendChild(list);
    catchText.value = '';
    catchText.focus();
  } else {
    alert('Digite um item');
    catchText.focus();
  }
}

function keyEnter(event) {
  const key = event.keyCode;
  if (key === 13) {
    click();
  }
}

catchText.addEventListener('keydown', keyEnter);
btnCreateTask.addEventListener('click', click);

const selectList = catchList.children;

function selectedList(e) {
  for (let index = 0; index < selectList.length; index += 1) {
    if (selectList[index].classList.contains('selected')) {
      selectList[index].classList.remove('selected');
    }
    e.target.classList.add('selected');
  }
}

catchList.addEventListener('click', selectedList);

function markList(e) {
  e.target.classList.toggle('completed');
}

catchList.addEventListener('dblclick', markList);

function clearList() {
  catchList.innerHTML = '';
}

btnClear.addEventListener('click', clearList);

function eraserMarked() {
  for (let i = 0; i < selectList.length; i += 1) {
    const elemento = document.querySelector('.completed');
    elemento.parentNode.removeChild(elemento);
  }
}

btnClearMarked.addEventListener('click', eraserMarked);

function saveTask() {
  localStorage.setItem('task', catchList.innerHTML);
}

btnSaveTask.addEventListener('click', saveTask);

function catchTask() {
  const task = localStorage.getItem('task');
  document.querySelector('#lista-tarefas').innerHTML = task;
}
catchTask();

function eraserSelected() {
  for (let i = 0; i < selectList.length; i += 1) {
    const elemento = document.querySelector('.selected');
    elemento.parentNode.removeChild(elemento);
  }
}

btnEraserSelected.addEventListener('click', eraserSelected);
