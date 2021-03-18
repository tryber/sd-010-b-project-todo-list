//https://www.w3schools.com/jsref/jsref_foreach.asp
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions
//https://www.w3schools.com/js/js_arrow_function.asp

let createTask = (text) => {
    let task = document.createElement('li');
    task.className = 'task'; 
    task.innerHTML = text; 
    return task; 
  }  
  
  let insertTask = () => {    
    let input = document.getElementById('texto-tarefa');    
    let lista = document.getElementById('lista-tarefas');
  
    if (input.value !== '') { 
      let task = createTask(input.value); 
      lista.appendChild(task); 
      input.value = ''; 
    }
  }  
  let selectTaskWithBackgroundColor = (color) => {    
    let taskElementsList = document.querySelectorAll('.task');
    let selectTask = null;     
    taskElementsList.forEach((task) => {      
      if (task.style.backgroundColor === color) {
        selectTask = task; 
      }
    });  
    return selectTask; 
  } 
  let changeTaskBackgroundColor = (event) => {
    let task = event.target;      
    let currentTask = selectTaskWithBackgroundColor('rgb(128, 128, 128)');  
    if (currentTask) {      
      currentTask.style.backgroundColor = task.style.backgroundColor; 
    }    
    task.style.backgroundColor = 'rgb(128, 128, 128)';
  } 
  
  let taskCompletedOrNot = (event) => {
    let task = event.target; 
    
    task.classList.toggle('completed');
  } 
  
  let setupEvents = () => {   
    let button = document.querySelector('#criar-tarefa');    
    button.addEventListener('click', insertTask);    
    let taskList = document.querySelector('#lista-tarefas');    
    taskList.addEventListener('click', changeTaskBackgroundColor);   
    taskList.addEventListener('dblclick', taskCompletedOrNot);
  }
  
    window.onload = function init() {
    setupEvents(); 
  };

  