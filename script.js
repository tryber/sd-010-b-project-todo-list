const task = document.getElementById('texto-tarefa');
const saveButton = document.getElementById('criar-tarefa');
const orderedlist = document.getElementById('lista-tarefas');
const deleteAll = document.getElementById('apaga-tudo');
const deleteCompleted = document.getElementById('remover-finalizados');
const listItem = document.getElementsByTagName('li');


function addTask() {
  const taskText = task.value;
  const taskEl = document.createElement('li');
  taskEl.classList.add('list');
  taskEl.innerText = taskText;
  orderedlist.appendChild(taskEl);
  taskEl.addEventListener('click', () => {
    for (let i = 0; i < listItem.length; i += 1) {
      listItem[i].classList.remove('selected');
    }
    taskEl.classList.add('selected');
  });
  taskEl.addEventListener('dblclick', () => {
    taskEl.classList.toggle('completed');
  });
  task.value = '';
}

function removeAll() {
  while (orderedlist.firstChild) {
    orderedlist.removeChild(orderedlist.lastChild);
  }
}

function removeTodo() {
  for (let i = 0; i < listItem.length; i += 1) {
    if (listItem[i].classList.contains('completed')) {
      listItem[i].remove();
    }
  }
}

saveButton.addEventListener('click', () => {
  addTask();
});

deleteAll.addEventListener('click', () => {
  removeAll();
});

deleteCompleted.addEventListener('click', () => {
  removeTodo();
});
