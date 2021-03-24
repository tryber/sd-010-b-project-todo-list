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