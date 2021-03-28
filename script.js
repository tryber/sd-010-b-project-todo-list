const adicionarTarefa = document.getElementById('criar-tarefa'); // botão para adicionar tarefa
const tagOL = document.getElementById('lista-tarefas');
let textoASerAdicionado = document.getElementById('texto-tarefa'); // texto que vai ser adicionado

function criarLinha() {
  const tagLinhaLista = document.createElement('li');
  tagLinhaLista.innerText = textoASerAdicionado.value;
  tagOL.appendChild(tagLinhaLista);
  textoASerAdicionado.value = '';
}

/*
 const tagTH = document.createElement('th');
 tagTH.className = 'pixel';
 tagTR.appendChild(tagTH);
*/
adicionarTarefa.addEventListener('click', criarLinha);
