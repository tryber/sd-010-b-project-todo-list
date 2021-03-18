// pegando os elemento no DOM
const valueInput = document.getElementById('texto-tarefa');
const btnCriarTarefa = document.getElementById('criar-tarefa');
const olListaTarefas = document.getElementById('lista-tarefas');
const btnLimpar = document.getElementById('apaga-tudo');
const btnFinalizar = document.getElementById('remover-finalizados');
const btnSalvar = document.getElementById('salvar-tarefas');
const btnMoverCima = document.getElementById('mover-cima');
const btnMoverBaixo = document.getElementById('mover-baixo');
const btnRemover = document.getElementById('remover-selecionado');

// área das funções
function alteraFundoParaCinza(e) {
  const evento = e;
  const liSelecionado = document.querySelector('.selected');
  if (liSelecionado !== null) {
    liSelecionado.classList.remove('selected');
  }
  evento.target.classList.add('selected');
}

function addCompleted(parameter) {
  const addStyleCompleted = parameter;
  addStyleCompleted.classList.add('completed');
}

function remCompleted(parameter) {
  const remStyleCompleted = parameter;
  remStyleCompleted.classList.remove('completed');
}

function apagaLista() { // --> enquanto olListaTarefa tiver filhos do typo node, ele irá apagar
  while (olListaTarefas.hasChildNodes()) {
    olListaTarefas.removeChild(olListaTarefas.firstChild);
  }
}

function removerCompletos() {
  const li = document.querySelectorAll('.completed');
  for (let i = 0; i < li.length; i += 1) {
    li[i].remove();
  }
}
// função criada com a ajuda do Diegho Moraeas
function salvar() {
  const itensASalvar = olListaTarefas.innerHTML;
  localStorage.setItem('Salvo', itensASalvar);
}

function recuperaLista() {
  const pegaSalva = localStorage.getItem('Salvo');
  olListaTarefas.innerHTML = pegaSalva;
}

function moverParaCima() {
  const liTarefa = document.querySelectorAll('.tarefa');
  for (let index = 0; index < liTarefa.length; index += 1) {
    if (liTarefa[index].classList.contains('selected')
    && liTarefa[index].previousElementSibling !== null) {
      const itemSelecionado = liTarefa[index];
      olListaTarefas.insertBefore(itemSelecionado, liTarefa[index].previousSibling);
    }
  }
}

function moverParaBaixo() {
  const liTarefa = document.querySelectorAll('.tarefa');
  for (let index = 0; index < liTarefa.length; index += 1) {
    if (liTarefa[index].classList.contains('selected')
    && liTarefa[index].nextElementSibling !== null) {
      const itemSelecionado = liTarefa[index];
      olListaTarefas.insertBefore(itemSelecionado.nextSibling, liTarefa[index]);
    }
  }
}

function removerSelecionado() {
  const liSelecionado = document.querySelectorAll('.tarefa');
  for (let index = 0; index < liSelecionado.length; index += 1) {
    if (liSelecionado[index].classList.contains('selected')) {
      liSelecionado[index].remove();
    }
  }
}

// eventos de chamada das funções
btnCriarTarefa.addEventListener('click', () => {
  const liTarefa = document.createElement('li');
  liTarefa.className = 'tarefa list-group-item';
  olListaTarefas.appendChild(liTarefa).innerHTML = valueInput.value;

  valueInput.value = '';
});

olListaTarefas.addEventListener('click', alteraFundoParaCinza);

olListaTarefas.addEventListener('dblclick', (e) => {
  if (e.target.classList.contains('completed')) {
    remCompleted(e.target);
  } else {
    addCompleted(e.target);
  }
});

btnLimpar.addEventListener('click', apagaLista);

btnFinalizar.addEventListener('click', removerCompletos);

btnSalvar.addEventListener('click', salvar);

recuperaLista();

btnMoverCima.addEventListener('click', moverParaCima);

btnMoverBaixo.addEventListener('click', moverParaBaixo);

btnRemover.addEventListener('click', removerSelecionado);
