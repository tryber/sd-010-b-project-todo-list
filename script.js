const inputTask = document.getElementById('texto-tarefa');
const orderedList = document.getElementById('lista-tarefas');
const buttonCreateTask = document.getElementById('criar-tarefa');
const buttonCleanList = document.getElementById('apaga-tudo');
const buttonRemoveFinishedTasks = document.getElementById('remover-finalizados');
const buttonSaveTasks = document.getElementById('salvar-tarefas');

function createTask() {
  buttonCreateTask.addEventListener('click', () => {
    const task = document.createElement('li');
    task.innerHTML = inputTask.value;
    inputTask.value = '';
    orderedList.appendChild(task);
  });
}
createTask();

function changeListItemColor() {
  orderedList.addEventListener('click', (param) => {
    for (let i = 0; i < orderedList.children.length; i += 1) {
      orderedList.children[i].style.backgroundColor = '';
    }
    const evento = param;
    evento.target.style.backgroundColor = 'rgb(128, 128, 128)';
  });
}
changeListItemColor();

function scratchTask() {
  orderedList.addEventListener('dblclick', (event) => {
    const eventt = event;
    if (eventt.target.className === 'completed') {
      eventt.target.className = '';
    } else {
      eventt.target.className = 'completed';
    }
  });
}
scratchTask();

function cleanList() {
  buttonCleanList.addEventListener('click', () => {
    orderedList.textContent = '';
  });
}
cleanList();

function removeFinishedTasks() {
  buttonRemoveFinishedTasks.addEventListener('click', () => {
    const CompletedTasks = document.getElementById('lista-tarefas');
    for (let i = CompletedTasks.children.length - 1; i >= 0; i -= 1) {
      const task = CompletedTasks.children[i];
      if (task.className === 'completed') {
        CompletedTasks.removeChild(CompletedTasks.children[i]);
      }
    }
  });
}
removeFinishedTasks();

function SetLocalStorage() { // função baseada na solução do colega Gustavo Cerqueira
  buttonSaveTasks.addEventListener('click', () => {
    const allListItems = document.querySelectorAll('li');
    const storedList = [];
    allListItems.forEach((item) => {
      const storedItem = {
        text: item.innerHTML,
        class: item.className,
      };
      storedList.push(storedItem);
    });
    localStorage.setItem('task', JSON.stringify(storedList));
  });
}

SetLocalStorage();

function getLocalStorage() {
  function loadTask(paramTask, paramClass) {
    const newTask = document.createElement('li');
    newTask.innerHTML = paramTask;
    newTask.className = paramClass;
    orderedList.appendChild(newTask);
  }

  const storedTasks = JSON.parse(localStorage.getItem('task'));
  for (let i in storedTasks) {
    loadTask(storedTasks[i].text, storedTasks[i].class);
  }
}
getLocalStorage();
