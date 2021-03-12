const listTask = document.getElementById('lista-tarefas');
const inputField = document.getElementById('texto-tarefa');
const clearAll = document.querySelector('#apaga-tudo');

function doubleClick(event) {
  event.target.classList.toggle('completed');
}

function createTask(event) {
  const task = document.createElement('li');
  task.className = 'color';
  task.addEventListener('click', paintLi);
  task.addEventListener('dblclick', doubleClick);
  listTask.appendChild(task);
  task.textContent = event.target.value;
  document.getElementById('texto-tarefa').value = '';
}

inputField.addEventListener('change', createTask);

function paintLi(event) {
  const itens = document.querySelectorAll('.color');
    for (let index = 0; index < itens.length; index += 1) {
      if (itens[index].classList.contains('gray')) {
        itens[index].classList.remove('gray');
      }
      event.target.classList.add('gray');
    }
}

clearAll.addEventListener('click', () => {
  listTask.innerHTML = '';
})
