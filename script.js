const lista = document.getElementById('lista-tarefas');

function pegaValoresSalvos() {
  if (localStorage.getItem('lista') !== '') {
    lista.innerHTML = (localStorage.getItem('lista'));
  }
}

window.onload = pegaValoresSalvos;

function limparInput() {
  document.getElementById('texto-tarefa').value = '';
}

function adicionaTarefa() {
  const tarefa = document.getElementById('texto-tarefa').value;
  if (tarefa !== '') {
    const criarLi = document.createElement('li');
    lista.appendChild(criarLi).innerText = tarefa;
    limparInput();
  }
}

function adicionaEventoBotao() {
  const botao = document.getElementById('criar-tarefa');
  botao.addEventListener('click', adicionaTarefa);
}

adicionaEventoBotao();

function colocaFundoCinza(event) {
  const evento = event;
  const tarefaJaSelecionada = document.querySelector('.selecionado');
  if (tarefaJaSelecionada !== null) {
    tarefaJaSelecionada.classList.remove('selecionado');
  }
  evento.target.classList.add('selecionado');
}

lista.addEventListener('click', colocaFundoCinza);

function colocaTiraRisco(event) {
  const evento = event;
  if ((evento.target.classList.value).includes('completed')) {
    evento.target.classList.remove('completed');
  } else {
    evento.target.classList.add('completed');
  }
}

lista.addEventListener('dblclick', colocaTiraRisco);

function esvaziaLista() {
  while (lista.firstChild) { // esvazia a tabela, tirado do link https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
    lista.removeChild(lista.lastChild);
    localStorage.clear();
  }
}

const botaoLimpa = document.getElementById('apaga-tudo');
botaoLimpa.addEventListener('click', esvaziaLista);

function apagaFinalizados() {
  const finalizados = document.getElementsByClassName('completed');
  while (finalizados[0]) { // https://stackoverflow.com/questions/10842471/how-to-remove-all-elements-of-a-certain-class-from-the-dom
    finalizados[0].parentNode.removeChild(finalizados[0]);
  }
}

const botaoLimpaFinalizados = document.getElementById('remover-finalizados');
botaoLimpaFinalizados.addEventListener('click', apagaFinalizados);

function salvarTarefas() {
  localStorage.setItem('lista', lista.innerHTML);
}

const botaoSalvaTarefas = document.getElementById('salvar-tarefas');
botaoSalvaTarefas.addEventListener('click', salvarTarefas);

function moverParaCima() {
  const listaArray = document.getElementsByTagName('li');
  for (let index = 0; index < listaArray.length; index += 1) {
    if ((index !== 0) && ((listaArray[index].classList.value).includes('selecionado'))) {
      const temp = listaArray[index].outerHTML;
      listaArray[index].outerHTML = listaArray[index - 1].outerHTML;
      listaArray[index - 1].outerHTML = temp;
    }
  }
}
const moverCima = document.getElementById('mover-cima');
moverCima.addEventListener('click', moverParaCima);

function moverParaBaixo() {
  const listaArray = document.getElementsByTagName('li');
  const t = listaArray.length;
  for (let index = t - 1; index >= 0; index -= 1) {
    if ((index !== (t - 1)) && ((listaArray[index].classList.value).includes('selecionado'))) {
      const temp = listaArray[index].outerHTML;
      listaArray[index].outerHTML = listaArray[index + 1].outerHTML;
      listaArray[index + 1].outerHTML = temp;
    }
  }
}
const moverBaixo = document.getElementById('mover-baixo');
moverBaixo.addEventListener('click', moverParaBaixo);

function removeSelecionado() {
  const selecionado = document.getElementsByClassName('selecionado');
  while (selecionado[0]) { // https://stackoverflow.com/questions/10842471/how-to-remove-all-elements-of-a-certain-class-from-the-dom
    selecionado[0].parentNode.removeChild(selecionado[0]);
  }
}

const botaoRemoveSelecionado = document.getElementById('remover-selecionado');
botaoRemoveSelecionado.addEventListener('click', removeSelecionado);
