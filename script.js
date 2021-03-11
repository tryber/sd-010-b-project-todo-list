const selected = {};
const target = (id) => document.querySelector(id);
const list = target('#lista-tarefas');
const buttonCreate = target('#criar-tarefa');
const clearAll = target('#apaga-tudo');
const inputTask = target('#texto-tarefa');
const clearSelect = target('#remover-selecionado');
const moveUp = target('#mover-cima');
const moveDown = target('#mover-baixo');
const clearComplet = target('#remover-finalizados');
const save = target('#salvar-tarefas');

// Create Task
const taskSelected = (element) => {
  const elem = element.target;
  if (!selected.task) {
    selected.task = elem;
    selected.task.classList.add('selected');
  }
  selected.task.classList.remove('selected');
  selected.task = elem;
  selected.task.classList.add('selected');
};
const taskCompleted = (element) => {
  const elem = element.target;
  if (elem.classList.contains('completed')) {
    elem.classList.remove('completed');
  } else {
    elem.classList.add('completed');
  }
};
const createTask = () => {
  buttonCreate.addEventListener('click', () => {
    const task = document.createElement('li');
    list.appendChild(task);
    task.textContent = inputTask.value;
    inputTask.value = '';
    task.addEventListener('click', taskSelected);
    task.addEventListener('dblclick', taskCompleted);
  });
};
// Clear
const clearTask = () => {
  clearAll.addEventListener('click', () => {
    list.innerHTML = '';
  });
};
// Clear Select
const clearSelected = () => {
  clearSelect.addEventListener('click', () => {
    selected.task.parentNode.removeChild(selected.task);
  });
};
// Clear Completed
const clearCompleted = () => {
  clearComplet.addEventListener('click', () => {
    const listLi = document.querySelectorAll('#lista-tarefas li');
    listLi.forEach((task) => {
      if (task.classList.contains('completed')) {
        task.parentNode.removeChild(task);
      }
    });
  });
};
// Save Task
const saveTask = () => {
  save.addEventListener('click', () => {
    if (localStorage.getItem('saveTask')) localStorage.clear();
    const taskObj = {};
    const listLi = document.querySelectorAll('#lista-tarefas li');
    listLi.forEach((task) => {
      taskObj[`${task.innerText}`] = task.className;
    });
    localStorage.saveTask = JSON.stringify(taskObj);
  });
};

if (localStorage.getItem('saveTask')) {
  const loadTask = JSON.parse(localStorage.saveTask);
  let create;
  Object.keys(loadTask).forEach((task) => {
    create = document.createElement('li');
    list.appendChild(create);
    create.addEventListener('click', taskSelected);
    create.addEventListener('dblclick', taskCompleted);
    create.className = loadTask[task];
    create.innerText = task;
    if (create.classList.contains('selected')) selected.task = create;
  });
}

const moveTaskUp = () => {
  moveUp.addEventListener('click', () => {
    if (selected.task && selected.task.previousElementSibling != null) {
      selected.task.parentNode.insertBefore(
        selected.task.previousElementSibling,
        selected.task.nextElementSibling,
      );
    }
  });
};

const moveTaskDown = () => {
  moveDown.addEventListener('click', () => {
    if (selected.task && selected.task.nextElementSibling != null) {
      selected.task.parentNode.insertBefore(
        selected.task.nextElementSibling,
        selected.task,
      );
    }
  });
};

saveTask();
clearSelected();
clearCompleted();
clearTask();
createTask();
moveTaskUp();
moveTaskDown();
