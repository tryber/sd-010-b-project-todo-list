const buttonAdd = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
buttonAdd.addEventListener('click', function (evento) {
  evento.preventDefault();
  let tarefas = document.querySelector('#tarefas');
  let textUser = tarefas.texto.value;
  let listaLi = document.createElement('li');
  listaLi.textContent = textUser;
  listaTarefas.appendChild(listaLi);
  listaLi.className = ('listada');
  tarefas.reset();
})

const buttonSave = document.getElementById('salvar-tarefas');


let tarefas;
function saveTasks() {
  const listada = document.querySelectorAll('li');
  for (let index in listada) {
    if (listada.length > 0) {
      localStorage.tarefas = listaTarefas.innerHTML;
    }
  }
}

buttonSave.addEventListener('click', saveTasks);

function loadTasks() {

  listaTarefas.innerHTML = localStorage.getItem('tarefas');
};

// Recebi o auxilio do colega Diegho Moraes para o auxilio na elaboração e execução dos botões cima e baixo

const buttonUp = document.getElementById('mover-cima');

function moveUp(evento) {
  evento.preventDefault();
  const selector = document.querySelector('.graySelector');
  if (selector !== 0 && selector.previousSibling !== 0) {
    listaTarefas.insertBefore(selector, selector.previousSibling);
  }
}

buttonUp.addEventListener('click', moveUp);

const buttonDown = document.getElementById('mover-baixo')

function moveDown(evento) {
  evento.preventDefault();
  const selector = document.querySelector('.graySelector');
  if (selector !== 0 && selector.nextSibling !== 0) {
    listaTarefas.insertBefore(selector, selector.nextSibling.nextSibling);
  }
}
buttonDown.addEventListener('click', moveDown)
//verifiquei a escrita do Carlos Vieira - t10-B pra entender que a minha variavel listada deveria ser li e dentro da função
function choose(checked) {
  let listada = document.querySelectorAll('li');
  for (index = 0; index < listada.length; index += 1) {
    if (listada[index].classList.contains('listada')) {
      listada[index].classList.remove('graySelector');
    }
  }
  checked.target.classList.add('graySelector');
}

listaTarefas.addEventListener('click', choose);

function checked(riscado) {
  riscado.target.classList.toggle('completed');
}

listaTarefas.addEventListener('dblclick', checked)

const buttonRem = document.getElementById('apaga-tudo');

function eraseAll(evento) {
  evento.preventDefault();
  const apagaLista = document.querySelectorAll('li');
  for (let index = 0; index < apagaLista.length; index += 1) {
    apagaLista[index].remove();
  }
}
buttonRem.addEventListener('click', eraseAll);

const buttonRemSel = document.getElementById('remover-finalizados');

function eraseSel(evento) {
  evento.preventDefault();
  const apagaLista = document.querySelectorAll('.completed');
  for (let index = 0; index < apagaLista.length; index += 1) {
    apagaLista[index].remove();
  }
}
buttonRemSel.addEventListener('click', eraseSel);

const buttonGraySel = document.getElementById('remover-selecionado');

function eraseGraySel(evento) {
  evento.preventDefault();
  const apagaLista = document.querySelector('.graySelector');
  apagaLista.remove();
}
buttonGraySel.addEventListener('click', eraseGraySel);

window.onload = function () {
  loadTasks();
}