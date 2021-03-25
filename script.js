function adicionadoLista () {
  let butao = document.querySelector('#criar-tarefa');
  let lista = document.querySelector('#lista-tarefas');
  let conteudoItens = document.querySelector('#texto-tarefa');
  butao.addEventListener('click', function () {
    let itemLista = document.createElement('li');
    lista.appendChild(itemLista).innerHTML = conteudoItens.value;
    conteudoItens.value = '';
  });
}
adicionadoLista();

function listaColorida () {
  let corLista = document.querySelector('#lista-tarefas');
  corLista.addEventListener("click", function (event) {
    let buscaCor = document.querySelector('.cor');

    if (buscaCor) {
      buscaCor.classList.remove('cor');
      event.target.classList.add('cor');
    } else {
      event.target.classList.add('cor');
    }
  })
}
listaColorida();

const riscaLista = () => {
  let corLista = document.querySelector('#lista-tarefas');
  corLista.addEventListener('dblclick', (event) => {
    event.target.classList.toggle('completed');
    
  })
}
riscaLista();

const apagaLista = () => {
  let apagar = document.querySelector('#apaga-tudo');
  apagar.addEventListener('click', (event) => {
   let filhos = document.querySelectorAll('#lista-tarefas li');
   let pai = document.querySelector('#lista-tarefas');
   for (let i = 0; i < filhos.length; i += 1) {
      pai.removeChild(filhos[i])
  }
 });
}
apagaLista()

const apagaRiscadoLista = () => {
  let apagar = document.querySelector('#remover-finalizados');
  apagar.addEventListener('click', (event) => {
    let filhos = document.querySelectorAll('#lista-tarefas .completed');
    let pai = document.querySelector('#lista-tarefas');
    for (let i = 0; i < filhos.length; i += 1) {
    pai.removeChild(filhos[i]);
  }
  })
}
apagaRiscadoLista();

const listaTarefas = document.querySelector('#lista-tarefas')
const botaoSalvar = document.querySelector('#salvar-tarefas');

function salvarDados() {
  const itensSalvar = listaTarefas.innerHTML;
  localStorage.setItem('Salvo', itensSalvar);
}

function recuperaDados() {
  const getSave = localStorage.getItem('Salvo');
  listaTarefas.innerHTML = getSave;
}

botaoSalvar.addEventListener('click', salvarDados);

recuperaDados();

function moveCima() {
  const botaoCima = document.querySelector('#mover-cima');
  botaoCima.addEventListener('click', function () {
    const selecionar = document.querySelector('.cor');
    if (selecionar && selecionar.previousElementSibling) {
      selecionar.parentNode.insertBefore(selecionar, selecionar.previousElementSibling);
    }
  });
}
moveCima();

function moveBaixo() {
  const botaoBaixo = document.querySelector('#mover-baixo');
  botaoBaixo.addEventListener('click', function () {
    const selecionar = document.querySelector('.cor');
    if (selecionar && selecionar.nextElementSibling) {
      selecionar.parentNode.insertBefore(selecionar.nextElementSibling, selecionar);
    }
  });
}
moveBaixo();