const func = document.createElement('p');
func.id = 'funcionamento';
func.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';
document.body.appendChild(func);

const text = document.createElement('input');// Fonte: https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLElement/input_event
text.id = 'texto-tarefa';
document.body.appendChild(text);

const taskList = document.createElement('ol');
taskList.id = 'lista-tarefas';
document.body.appendChild(taskList);

const eraseButton = document.createElement('button');
eraseButton.id = 'apaga-tudo';
eraseButton.innerHTML = 'Limpar lista';
document.body.appendChild(eraseButton);
eraseButton.addEventListener('click', function () {
  const tasks = document.querySelectorAll('li');
  for (let index = 0; index < tasks.length; index += 1) {
    tasks[index].parentNode.removeChild(tasks[index]);
  }
});

const delCompButton = document.createElement('button');
delCompButton.id = 'remover-finalizados';
delCompButton.innerHTML = 'Apagar completados';
document.body.appendChild(delCompButton);
delCompButton.addEventListener('click', function () {
  const compTasks = document.querySelectorAll('.completed');
  for (let index = 0; index < compTasks.length; index += 1) {
    compTasks[index].parentNode.removeChild(compTasks[index]);
  }
});

const button = document.createElement('button');
button.id = 'criar-tarefa';
button.innerHTML = 'Adicionar';
document.body.insertBefore(button, text.nextSibling); // Fonte: https://developer.mozilla.org/pt-BR/docs/Web/API/Node/insertBefore
button.addEventListener('click', function () {
  if (text.value !== '') { // Fonte: https://pt.stackoverflow.com/questions/21860/como-pegar-input-usando-html-e-javascript
    const newTask = document.createElement('li');
    newTask.innerHTML = text.value;
    taskList.appendChild(newTask);
    text.value = '';
  }
});

// Fonte: (PR do Vinicius Bodra) https://github.com/tryber/sd-010-b-project-todo-list/pull/33/files
function selectTask() {
  const tasks = document.getElementById('lista-tarefas');
  const list = document.getElementsByTagName('li');
  tasks.addEventListener('click', function (event) {
    if (event.target.classList.value !== 'completed') {
      for (let index = 0; index < tasks.childNodes.length; index += 1) {
        list[index].classList.remove('selected');
      }
      if (event.target.tagName === 'LI') {
        event.target.className = 'selected';
      }
    }
  });
}

const delSelButton = document.createElement('button');
delSelButton.id = 'remover-selecionado';
delSelButton.innerHTML = 'Apagar selecionado';
document.body.appendChild(delSelButton);
delSelButton.addEventListener('click', function () {
  const selectTasks = document.querySelectorAll('.selected');
  for (let index = 0; index < selectTasks.length; index += 1) {
    selectTasks[index].parentNode.removeChild(selectTasks[index]);
  }
});

function completeTask() {
  const tasks2 = document.getElementById('lista-tarefas');
  tasks2.addEventListener('dblclick', function (event2) {
    if (event2.target.classList.value !== 'completed') {
      event2.target.classList.add('completed');
      event2.target.classList.remove('selected');
    } else {
      event2.target.classList.remove('completed');
    }
  });
}

const saveButton = document.createElement('button');
saveButton.id = 'salvar-tarefas';
saveButton.innerHTML = 'Salvar tarefas';
document.body.appendChild(saveButton);
saveButton.addEventListener('click', function () {
  localStorage.setItem('taskList', document.getElementById('lista-tarefas').innerHTML);
});

selectTask();
completeTask();
