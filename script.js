const selectionOl = document.getElementById('lista-tarefas');
const inputText = document.getElementById('texto-tarefa');
inputText.focus();

// Adicionar nova Tarefa
function newTask() {
  if (inputText.value === '') {
    alert('Digite uma Tarefa');
    inputText.focus();
  } else {
    const newLi = document.createElement('li');
    newLi.innerText = inputText.value;
    selectionOl.appendChild(newLi);
    inputText.value = '';
    inputText.focus();
  }
}
// Selecionar Tarefa
function selection(event) {
  const task = document.querySelectorAll('li');
  for (let index = 0; index < task.length; index += 1) {
    if (task[index].classList.contains('selected')) {
      task[index].classList.remove('selected');
    }
  }
  event.target.classList.add('selected');
}
// Tarefacumprida Tarefa
function complete(event) {
  event.target.classList.toggle('completed');
}
// Escutador de Eventos
const addTask = document.getElementById('criar-tarefa');
addTask.addEventListener('click', newTask);
const task = document.getElementById('lista-tarefas');
task.addEventListener('click', selection);
task.addEventListener('dblclick', complete);
