let task = document.getElementById('texto-tarefa');
let addTask = document.getElementById('criar-tarefa');
let list = document.getElementById('lista-tarefas');
let clickItem = document.getElementsByClassName('listItem');
let clear = document.getElementById('apaga-tudo');
let remove = document.getElementById('remover-finalizados');

addTask.addEventListener('click', function(){  
  let newTask = document.createElement('li');
  newTask.classList.add('listItem');
  list.appendChild(newTask).innerHTML = task.value;
  task.value = '';  
  changeColor();  
  complet();
});

function changeColor() {
  for (let index= 0; index < clickItem.length; index += 1) {
    clickItem[index].addEventListener('click', function() {
      for (let idx = 0; idx < clickItem.length + 1; idx += 1) {
        if(clickItem[idx]) {
          clickItem[idx].classList.remove('color');
        }
        event.target.classList.add('color');   
      }
    });
  }
}

function complet() {
  list.addEventListener('dblclick', function(event) {
    event.target.classList.toggle('completed');
  });  
}
complet();
clear.addEventListener('click', function() {
    list.innerHTML = '';
});

remove.addEventListener('click', function(){
  let finalized = document.querySelectorAll('li.completed');
  for(let index =0; index < finalized.length; index += 1) {
    list.removeChild(finalezed[index]);
  }
});
