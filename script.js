const adicionarTarefa = document.getElementById('criar-tarefa'); // botão para adicionar tarefa
const tagOL = document.getElementById('lista-tarefas');
const apagarBTT = document.getElementById('apaga-tudo');
let maxLinhas = document.getElementsByTagName('li');
let textoASerAdicionado = document.getElementById('texto-tarefa'); // texto que vai ser adicionado

// cria um LI dentro do OL e apaga oq tinha dentro do texto 
function criarLinha() {
  const tagLinhaLista = document.createElement('li');
  tagLinhaLista.innerText = textoASerAdicionado.value;
  tagOL.appendChild(tagLinhaLista);
  textoASerAdicionado.value = '';
}
// pinta a linha clicada e remove cor da anteriormente pintada
function pintaLinha() {
  tagOL.addEventListener('click', (event) => {
    const selecionado = document.querySelector('.fundo-colorido');
    if (selecionado != null) {
      document.querySelector('.fundo-colorido').classList.remove('fundo-colorido');
    }
    event.target.classList.add('fundo-colorido');
  });
}
pintaLinha();
// adiciona linha quando da doble click
function riscaLinha() {
  tagOL.addEventListener('dblclick', (event) => {
    event.target.classList.toggle('completed');
  });
}
riscaLinha();
// apaga todos os LI que existem dentro de tagOL
function apagaLista() {
  apagarBTT.addEventListener('click', () => {
    tagOL.innerHTML = '';
  });
}
apagaLista();

/*
function riscarLinha() {
  paiLista.addEventListener('dblclick', function (event) {
    event.target.classList.toggle('completed');
  });
*/
adicionarTarefa.addEventListener('click', criarLinha);
algumavariavel.addEventListener('dblclick', riscaLinha);