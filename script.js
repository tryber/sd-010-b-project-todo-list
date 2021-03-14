const createBtn = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const caixaTexto = document.getElementById('texto-tarefa');
const btnClear = document.getElementById('apaga-tudo');
const btnResetCompleted = document.getElementById('remover-finalizados');
const btnSave = document.getElementById('salvar-tarefas');
btnSave.innerHTML = 'Salvar tarefas';
btnResetCompleted.innerHTML = 'Remover finalizados';
btnClear.innerHTML = 'Apagar tudo';
createBtn.innerHTML = 'Criar tarefa';
function clickCreateList() {
  const listItem = document.createElement('li');
  listItem.className = 'listItem';
  listItem.innerHTML = caixaTexto.value;
  taskList.appendChild(listItem);
  caixaTexto.value = '';
}
createBtn.addEventListener('click', clickCreateList);
taskList.addEventListener('click', (event) => {
  const select = document.getElementsByClassName('selecionada');
  if (select.length !== 0) {
    select[0].classList.remove('selecionada');
    event.target.classList.add('selecionada');
  }
  if (select.length === 0) {
    event.target.classList.add('selecionada');
  }
});
taskList.addEventListener('dblclick', (event) => {
  if (!event.target.classList.contains('completed')) {
    event.target.classList.add('completed');
  } else if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  }
});
btnClear.addEventListener('click', () => {
  taskList.innerHTML = '';
});
btnResetCompleted.addEventListener('click', () => {
  const completed = document.querySelectorAll('.completed');
  for (let index = 0; index < completed.length; index += 1) {
    completed[index].remove();
  }
});
btnSave.addEventListener('click', () => {
  localStorage.setItem('taskSaveList', taskList.innerHTML);
});
window.onload = () => {
  const taskSave = localStorage.getItem('taskSaveList');
  taskList.innerHTML = taskSave;
};
