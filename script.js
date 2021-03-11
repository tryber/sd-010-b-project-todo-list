const criarBtnAdicionar = document.createElement('button');
const criarBtnDelete = document.createElement('button');
const criarBtnCompleto = document.createElement('button');
const criarBtnSalva = document.createElement('button');
const criarBtnUp = document.createElement('button');
const criarBtnDown = document.createElement('button');
const criarBtnRemove = document.createElement('button');
const txtTarefa = document.querySelector('#texto-tarefa');
const ordLista = document.querySelector('#lista-tarefas');
const sectionInput = document.querySelector('#section-input');
const getItem = document.getElementsByTagName('li');
const sectionBtn = document.querySelector('#section-btn');

// função cria botao adicionar os itens na lista
function criarBotaoAdd() {
  criarBtnAdicionar.id = 'criar-tarefa';
  criarBtnAdicionar.className = 'btnAdd';
  criarBtnAdicionar.innerText = 'Adicionar';
  sectionInput.appendChild(criarBtnAdicionar);
}

// função cria botao de limpar
function criarBotaoDelete() {
  criarBtnDelete.id = 'apaga-tudo';
  criarBtnDelete.className = 'btnDel';
  criarBtnDelete.innerText = 'Limpar Lista';
  sectionBtn.appendChild(criarBtnDelete);
}

// função cria botao de limpar completos
function criarBotaoCompleto() {
  criarBtnCompleto.id = 'remover-finalizados';
  criarBtnCompleto.className = 'btnCmp';
  criarBtnCompleto.innerText = 'Remover Completos';
  sectionBtn.appendChild(criarBtnCompleto);
}

// função cria botao de salvar
function criarBotaoSalvar() {
  criarBtnSalva.id = 'salvar-tarefas';
  criarBtnSalva.className = 'btnSav';
  criarBtnSalva.innerText = 'Salvar Tarefas';
  sectionBtn.appendChild(criarBtnSalva);
}

// função cria botao up
function criarBotaoUp() {
  criarBtnUp.id = 'mover-cima';
  criarBtnUp.className = 'btnUp';
  criarBtnUp.innerText = '▲';
  sectionBtn.appendChild(criarBtnUp);
}

// função cria botao down
function criarBotaoDown() {
  criarBtnDown.id = 'mover-baixo';
  criarBtnDown.className = 'btnDown';
  criarBtnDown.innerText = '▼';
  sectionBtn.appendChild(criarBtnDown);
}

// função cria botao remove
function criarBotaoRemove() {
  criarBtnRemove.id = 'remover-selecionado';
  criarBtnRemove.className = 'btnRmv';
  criarBtnRemove.innerText = '✘';
  sectionBtn.appendChild(criarBtnRemove);
}

// função que cria os itens na lista
function criarTarefa() {
  const criarLi = document.createElement('li');
  criarLi.innerText = txtTarefa.value;
  ordLista.appendChild(criarLi);
  txtTarefa.value = '';
}

// função para pintar o background
function pintarLinha() {
  for (let index = 0; index < getItem.length; index += 1) {
    if (getItem[index].classList.contains('selected')) {
      getItem[index].style.backgroundColor = 'rgb(128, 128, 128)';
    } else {
      getItem[index].style.backgroundColor = '';
    }
  }
}

// função para selecionar um item
function selecionaLinha(event) {
  const unit = event.target;
  const seletor = document.querySelector('.selected');
  if (seletor) {
    seletor.classList.remove('selected');
    unit.classList.add('selected');
  } else {
    unit.classList.add('selected');
  }
  pintarLinha();
}

// riscando
function riscar() {
  for (let index = 0; index < getItem.length; index += 1) {
    if (getItem[index].classList.contains('completed')) {
      getItem[index].style.textDecoration = 'line-through solid rgb(0, 0, 0)';
    }
  }
}

// função para riscar um item
function itemCompleto(evento) {
  const unid = evento.target;
  if (unid.classList.contains('completed')) {
    unid.className = '';
    unid.style.textDecoration = '';
  } else {
    unid.className += ' completed';
  }
  riscar();
}

// função limpa lista
function limparLista(pai) {
  while (pai.firstChild) {
    pai.removeChild(pai.lastChild);
  }
}

// função limpa completos
function LimparCompletos() {
  const itensCompletos = document.getElementsByClassName('completed');
  for (let index = 0; index < itensCompletos.length; index = 0) {
    itensCompletos[0].parentNode.removeChild(itensCompletos[0]);
  }
}

// função salva a lista no storage
function salvaTarefa() {
  localStorage.setItem('listaSalva', ordLista.innerHTML);
}

//  função de mover
function moveUp() {
  const seletor = document.querySelector('.selected');
  if (seletor !== null && seletor.previousSibling !== null) {
    ordLista.insertBefore(seletor, seletor.previousSibling);
  }
}

function moveDown() {
  const seletor = document.querySelector('.selected');
  if (seletor !== null && seletor.nextSibling !== null) {
    ordLista.insertBefore(seletor, seletor.nextSibling.nextSibling);
  }
}

// função de deletar 1 unico item
function removeUnico() {
  const seletor = document.querySelector('.selected');
  ordLista.removeChild(seletor);
}

// EVENTOS
// evento ao clicar no botao "adicionar" insere um item na lista.
criarBtnAdicionar.addEventListener('click', criarTarefa);

// evento ao clicas 2 vezes sublinha o item
ordLista.addEventListener('dblclick', itemCompleto);

// evento clicar 1 vez pinta
ordLista.addEventListener('click', selecionaLinha);

// evento do botao limpar
criarBtnDelete.addEventListener('click', () => limparLista(ordLista));

// evento do botao remover completos
criarBtnCompleto.addEventListener('click', LimparCompletos);

// evento do botao salvar tarefas
criarBtnSalva.addEventListener('click', salvaTarefa);

// evento do botao up down
criarBtnUp.addEventListener('click', moveUp);

criarBtnDown.addEventListener('click', moveDown);

// evento do botao remover
criarBtnRemove.addEventListener('click', removeUnico);

window.onload = function () {
  criarBotaoAdd();
  criarBotaoRemove();
  criarBotaoUp();
  criarBotaoDown();
  criarBotaoDelete();
  criarBotaoCompleto();
  criarBotaoSalvar();

  ordLista.innerHTML = localStorage.getItem('listaSalva');
};
