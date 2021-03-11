const text = document.querySelector('#texto-tarefa'); //local digitar tarefa
const addButton = document.querySelector('#criar-tarefa'); //btn add tarefa na minha lista
const listOl = document.querySelector('#lista-tarefas'); //ol para criação da minha li
const buttonClean = document.querySelector('#apaga-tudo'); // btn apaga tudo
const btnRemoveFinalizados =document.querySelector("#remover-finalizados"); // btn remover finalizados
const btnRemoveSelected = document.querySelector("#remover-selecionado"); // btn remover selecionados
const btnMoveUp = document.querySelector('#mover-cima');
const btnMoveDown = document.querySelector("#mover-baixo");
const btnSave = document.querySelector("#salvar-tarefas");

  const  creatTask = () => {
  addButton.addEventListener('click',() => {
  let createElementLi = document.createElement('li');
    addTaskStyle(createElementLi);

    listOl.appendChild(createElementLi);
    text.value = "";

  })
}
const addTaskStyle = (createElementLi) => {
  createElementLi.innerText = text.value;
  createElementLi.classList.add("task");
}


const addSelectedTask = () => {
  listOl.addEventListener('click', (event) => {
    let selectedTask = document.querySelector('.selected');
    if (selectedTask && event.target.classList.contains('task') ){
      selectedTask.classList.remove('selected');
    }
  if (event.target.classList.contains('task')){
    event.target.classList.add('selected');
  }
})
}

const addCompletedTask = ( ) => {
  listOl.addEventListener('dblclick', (event) => {
    if (event.target.classList.contains('completed') ) {
      event.target.classList.remove('completed')
    }
    else {
    event.target.classList.add('completed');
  }
  })
}

const buttonCleanList = () => {
  buttonClean.addEventListener('click', () => {
  listOl.innerHTML = '';
 })

}

const buttonCleanCompleted = () => {
  btnRemoveFinalizados.addEventListener('click', () => {
    let completeds = document.querySelectorAll('li.completed');
      for(let index = 0; index < completeds.length; index += 1){
        listOl.removeChild(completeds[index]);
      }
          // completeds.forEach((key)=>{
          //   listOl.removeChild(key);
          // })
  })
}
const buttonClearSelected =() => {
  btnRemoveSelected.addEventListener('click', () => {
    let selectedTask = document.querySelectorAll('li.selected');
    for(let index = 0; index < selectedTask.length; index +=1){
      listOl.removeChild(selectedTask[index]);
    }
  })
}

const moveTaskUp = () => {
btnMoveUp.addEventListener('click',() => {
let taskList = document.querySelectorAll('li.task');
  for(let index = 0; index < taskList.length; index +=1){
    let position = taskList[index];
    if (position.classList.contains('selected') && position.previousElementSibling !== null ){
      listOl.insertBefore(position, taskList[index - 1]);
    }
  }
})
}

const moveTaskDown = () => {
  btnMoveDown.addEventListener('click',() => {
  let taskList = document.querySelectorAll('li.task');
    for(let index = 0; index < taskList.length; index +=1){
      let position = taskList[index];
    if(position.classList.contains('selected') && position.nextElementSibling !== null){
      listOl.insertBefore(taskList[index +1],position);
    }
  }
})
}
const saveTask = () => {
  btnSave.addEventListener('click',() => {
  localStorageSave();
  })
}

const localStorageSave = () => {
  let save = document.querySelector('#lista-tarefas').innerHTML;
  localStorage.task = save;
  window.alert('Lista Salva');
};

const loadTask = () => {
  if (localStorage.task ){
  document.querySelector('#lista-tarefas').innerHTML = localStorage.task;
  }

}

window.onload = () => {
  creatTask();
  addSelectedTask();
  addCompletedTask();
  buttonCleanList();
  buttonCleanCompleted();
  buttonClearSelected();
  moveTaskUp();
  moveTaskDown();
  saveTask();
  loadTask();

}
