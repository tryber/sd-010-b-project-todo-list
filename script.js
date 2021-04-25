const taskList = document.getElementById('lista-tarefas');
const taskText = document.getElementById('texto-tarefa');
const btnCriarTarefa = document.getElementById('criar-tarefa');
const btnClearTaskList = document.getElementById('apaga-tudo');
const btnRemoveFinished =document.getElementById('remover-finalizados');

const checkBackgroundColor = () => {
  const li = document.querySelector('.colorGray');
  if (li) {
    li.classList.remove('colorGray');
  }
};

const taskCompleted = (event) => {
  event.target.classList.toggle('completed');
};

const selectTask = (event) => {
  if (event.target.className === 'colorGray') {
    event.target.classList.remove('colorGray');
  } else {
    checkBackgroundColor();
    event.target.classList.add('colorGray');
  }
};

const createList = () => {
  const creatLi = document.createElement('li');

  creatLi.className = '';
  creatLi.innerText = taskText.value;
  taskText.value = '';

  taskList.appendChild(creatLi);

  creatLi.addEventListener('dblclick', taskCompleted);
  creatLi.addEventListener('click', selectTask);
  taskText.focus();
};

const clearTaskList = () => {
  taskList.innerHTML = ''
}

const removeFinished = () => {
  const completeds = document.querySelectorAll('.completed');
  completeds.forEach((completed) => 
    completed.parentNode.removeChild(completed)
  );
};

btnCriarTarefa.addEventListener('click', () => {
  createList();
});

btnClearTaskList.addEventListener('click', clearTaskList);

btnRemoveFinished.addEventListener('click', removeFinished);
