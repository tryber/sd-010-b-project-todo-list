const dadElement = document.body;
const fChild = document.createElement('section');
dadElement.append(fChild);

// Criando a tag HEADER com o conteudo de H1 com o titulo
const header = document.createElement('header');
fChild.append(header);
const title = document.createElement('h1');
title.id = 'title';
title.innerHTML = 'Minha Lista de Tarefas';

header.append(title);

// Criando uma paragrafo com descrição e id 'funcionamento'
const textSection = document.createElement('p');
textSection.id = 'funcionamento';
textSection.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';
fChild.append(textSection);

// Criando um input
const inputText = document.createElement('input');
inputText.id = 'texto-tarefa';
fChild.appendChild(inputText);

// Criando lista ordenada
const listOrder = document.createElement('ol');
listOrder.id = 'lista-tarefas';
fChild.appendChild(listOrder);

//
function liCatcher(element, event) {
  const eventClick = event;
  const selected = document.querySelector(`.${eventClick}`);
  if (selected !== null) {
    selected.classList.remove(eventClick);
  }
  element.target.classList.add(event);
}

//
function assignment() {
  const listItem = document.createElement('li');
  listItem.innerText = inputText.value;
  listOrder.appendChild(listItem);
  listItem.className = 'item';
  inputText.value = '';
  listItem.addEventListener('click', (element) => {
    liCatcher(element, 'selected');
  });
  listItem.addEventListener('dblclick', (element) => {
    element.target.classList.toggle('completed');
  });
}

const bt1 = document.createElement('button');
bt1.id = 'criar-tarefa';
bt1.innerText = 'add';
bt1.addEventListener('click', assignment);
fChild.insertBefore(bt1, listOrder);

const img = document.createElement('img');
img.setAttribute('src', 'img/img.png');
fChild.append(img);

const btnDirection = document.createElement('section');
btnDirection.classList = 'btn-direction';
const buttons = document.createElement('section');
buttons.classList = 'buttons-header';
const bt2 = document.createElement('button');
bt2.id = 'mover-cima';
bt2.innerHTML = 'Mover(up)';
const bt3 = document.createElement('button');
bt3.id = 'mover-baixo';
bt3.innerHTML = 'Mover(down)';
const bt4 = document.createElement('button');
bt4.id = 'remover-selecionado';
bt4.innerHTML = 'Remove(selected)';

const bt5 = document.createElement('button');
bt5.id = 'remover-completo';
bt5.innerHTML = 'Remove(completed)';

const bt6 = document.createElement('button');
bt6.id = 'Remove(all)';
bt6.innerHTML = 'Remove(all)';

const bt7 = document.createElement('button');
bt7.id = 'save';
bt7.innerHTML = 'Save';

btnDirection.append(bt2);
btnDirection.append(bt3);
buttons.append(bt4);
buttons.append(bt5);
buttons.append(bt6);
buttons.append(bt7);

fChild.append(btnDirection);
fChild.append(buttons);

function moveUp() {
  const selected = document.querySelector('.selected');
  if (selected && selected.previousSibling) {
    const upper = selected.previousSibling;
    listOrder.removeChild(upper);
    selected.insertAdjacentElement('afterend', upper);
  }
}

bt2.addEventListener('click', moveUp);

function moveDown() {
  const selected = document.querySelector('.selected');
  if (selected && selected.nextElementSibling) {
    const lower = selected.nextElementSibling;
    listOrder.removeChild(lower);
    selected.insertAdjacentElement('beforebegin', lower);
  }
}

bt3.addEventListener('click', moveDown);

// const selectList = listOrder.children;

function eraserSelected() {
  const elemento = document.querySelector('.selected');
  elemento.parentNode.removeChild(elemento);
}

bt4.addEventListener('click', eraserSelected);

function eraserMarked() {
  const elemento = document.querySelector('.completed');
  elemento.parentNode.removeChild(elemento);
}

bt5.addEventListener('click', eraserMarked);

function saveTask() {
  localStorage.setItem('task', listOrder.innerHTML);
}

function clearList() {
  listOrder.innerHTML = '';
}

bt6.addEventListener('click', clearList);

bt7.addEventListener('click', saveTask);

function catchTask() {
  const task = localStorage.getItem('task');
  document.querySelector('#lista-tarefas').innerHTML = task;
}
catchTask();
