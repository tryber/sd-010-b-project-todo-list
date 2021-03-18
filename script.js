function clearList() {
  document.getElementById('lista-tarefas').innerHTML = '';
}

function insertText() {
  arrayListItens.push(document.querySelector('#texto-tarefa').value);
}

function createElementList() {
  for (
    let indexCreate = 0;
    indexCreate < arrayListItens.length;
    indexCreate += 1
  ) {
    const textItem = arrayListItens[indexCreate];
    const newLI = document.createElement('li');
    newLI.classList.add('li-tarefas');
    newLI.innerText = textItem;
    ordenedList.appendChild(newLI);
  }
}

function switchBG() {
  const bgItens = document.querySelectorAll('.li-tarefas');

  for (let indexBGItens = 0; indexBGItens < bgItens.length; indexBGItens += 1) {
    bgItens[indexBGItens].addEventListener('click', function () {
      bgItens[indexBGItens].style.background = 'rgb(128, 128, 128)';
      if (aux < 0) {
        aux = indexBGItens;
      } else {
        bgItens[aux].style.background = '';
        aux = indexBGItens;
      }
    });
  }
}

const btnAdd = document.getElementById('criar-tarefa');
const btnDeleteAll = document.getElementById('apaga-tudo');
const arrayListItens = [];
const ordenedList = document.getElementById('lista-tarefas');
let aux = -1;

btnAdd.addEventListener('click', function () {
  clearList();
  insertText();
  createElementList();

  document.querySelector('#texto-tarefa').value = '';

  switchBG();
  btnDeleteAll.addEventListener('click', function () {
    clearList();
    arrayListItens.length = 0;
  });
});
