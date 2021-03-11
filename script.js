function clickItem(li, listaTarefas) {
  li.addEventListener('click', function (){
    if (li.style.backgroundColor === 'rgb(128, 128, 128)') {
      li.style.backgroundColor = 'white';
    } else {
      li.style.backgroundColor = 'rgb(128, 128, 128)';
    }
    for (let index = 0; index < listaTarefas.childNodes.length; index += 1) {
      if ((listaTarefas.childNodes[index].style.backgroundColor === 'rgb(128, 128, 128)') && listaTarefas.childNodes[index] !== li) {
        listaTarefas.childNodes[index].style.backgroundColor = 'white';
      }
    }
  })
}

function dblClickItem(li) {
  li.addEventListener('dblclick', function () {
    if (li.className === 'completed') {
      li.classList.remove('completed');
    } else {
      li.className = 'completed';
    }
  })
}

function clear(listaTarefas) {
  document.getElementById('apaga-tudo').addEventListener('click', function () {
    for (let i = 0; i < listaTarefas.childNodes.length; i += 1) {
      listaTarefas.childNodes[i].remove();
    }
  })
  
}

function removeFinalized(listaTarefas) {
  document.getElementById('remover-finalizados').addEventListener('click', function () {
    for (let i = 0; i < listaTarefas.childNodes.length; i += 1) {    
      if (listaTarefas.childNodes[i].className === 'completed') {
        listaTarefas.childNodes[i].remove();
      }
    }
  })
}

function removeSelectd(listaTarefas) {
  document.getElementById('remover-selecionado').addEventListener('click', function () {
    for (let i = 0; i < listaTarefas.childNodes.length; i += 1) {    
      if (listaTarefas.childNodes[i].style.backgroundColor === 'rgb(128, 128, 128)') {
        listaTarefas.childNodes[i].remove();
      }
    }
  })
}

function createTask() {
  const button = document.getElementById('criar-tarefa');
  const ol = document.getElementById('lista-tarefas');
  const input = document.getElementById('texto-tarefa');
  button.addEventListener('click', function creatLi() {
    const li = document.createElement('li');
    li.innerText = input.value;
    ol.appendChild(li);
    input.value = '';
    const listaTarefas = document.getElementById('lista-tarefas');
    clickItem(li, listaTarefas);
    dblClickItem(li);
    clear(listaTarefas);
    removeFinalized(listaTarefas);
    removeSelectd(listaTarefas);
  })
}
createTask();
