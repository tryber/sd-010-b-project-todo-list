const adicionarTarefa = document.getElementById('criar-tarefa'); // botão para adicionar tarefa
const tagOL = document.getElementById('lista-tarefas');
const apagarTudoBTT = document.getElementById('apaga-tudo');
const apagarTudoRiscado = document.getElementById('remover-finalizados');
const maxLinhas = document.getElementsByTagName('li');
const textoASerAdicionado = document.getElementById('texto-tarefa'); // texto que vai ser adicionado
const savePoint = document.getElementById('salvar-tarefas');
const apagaSelecionado = document.getElementById('remover-selecionado');

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
  apagarTudoBTT.addEventListener('click', () => {
    tagOL.innerHTML = '';
  });
}
apagaLista();
// apaga todos riscados
function apagaRiscados() {
  apagarTudoRiscado.addEventListener('click', () => {
    const completos = document.querySelectorAll('.completed');
    for (let i = 0; i < maxLinhas.length; i += 1) {
      tagOL.removeChild(completos[i]);
    }
  });
}
apagaRiscados();
// salvar lista
function salvamento() {
  const salvarLI = tagOL.innerHTML;
  localStorage.listaSalva = salvarLI;
  alert('Viwer: Manda um salve invertido \n Eu: evlas');
}
// carega lista
function carregarListaSalva() {
  if (localStorage.listaSalva) {
    tagOL.innerHTML = localStorage.listaSalva;
  }
}
carregarListaSalva();
// apaga os selecionados
function apagaSelecionados(event) {
  const selecionado = document.querySelector('.fundo-colorido');
  for (let i = 0; i < maxLinhas.length; i += 1) {
    tagOL.removeChild(maxLinhas[i]);
    if (selecionado != null) {
      document.querySelector('.fundo-colorido').classList.remove('fundo-colorido');
    }
  }
}

adicionarTarefa.addEventListener('click', criarLinha);
savePoint.addEventListener('click', salvamento);
apagaSelecionado.addEventListener('click', apagaSelecionados)