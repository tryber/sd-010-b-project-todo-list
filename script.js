function clearInput() {
  document.getElementById('texto-tarefa').value = '';
}

function addItems() {
  let inputed = document.getElementById('texto-tarefa');
  let list = document.getElementById('lista-tarefas');
  let listItem = document.createElement('li');
  if(inputed.value === "") {
    alert("Campo vazio!");
  } else {
    listItem.innerText = inputed.value;
    list.appendChild(listItem);
    clearInput();
    listItem.addEventListener('click', selectItem);
    listItem.addEventListener('dblclick', completedTask);
  }
}

function removeSelect() {
  const selected = document.querySelector('.selected');
  if(selected)
  selected.classList.remove('selected');
}

function selectItem(selected) {
  removeSelect();
  const newSelected = selected.target;
  newSelected.classList.add('selected');
}

function completedTask(completed) {
  const completedTask = completed.target;
  if(completedTask.classList.contains('completed')) {
    completedTask.classList.remove('completed');
  } else {
    completedTask.classList.add('completed');
  }
}

function clearAll() {
  const clearTasks = document.getElementsByTagName('li');
  const taskList = document.getElementById('lista-tarefas');
  for(let index = clearTasks.length - 1; index < clearTasks.length; index -= 1) {
    taskList.removeChild(clearTasks[index]);
  }
}

function removeCompleted() {
  const alreadyCompleted = document.querySelectorAll('.completed');
  const taskList = document.getElementById('lista-tarefas');
  for(let index in alreadyCompleted) {
    taskList.removeChild(alreadyCompleted[index]);
  }
}

function removeSelected() {
  const selectedItem = document.querySelector('.selected');
  const taskListItems = document.getElementById('lista-tarefas');
  taskListItems.removeChild(selectedItem);
}

document.getElementById('criar-tarefa').addEventListener('click', addItems);
document.getElementById('apaga-tudo').addEventListener('click', clearAll);
document.getElementById('remover-finalizados').addEventListener('click', removeCompleted);
document.getElementById('remover-selecionado').addEventListener('click', removeSelected);