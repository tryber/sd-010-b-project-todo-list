window.onload = function onloadPageFunction() {
  recoveryTasks();
}

document.getElementById('criar-tarefa').addEventListener('click', function createTask() {
  const tarefa = document.createElement('li')
  const listaTarefa = document.getElementById('lista-tarefas');
  tarefa.innerText = document.getElementById('texto-tarefa').value;
  tarefa.className = 'tasks';
  listaTarefa.appendChild(tarefa);
  document.getElementById('texto-tarefa').value = '';
})

document.getElementById('lista-tarefas').addEventListener('click', function selectTask(event) {
  for(let index = 0; index < document.getElementsByClassName('tasks').length; index += 1) {
    document.getElementsByClassName('tasks')[index].classList.remove('selected');
  }
  event.target.className += ' selected';
})

document.getElementById('lista-tarefas').addEventListener('dblclick', function completedTask(event) {
  if(event.target.className.includes('tasks')) {
    if(event.target.className.includes('completed')) {
    event.target.classList.remove('completed');
    }
    else {
    event.target.className += ' completed';
    }
  }
})

document.getElementById('apaga-tudo').addEventListener('click', function eraseList() {
  while(document.getElementById('lista-tarefas').firstElementChild) {
      document.getElementById('lista-tarefas').removeChild(document.getElementById('lista-tarefas').firstElementChild);
  }
})

document.getElementById('remover-finalizados').addEventListener('click', function deleteCompletedTasks() {
  while(document.getElementsByClassName('completed').length > 0) {
    document.getElementById('lista-tarefas').removeChild(document.getElementsByClassName('completed')[0]);
  }
})

document.querySelector('#remover-selecionado').addEventListener('click', function deleteSelectedTasks() {
  let itemSelecionado = document.getElementsByTagName('li');
  for (index = 0; index < itemSelecionado.length; index += 1) {
    if(window.getComputedStyle(itemSelecionado[index]).backgroundColor === 'rgb(128, 128, 128)') {
      itemSelecionado[index].parentNode.removeChild(itemSelecionado[index]);
    }
  }
})


document.getElementById('salvar-tarefas').addEventListener('click', function saveTasks() {
  localStorage.clear();
  let tarefasSalvas = {};
    for(let index = 0; index < document.getElementsByClassName('tasks').length; index += 1) {
      tarefasSalvas.texto = document.getElementsByClassName('tasks')[index].innerText;
      tarefasSalvas.classes = document.getElementsByClassName('tasks')[index].className;
      localStorage.setItem(index,JSON.stringify(tarefasSalvas));
    }
})

function recoveryTasks() {
  for( let index = 0; index < localStorage.length; index += 1) {
    let tarefasRecuperadas = JSON.parse(localStorage[index]);
    let tarefa = document.createElement('li');
    tarefa.innerText = tarefasRecuperadas.texto;
    tarefa.className = tarefasRecuperadas.classes;
    document.getElementById('lista-tarefas').appendChild(tarefa);
  }
}

document.getElementById('mover-cima').addEventListener('click', function moveItenUp() {
  if(document.getElementsByClassName('selected')[0] && document.getElementsByClassName('selected')[0].previousElementSibling){
    let itemSalvo = {}
    itemSalvo.texto = document.getElementsByClassName('selected')[0].previousElementSibling.innerText;
    itemSalvo.classes = document.getElementsByClassName('selected')[0].previousElementSibling.className;
    Object.freeze(itemSalvo);
    document.getElementsByClassName('selected')[0].previousElementSibling.innerText = document.getElementsByClassName('selected')[0].innerText;
    document.getElementsByClassName('selected')[0].previousElementSibling.className = document.getElementsByClassName('selected')[0].className;
    document.getElementsByClassName('selected')[0].nextElementSibling.innerText = itemSalvo.texto;
    document.getElementsByClassName('selected')[0].nextElementSibling.className = itemSalvo.classes;
  }
})

document.getElementById('mover-baixo').addEventListener('click', function moveItenDown() {
  if(document.getElementsByClassName('selected')[0] && document.getElementsByClassName('selected')[0].nextElementSibling){
    let itemSalvo = {}
    itemSalvo.texto = document.getElementsByClassName('selected')[0].nextElementSibling.innerText;
    itemSalvo.classes = document.getElementsByClassName('selected')[0].nextElementSibling.className;
    Object.freeze(itemSalvo);
    document.getElementsByClassName('selected')[0].nextElementSibling.innerText = document.getElementsByClassName('selected')[0].innerText;
    document.getElementsByClassName('selected')[0].nextElementSibling.className = document.getElementsByClassName('selected')[0].className;
    document.getElementsByClassName('selected')[0].innerText = itemSalvo.texto;
    document.getElementsByClassName('selected')[0].className = itemSalvo.classes;
  }
})