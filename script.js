const taskList = document.getElementById('lista-tarefas');
const btnCriarTarefa = document.getElementById('criar-tarefa');
const taskText = document.getElementById('texto-tarefa');

const checkBackgroundColor = () => {
  const li = document.querySelector('.colorGray');
  if(li){
    li.className = '';
  }
}

const selectTask = (event) => {
  checkBackgroundColor();
  event.target.classList.add('colorGray');
}

const createList = () =>{
  const creatLi = document.createElement('li');

  creatLi.innerText = taskText.value;
  taskText.value = '';

  taskList.appendChild(creatLi);

  creatLi.addEventListener('click', selectTask);
  taskText.focus();
};
btnCriarTarefa.addEventListener('click', () => {
  createList();
});
