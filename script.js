function recebeLista() {
  const listaTarefas = document.querySelector('#lista-tarefas');
  return listaTarefas;
}

let tarefas = JSON.parse(localStorage.getItem('tarefas'));
if (tarefas != null) {
  for (let i = 0; i < tarefas.length; i += 1) {
    const listaTarefas = recebeLista();
    const novaTarefa = document.createElement('li');
    [novaTarefa.innerText] = tarefas[i];
    novaTarefa.className = 'tarefa';
    if (tarefas[i][1]) {
      novaTarefa.classList.add('completed');
    }
    listaTarefas.appendChild(novaTarefa);
  }
}

document.addEventListener('click', (e) => {
  const event = e;
  if (event.target.classList.contains('tarefa')) {
    tarefas = document.querySelectorAll('.tarefa');
    for (let i = 0; i < tarefas.length; i += 1) {
      tarefas[i].classList.remove('selected');
      tarefas[i].style.backgroundColor = null;
    }
    event.target.classList.add('selected');
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  }
});

document.addEventListener('dblclick', (event) => {
  if (event.target.classList.contains('tarefa')) {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  }
});

document.getElementById('criar-tarefa').onclick = () => {
  const listaTarefas = recebeLista();
  const novaTarefa = document.createElement('li');
  novaTarefa.innerText = document.getElementById('texto-tarefa').value;
  novaTarefa.className = 'tarefa';
  listaTarefas.appendChild(novaTarefa);
  document.getElementById('texto-tarefa').value = null;
};

document.getElementById('remover-finalizados').onclick = () => {
  tarefas = document.querySelectorAll('.tarefa');
  for (let i = 0; i < tarefas.length; i += 1) {
    if (tarefas[i].classList.contains('completed')) {
      document.querySelector('#lista-tarefas').removeChild(tarefas[i]);
    }
  }
};

document.getElementById('apaga-tudo').onclick = () => {
  const listaTarefas = recebeLista();
  while (listaTarefas.hasChildNodes()) {
    listaTarefas.removeChild(listaTarefas.firstChild);
  }
};

document.getElementById('salvar-tarefas').onclick = () => {
  tarefas = document.querySelectorAll('.tarefa');
  const tarefasSalvas = [];
  let tarefaCompletada;
  for (let i = 0; i < tarefas.length; i += 1) {
    if (tarefas[i].classList.contains('completed')) {
      tarefaCompletada = true;
    } else {
      tarefaCompletada = false;
    }
    tarefasSalvas.push([tarefas[i].innerText, tarefaCompletada]);
  }
  localStorage.setItem('tarefas', JSON.stringify(tarefasSalvas));
  alert('Tarefas salvas!');
};

document.getElementById('mover-cima').onclick = () => {
  const tarefa = document.querySelector('.selected');
  if (tarefa !== null) {
    const listaTarefas = recebeLista();
    if (tarefa !== listaTarefas.firstChild) {
      listaTarefas.insertBefore(tarefa, tarefa.previousSibling);
    }
  }
};

document.getElementById('mover-baixo').onclick = () => {
  const tarefa = document.querySelector('.selected');
  if (tarefa !== null) {
    const listaTarefas = recebeLista();
    if (tarefa !== listaTarefas.lastChild) {
      listaTarefas.insertBefore(tarefa, tarefa.nextSibling.nextSibling);
    }
  }
};

document.getElementById('remover-selecionado').onclick = () => {
  const tarefa = document.querySelector('.selected');
  if (tarefa !== null) {
    const listaTarefas = recebeLista();
    listaTarefas.removeChild(tarefa);
  }
};
