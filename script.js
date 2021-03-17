const botao = document.querySelector('#criar-tarefa');
const listagem = document.querySelector('#lista-tarefas');
const texto = document.querySelector('#texto-tarefa');
const limpa = document.querySelector('#apaga-tudo');
function clicar() {
  if (texto.value !== '') {
    const list = document.createElement('li');
    list.className = 'listas';
    list.textContent = texto.value;
    listagem.appendChild(list);
    texto.value = '';
    texto.focus();
  } else {
    alert('Digite um item');
    texto.focus();
  }
}

function entrada(event) {
  const key = event.keyCode;
  if (key === 13) {
    clicar();
  }
}

texto.addEventListener('keydown', entrada);
botao.addEventListener('click', clicar);

const selecionar = listagem.children;

function selecionando(e) {
  for (let index = 0; index < selecionar.length; index += 1) {
    if (selecionar[index].classList.contains('selected')) {
      selecionar[index].classList.remove('selected');
    }
    e.target.classList.add('selected');
  }
}
listagem.addEventListener('click', selecionando);

function limpar() {
  listagem.innerHTML = '';
}
limpa.addEventListener('click', limpar);
