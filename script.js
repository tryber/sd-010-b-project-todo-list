let input = document.querySelector("#texto-tarefa");

let btn = document.querySelector("#criar-tarefa");
btn.addEventListener("click", addTask);

let arrTasks = [];

function addTask() {
  let ol = document.querySelector("#lista-tarefas");
  let li = document.createElement("li");
  li.classList.add("tasks")
  li.innerHTML = input.value;
  arrTasks.push(input.value);
  localStorage.setItem('tasks', JSON.stringify(arrTasks));
  ol.appendChild(li);
  tasks(); 
  clearInput();  
}

function clearInput() {
  input.value = '';
}

function tasks() {
  let tasks = document.querySelectorAll(".tasks");
  for (let index = 0; index < tasks.length; index+=1) {
    tasks[index].addEventListener("click", colorTask); 
    tasks[index].addEventListener("dblclick", textDecoration); 
  }  
}

function colorTask(event) {
  let selectColor = document.querySelector(".colorGray")
  if(selectColor) {
    selectColor.classList.remove("colorGray")
    event.target.classList.add("colorGray")
  } else {
    event.target.classList.add("colorGray")
  }
} 

let arrTasksCompleted = [];
function textDecoration(event) {  
  event.target.classList.toggle("completed");
  if (event.target.classList.contains('completed')){
    arrTasksCompleted.push(event.target.innerText)
  } else {
    arrTasksCompleted.splice(arrTasksCompleted.indexOf(event.target.innerText), 1);
  } 
  localStorage.setItem('completed', JSON.stringify(arrTasksCompleted));
} 

const clearAllButton = document.querySelector( '#apaga-tudo');
clearAllButton.addEventListener('click', clearAll);

function clearAll() {
  const taskslist = document.querySelector('#lista-tarefas');
  const tasksItems = document.querySelectorAll(".tasks");
  for (let index = 0; index < tasksItems.length; index += 1) {
    taskslist.removeChild(tasksItems[index])
  }
  arrTasks = [];
  localStorage.setItem('tasks', JSON.stringify(arrTasks));
}

const removeFinalizados = document.querySelector('#remover-finalizados')
removeFinalizados.addEventListener('click', removeTasksFinish);

function removeTasksFinish() {
  const taskslist = document.querySelector('#lista-tarefas');
  const tasksItems = document.querySelectorAll(".completed");
  for (let index = 0; index < tasksItems.length; index += 1) {
    let taskItem = tasksItems[index].innerText;
    taskslist.removeChild(tasksItems[index])
    arrTasks.splice(arrTasks.indexOf(taskItem), 1);
    arrTasksCompleted.splice(arrTasksCompleted.indexOf(taskItem), 1)
    localStorage.setItem('tasks', JSON.stringify(arrTasks));
    localStorage.setItem('completed', JSON.stringify(arrTasksCompleted));
  }

}

function taskSaved(task) {
  const tasksCompleted = JSON.parse(localStorage.getItem('completed'))
  let ol = document.querySelector("#lista-tarefas");
  let li = document.createElement("li");
  li.classList.add("tasks")
  li.innerHTML = task;
  ol.appendChild(li);
  tasksCompleted.forEach((completed) => {
    if (completed === task) {
      li.classList.add('completed');
      arrTasksCompleted.push(completed);
    }
  })
  tasks(); 
  clearInput();  
}

window.onload = () => {
  const tasksString = localStorage.getItem('tasks');
  arrTasks = tasksString === null ? [] : JSON.parse(tasksString);
  console.log(arrTasks);
  arrTasks.forEach((task) => {
    taskSaved(task);
  })
}
