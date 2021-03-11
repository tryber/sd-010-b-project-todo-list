document.getElementById('criar-tarefa').addEventListener('click', inserirTarefa);

function inserirTarefa() {
  let listaOrde = document.getElementById("lista-tarefas");
  let itemNovo = document.createElement("li")
  itemNovo.innerHTML = document.getElementById('texto-tarefa').value;
  listaOrde.appendChild(itemNovo).classList.add('itens');
  document.getElementById('texto-tarefa').value = "";
}

// site que me ajudou https://pt.stackoverflow.com/questions/375441/selecionar-um-select-pelo-valor-digitado-no-input

let cinza = document.getElementById('lista-tarefas');
cinza.addEventListener('click', function (event) {
  let cinza2 = document.getElementsByClassName('itens');
  for (let index = 0; index < cinza2.length; index += 1) {
    document.getElementsByClassName('itens')[index].classList.remove('selected');
    event.target.classList.add('selected');
  }
})

let cinza3 = document.getElementById('lista-tarefas');
cinza3.addEventListener('dblclick', function (event) {

  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
})

document.getElementById('apaga-tudo').addEventListener('click', apagar);

function apagar() {
  let listaOrde = document.getElementById("lista-tarefas");
  while (listaOrde.firstChild) {
    listaOrde.removeChild(listaOrde.firstChild);
  }
}
// https://developer.mozilla.org/pt-BR/docs/Web/API/Node/removeChild me ajudou no apagar tudo
document.getElementById('remover-finalizados').addEventListener('click', apagarSelecionado);

function apagarSelecionado() {
  let listaOrde = document.getElementById("lista-tarefas");
  let listona = document.querySelectorAll('.completed');
  for (let key = 0; key < listona.length; key += 1) {
    if (listona[key].classList.contains('completed')) {
      listaOrde.removeChild(listona[key]);
    }
  }
}
