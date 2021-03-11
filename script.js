function criaItemLista() {
  const texto = document.querySelector('#texto-tarefa');
  const lista = document.querySelector('#lista-tarefas');
  const criaItem = document.createElement('li');
  criaItem.innerText = texto.value;
  criaItem.classList.add('itens');
  lista.appendChild(criaItem);
  texto.value = '';
}
const botaoAdicionar = document.querySelector('#criar-tarefa');
botaoAdicionar.addEventListener('click', criaItemLista);

function removeSelected(elemento) {
  const tagItem = elemento;
  for (let index = 0; index < elemento.length; index += 1) {
    tagItem[index].style.backgroundColor = 'white';
    tagItem[index].classList.remove('selected');
  }
}
const lista = document.getElementById('lista-tarefas');
lista.addEventListener('click', (event) => {
  const itens = document.querySelector('ol').children;
  removeSelected(itens);
  const itemSelecionado = event.target;
  itemSelecionado.style.backgroundColor = 'rgb(128, 128, 128)';
  itemSelecionado.classList.add('selected');
});

lista.addEventListener('dblclick', (event) => {
  const itemSelecionado = event.target;
  if (itemSelecionado.classList.contains('completed')) {
    itemSelecionado.classList.remove('completed');
  } else {
    itemSelecionado.classList.add('completed');
  }
});

function removeTodaLista() {
  const listaPai = document.querySelector('ol');
  const tarefas = document.querySelectorAll('li');
  for (let index = 0; index < tarefas.length; index += 1) {
    listaPai.removeChild(tarefas[index]);
  }
}
const botaoApagaTudo = document.querySelector('#apaga-tudo');
botaoApagaTudo.addEventListener('click', removeTodaLista);

function removeFinalizados() {
  const listaPai = document.querySelector('ol');
  const tarefasFinalizadas = document.querySelectorAll('.completed');
  for (let index = 0; index < tarefasFinalizadas.length; index += 1) {
    listaPai.removeChild(tarefasFinalizadas[index]);
  }
}
const botaoApagaFinalizados = document.querySelector('#remover-finalizados');
botaoApagaFinalizados.addEventListener('click', removeFinalizados);

const salvarLista = document.querySelector('#lista-tarefas');
salvarLista.innerHTML = localStorage.getItem('list');

function salvarTarefa() {
  localStorage.setItem('list', salvarLista.innerHTML);
}
// Consegui a solução com a ajuda do PR da Thais Quintela Turma08 Trybe;
const salvar = document.querySelector('#salvar-tarefas');
salvar.addEventListener('click', salvarTarefa);

function moverCima() {
  let posicao;
  const itens = document.querySelectorAll('.itens');
  for (let index = 0; index < itens.length; index += 1) {
    if (itens[index].classList.contains('selected')) {
      posicao = index;
    }
  }
  if (posicao > 0) {
    itens[posicao].parentElement.insertBefore(itens[posicao], itens[posicao - 1]);
  }
  // Consegui a solução com a ajuda do PR da Thais Quintela Turma08 Trybe;
}
const btnMoverCima = document.querySelector('#mover-cima');
btnMoverCima.addEventListener('click', moverCima);

function moverBaixo() {
  let posicao;
  const itens = document.querySelectorAll('.itens');
  for (let index = 0; index < itens.length; index += 1) {
    if (itens[index].classList.contains('selected')) {
      posicao = index + 1;
    }
  }
  if (posicao < itens.length) {
    itens[posicao].parentElement.insertBefore(itens[posicao], itens[posicao - 1]);
  }
}
const btnMoverBaixo = document.querySelector('#mover-baixo');
btnMoverBaixo.addEventListener('click', moverBaixo);

function removerSelecionado() {
  const listaItens = document.querySelector('ol');
  const selecionado = document.querySelectorAll('.selected');

  listaItens.removeChild(selecionado[0]);
}
const btnRemoveSelecionado = document.querySelector('#remover-selecionado');
btnRemoveSelecionado.addEventListener('click', removerSelecionado);
