//Algumas das funções geradas em estudo em grupo com os colegas Trybe Nikolas Silva, 
// Aline Barbosa com o apoio de colega Trybe Lucas Martins
//Pesquisas realizadas nos sites Stackoverflow, Diego Macedo, Linha de Comando,
// Developer Mozilla

let addTask = document.getElementById('criar-tarefa');

addTask.addEventListener('click', function () {
  let addItenList = document.createElement('li');
  let inputText = document.getElementById('texto-tarefa').value
  addItenList.innerText = inputText
  document.getElementById('lista-tarefas').appendChild(addItenList)
  document.getElementById('texto-tarefa').value = ""
})

let liColor = document.getElementById('lista-tarefas');

liColor.addEventListener('click', function (event) {
  let itemColorized = document.querySelector('.itemSelected');

  if (itemColorized != null) {
    itemColorized.classList.remove('itemSelected');
  }

  event.target.classList.add('itemSelected');
})

liColor.addEventListener('dblclick', function (event) {
  event.target.classList.toggle('completed');
})

let clearList = document.getElementById('apaga-tudo');

clearList.addEventListener('click', function () {

  let lista = document.getElementById('lista-tarefas');

  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }

})

let clearDone = document.getElementById('remover-finalizados');

clearDone.addEventListener('click', function () {

  let done = document.getElementsByClassName('completed');
  for (let index = done.length - 1; index >= 0; index--) {
    done[index].remove();
  }
}) 