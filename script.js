const buttonAdd = document.querySelector('#criar-tarefa');
const ThetoDoList = document.querySelector('#lista-tarefas');
const taskText = document.querySelector('#texto-tarefa');

function addTaskToDo() {
  buttonAdd.addEventListener('click', function () {
    if((taskText.value).trim()){
      mkTask((taskText.value).trim(), '');
      taskText.value = '';
    } else {
      alert("Tarefa Vazia");
    }
    
  });
}

function mkTask(text, saved) {
  const taskToDo =  document.createElement('li');
  taskToDo.className = ' taskToDo' + saved;
  taskToDo.innerText = text;
  selectableTasks(taskToDo);
  doubleClick(taskToDo);
  ThetoDoList.appendChild(taskToDo);
}

addTaskToDo();

function selectableTasks(taskSelec) {
  taskSelec.addEventListener('click', function () {
    let lastSelected = document.querySelector('.selected');
    if (lastSelected != null) {
      lastSelected.className = lastSelected.className.replace(' selected', '');
    }
    taskSelec.className += ' selected';
  });
}

function doubleClick(taskDb) {
  taskDb.addEventListener('dblclick', function () {
    if (taskDb.className.match(/completed/)) {
      taskDb.className = taskDb.className.replace(' completed', '');
    } else {
      taskDb.className += ' completed';
    }
  });
}

function dellTasks() {
  let buttonDellAll = document.querySelector('#apaga-tudo');
  buttonDellAll.addEventListener('click', function () {
    ThetoDoList.innerHTML = '';
  });
}

dellTasks();

function dellDone() {
  let buttonDellDone = document.querySelector('#remover-finalizados');
  buttonDellDone.addEventListener('click', function () {
    let tasksDone = document.querySelectorAll('.completed');
    const totalDone = tasksDone.length;
    for (let task = 0; task < totalDone; task++) {
      ThetoDoList.removeChild(tasksDone[task]);
    }
  });
}

dellDone();

function saveTasks() {  
  const buttonSave = document.querySelector('#salvar-tarefas');
  buttonSave.addEventListener('click', function () {

    let tasksToSave = [];
    dellSaveds();
    let allTasksNow = document.querySelectorAll('.taskToDo');
    for (let toSave = 0; toSave < allTasksNow.length; toSave++) {      
      let taskObj = {
        task: allTasksNow[toSave].innerText,
        class: allTasksNow[toSave].className
      };
      tasksToSave.push(taskObj);
    }
    localStorage.setItem('tasksToSave', JSON.stringify(tasksToSave));
    alert('Lista Salva com Sucesso');
  });
}

saveTasks();

function dellSaveds() {
  localStorage.removeItem('tasksToSave');
}

function loadTasks() {
  let toLoadTasks = JSON.parse(localStorage.getItem('tasksToSave'));
  if(toLoadTasks != undefined){
    for (let task = 0; task < toLoadTasks.length; task++) {
      mkTask(toLoadTasks[task].task, toLoadTasks[task].class.replace(' taskToDo', ''));
    }
    console.log('Carregado');
  } else {
    console.log('Vasio');
  }
}

loadTasks();

function taskUp() {
  const buttonUp = document.querySelector('#mover-cima');
  buttonUp.addEventListener('click', function () {
    if(howSelected() != 0 && howSelected() != null){
      reordering('up', howSelected());
    }
  });
}

function taskDown() {
  const buttonUp = document.querySelector('#mover-baixo');
  buttonUp.addEventListener('click', function () {
    if(howSelected() != (ThetoDoList.childNodes.length - 1) && howSelected() != null){
      reordering('Down', howSelected());
    }
  });
}

function reordering(position, select) {  
  if (position == 'up') {
  console.log('Up');
  ThetoDoList.insertBefore(ThetoDoList.childNodes[select], ThetoDoList.childNodes[select-1]);
  } else {
    console.log('down');
  ThetoDoList.insertBefore(ThetoDoList.childNodes[select], ThetoDoList.childNodes[select+2]);
  }  
}

function howSelected() {
  let select = null;
  for (let task = 0; task < ThetoDoList.childNodes.length; task++) {
    if (ThetoDoList.childNodes[task].className.match(/selected/)) {
      select = task;
    }
  }
  return select;
}

taskUp();

taskDown();

function removeSelectd() {
  const buttonDellSected = document.querySelector('#remover-selecionado');
  buttonDellSected.addEventListener('click', function () {
    if(howSelected() != null){
      ThetoDoList.removeChild(ThetoDoList.childNodes[howSelected()]);
    }
  });
}

removeSelectd();