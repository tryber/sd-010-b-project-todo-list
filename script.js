const taskList = document.getElementById('lista-tarefas');
const btnCriarTarefa = document.getElementById('criar-tarefa');
const taskText = document.getElementById('texto-tarefa');

const createList = () =>{
  const creatLi = document.createElement('li');
  creatLi.innerText = taskText.value;
  taskText.value = '';
  taskList.appendChild(creatLi);
  taskText.focus();
};
btnCriarTarefa.addEventListener('click', () => {
  createList();
});
