window.onload = function () {
  if ( localStorage.length !== 0){
    for (let index = 0; index < localStorage.length / 2; index += 1){
      const li = document.createElement('li');
      lista.appendChild(li);
      li.innerHTML = localStorage.getItem(index);
      li.className = localStorage.getItem('classe' + index);
    }
  }
}

const button = document.querySelector('#criar-tarefa');
const lista = document.querySelector('#lista-tarefas');
const tarefa = document.getElementsByTagName('li');

function criarLista() {
  const caixaTexto = document.querySelector('#texto-tarefa');
  button.addEventListener('click', function () {
    const li = document.createElement('li');
    lista.appendChild(li);
    li.innerHTML = caixaTexto.value;
    caixaTexto.value = null;
  });
}

criarLista();

function clicarLista() {
  lista.addEventListener('click', function (event) {
    for (let index = 0; index < tarefa.length; index += 1) {
      tarefa[index].classList.remove('listaClicada');
      event.target.classList.add('listaClicada');
    }
  });
}

clicarLista();

function tarefaCompleta() {
  lista.addEventListener('dblclick', function (event) {
    event.target.classList.toggle('completed');
  });
}

tarefaCompleta();

function apagaCompletada() {
  const buttonApaga = document.querySelector('#remover-finalizados');
  buttonApaga.addEventListener('click', function () {
    let list = document.querySelectorAll('li')
    for (let index of list) {
      if (index.className.includes('completed')) {
        lista.removeChild(index);
      }
    }
  });
}

apagaCompletada();

function apagaTarefas() {
  const buttonApagaTudo = document.querySelector('#apaga-tudo');
  buttonApagaTudo.addEventListener('click', function () {
    let lis = document.querySelectorAll('li');
    for (let li of lis) {
      lista.removeChild(li);
    } 
    localStorage.clear()
  });
}

apagaTarefas();

function salvaTarefa() {
  const buttonSalva = document.querySelector('#salvar-tarefas');
  buttonSalva.addEventListener('click', function (){
    for (let index = 0; index < tarefa.length; index += 1){
      localStorage.setItem(index, tarefa[index].innerHTML);
      localStorage.setItem('classe' + index, tarefa[index].className);
    }
  })
}

salvaTarefa();