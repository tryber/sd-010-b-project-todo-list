window.onload = function () {
  function listenClick () {
    let addButton = document.getElementById('criar-tarefa');
    let deleteButton = document.getElementById('apaga-tudo');
    let removeButton = document.getElementById('remover-finalizados');
    let saveButton = document.getElementById('salvar-tarefas');
    let upButton = document.getElementById('mover-cima');
    let downButton = document.getElementById('mover-baixo');
    let removeSelectedButton = document.getElementById('remover-selecionado');

    addButton.addEventListener('click', addTask);
    deleteButton.addEventListener('click', deleteAll);
    removeButton.addEventListener('click', removeEnd);
    saveButton.addEventListener('click', saveTasks);
    upButton.addEventListener('click', upMoved);
    downButton.addEventListener('click', downMoved);
    removeSelectedButton.addEventListener('click', removeSelected);
  }

  function addTask () {
    let taskList = document.getElementById('lista-tarefas');
    let newTask = document.createElement("li");
    let textTask = document.createTextNode(getText());  

    newTask.appendChild(textTask);
    newTask.setAttribute('class', 'task');

    newTask.addEventListener('click', taskColor);
    newTask.addEventListener('dblclick', taskThrough);

    taskList.appendChild(newTask);

    cleanText();
  }

  function getText () {
    let text = document.getElementById('texto-tarefa').value;

    return text;
  }

  function cleanText () {
    document.getElementById('texto-tarefa').value = '';
  }

  function taskColor(event) {
    let taskItem = event.target;
    let taskItens = document.querySelectorAll('li');
    for (let index = 0; index < taskItens.length; index++) {
      taskItens[index].classList.remove('li-selected');
    }
    taskItem.classList.add('li-selected');
  }

  function taskThrough(event) {
    let taskItem = event.target;
    taskItem.classList.toggle('completed');
  }

  function deleteAll () {
    let taskList = document.getElementById('lista-tarefas');
    while (taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
    }
  }

  function removeEnd () {
    let taskList = document.getElementById('lista-tarefas');
    let taskItems = document.getElementsByTagName('li');

    for (let index = 0; index < taskItems.length; index++) {
      if (taskItems[index].classList.contains('completed')) {
        taskList.removeChild(taskItems[index]);
        index = 0;
      }
    }
  }

  // https://www.w3schools.com/js/js_json_stringify.asp
  // https://www.w3schools.com/js/js_json_parse.asp
  function saveTasks () {
    let taskItems = document.getElementsByTagName('li');
    let arrayTasks = [];
    if (taskItems != null) {
      for (let index = 0; index < taskItems.length; index++) {
        let taskObject = {
          text: taskItems[index].innerText,
          className: taskItems[index].className
        }
        arrayTasks.push(taskObject);
      }
      localStorage.setItem('taskStorage', JSON.stringify(arrayTasks));
    }
  }

  function restoreTasks() {
    let restore = JSON.parse(localStorage.getItem('taskStorage'));
    let taskList = document.getElementById('lista-tarefas');
    //
    if (restore != null) {
      for (let index = 0; index < restore.length; index++) {
        let restoredTask = document.createElement("li");
        restoredTask.innerHTML = restore[index].text;
        restoredTask.setAttribute('class', restore[index].className);
        restoredTask.addEventListener('click', taskColor);
        restoredTask.addEventListener('dblclick', taskThrough);
        taskList.appendChild(restoredTask);
      }
    }
  }

  //https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore
  function upMoved() {
    let taskList = document.getElementById('lista-tarefas');
    let activeTask = document.querySelector('.li-selected');

    if (activeTask != taskList.firstChild && activeTask != null) {
      taskList.insertBefore(activeTask, activeTask.previousSibling);
    }
  }
  
  function downMoved() {
    let taskList = document.getElementById('lista-tarefas');
    let activeTask = document.querySelector('.li-selected');

    if (activeTask != taskList.lastChild && activeTask != null) {
      taskList.insertBefore(activeTask, activeTask.nextSibling.nextSibling);
    }
  }

  function removeSelected () {
    let taskList = document.getElementById('lista-tarefas');
    let activeTask = document.querySelector('.li-selected');

    taskList.removeChild(activeTask);
  }

  listenClick();
  restoreTasks();
}
