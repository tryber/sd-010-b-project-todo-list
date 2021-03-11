let getTaskList = document.getElementById('lista-tarefas');
let taskText = document.getElementById('texto-tarefa');


let addTask = document.getElementById('criar-tarefa');
addTask.addEventListener('click', function () {
    let taskLi = document.createElement('li');
    getTaskList.appendChild(taskLi);
    taskLi.innerText = taskText.value;
    taskText.value = '';
    taskLi.addEventListener('click', function () {
      for (child = 0; child < getTaskList.children.length; child += 1){
        getTaskList.children[child].classList.remove('selected');
        }
        taskLi.classList.add('selected');
    });
    taskLi.addEventListener('dblclick', function () {
      if (taskLi.className === 'selected') {
        taskLi.classList.add('completed');
      } else if (taskLi.className === 'completed selected') {
        taskLi.classList.remove('completed');
      }
    });
  });

// function completedTask (event) {

// }



