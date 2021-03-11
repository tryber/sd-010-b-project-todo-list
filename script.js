function setColor(event) {
  const tarefa = event.target;
  const tarefas = document.querySelectorAll('.tarefa');
  for (let i = 0; i < tarefas.length; i += 1) {
    tarefas[i].classList.remove('cinza');
  }
  tarefa.classList.add('cinza');
}

function setRiscado(event) {
  const tarefa = event.target;
  const listClasses = tarefa.classList;
  const tamanhoListaClasses = listClasses.length;
  if (tamanhoListaClasses === 3) {
    tarefa.classList.remove('completed');
  } else {
    tarefa.classList.add('completed');
  }
}

function criarTarefa() {
  const pai = document.getElementById('lista-tarefas');
  const tarefa = document.getElementById('texto-tarefa').value;
  if (tarefa === '') {
    alert('Você deve incluir uma tarefa!');
  } else {
    const li = document.createElement('li');
    li.className = 'tarefa';
    li.innerHTML = tarefa;
    pai.appendChild(li);
    li.addEventListener('click', setColor);
    li.addEventListener('dblclick', setRiscado);
    document.getElementById('texto-tarefa').value = '';
  }
}

function apagarTarefas() {
  // referencia tirada do site: https://developer.mozilla.org/pt-BR/docs/Web/API/Node/removeChild
  const pai = document.getElementById('lista-tarefas');
  while (pai.firstChild) {
    pai.removeChild(pai.firstChild);
  }
}

function removerFinalizados() {
  // Refencia tirada de: http://devfuria.com.br/javascript/dom-remove-child/#:~:text=O%20m%C3%A9todo%20removeChild()%20remove,filho%20que%20deve%20ser%20removido.
  const listaTarefas = document.querySelectorAll('li');
  const pai = document.getElementById('lista-tarefas');
  for (let i = 0; i < listaTarefas.length; i += 1) {
    if (listaTarefas[i].classList.contains("completed") === true) {
      pai.removeChild(listaTarefas[i]);
    }
  }
}

function salvarTarefas() {
  const pai = document.getElementById('lista-tarefas');
  const listaTarefas = document.querySelectorAll('li');
  //console.log(listaTarefas[0].innerText);
  for (let i = 0; i < listaTarefas.length; i += 1) {
    localStorage.setItem(('tarefa' + [i + 1]), listaTarefas[i].innerText);
  }
}

function pegarTarefas() {
  const pai = document.getElementById('lista-tarefas');
  let tarefas = [];
  for (let i = 0; i < localStorage.length; i += 1) {
    tarefas.push(localStorage.getItem(('tarefa' + [i + 1])));
  }
  localStorage.clear();
  for (let i = 0; i < tarefas.length; i += 1) {
    const li = document.createElement('li');
    li.className = 'tarefa';
    li.innerHTML = tarefas[i];
    pai.appendChild(li);
    li.addEventListener('click', setColor);
    li.addEventListener('dblclick', setRiscado);
    document.getElementById('texto-tarefa').value = '';
  }
}
window.onload = pegarTarefas();
