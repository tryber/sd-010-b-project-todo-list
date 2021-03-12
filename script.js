const buttom = document.querySelector('#criar-tarefa');
const caixaTexto = document.querySelector('#texto-tarefa');
const lista = document.querySelector('#lista-tarefas');
const itensLista = lista.getElementsByTagName('li');

// Criando lista de tarefas e adicionando o valor do input
function listaDeTarefas() {
  const listItem = document.createElement('li');
  listItem.innerHTML = caixaTexto.value;
  lista.appendChild(listItem);
  caixaTexto.value = '';
}
buttom.addEventListener('click', listaDeTarefas);

// Colorindo background item selecionado
function coloreFundo() {
  lista.addEventListener('click', function (evento) { // adiciono o evento para o pai
    const selecionado = document.querySelector('.selected'); // pego o elem com a classe selected
    if (selecionado) { // se tiver selecionado
      selecionado.classList.remove('selected'); // removo a classe dele
    }
    evento.target.classList.add('selected'); // e adiciono a classe ao clicado
  });
}
coloreFundo();

// Tarefa completada
function tarefaCompleta() {
  lista.addEventListener('dblclick', function (evento) {
    evento.target.classList.toggle('completed'); // adiciona e remove a classe quando há o dblclick
  });
}
tarefaCompleta();

// Botao apaga tudo da lista
const botaoApagaTudo = document.querySelector('#apaga-tudo');

function apagaItensDaLista() {
  for (let i = itensLista.length - 1; i >= 0; i -= 1) { // parto do final da lista até zero removendo os elem
    itensLista[i].remove();
  }
}
botaoApagaTudo.addEventListener('click', apagaItensDaLista);

// Requisito 11 - Remove os itens com a classe completed
const botaoRemoveCompletos = document.querySelector('#remover-finalizados');

function removeCompletos() {
  for (let i = 0; i < itensLista.length; i += 1) {
    if (itensLista[i].classList.contains('completed')) {
      lista.removeChild(itensLista[i]); // Para conseguir remover todos usei a mesma ideia da Alessandra Resende
      i -= 1;
    }
  }
}
botaoRemoveCompletos.addEventListener('click', removeCompletos);

// Requisito 12 - Salvar tarefas

const botaoSalvaTarefa = document.querySelector('#salvar-tarefas');

function salvarValoresLista() {
  localStorage.setItem('listaDeTarefas', lista.innerHTML); // salvo os valores da lista(ol) no storage
}
botaoSalvaTarefa.addEventListener('click', salvarValoresLista);

// Pegar as tarefas salvas

function pegaValoresSalvos() {
  if (localStorage.getItem('listaDeTarefas') !== '') { // se a minha lista de tarefas não for vazia
    lista.innerHTML = (localStorage.getItem('listaDeTarefas')); // pego os valores dela
  }
}
window.onload = pegaValoresSalvos; // ao carregar a página chamo essa função

// Requisito 13 - mover para cima

function moverParaCima() {
  for (let i = 0; i < itensLista.length; i += 1) {
    if (itensLista[i].classList.contains('selected') && i > 0) { // verifico se o li na posição contem a classe e i for > 0
      itensLista[i].parentNode.insertBefore(itensLista[i], itensLista[i - 1]); // list item na posiçao filho do pai, vai inserir li
    } // na posiçao li - 1
  }
}
const botaoCima = document.querySelector('#mover-cima');
botaoCima.addEventListener('click', moverParaCima);

// Requisito 13 - mover para baixo

function moverParaBaixo() {
  for (let i = itensLista.length - 1; i >= 0; i -= 1) { 
    if (itensLista[i].classList.contains('selected') && i < itensLista.length - 1) {
      itensLista[i].parentNode.insertBefore(itensLista[i].nextSibling, itensLista[i]);
    }
  }
}
const botaoBaixo = document.querySelector('#mover-baixo');
botaoBaixo.addEventListener('click', moverParaBaixo);

// Requisito 14 - Botão remover um item

function removeItem() {
  const selecionado = document.querySelector('.selected');
  selecionado.parentNode.removeChild(selecionado);
}
const botaoRemove = document.querySelector('#remover-selecionado');
botaoRemove.addEventListener('click', removeItem);
