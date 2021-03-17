const buttonAdd = document.getElementById('criar-tarefa');
const buttonClear = document.getElementById('apaga-tudo');
const list = document.getElementById('lista-tarefas');
const listmain = document.querySelector('#lista-tarefas');

function selectTask() {
  const listitems = document.getElementsByTagName('li');

  listmain.addEventListener('click', (trigger) => {
    const moment = trigger.target;

    for (let i = 0; i < listitems.length; i += 1) { listitems[i].style.backgroundColor = ''; }

    moment.style.backgroundColor = 'rgb(128, 128, 128)';
  });
}

function finishTask(trigger) {
  const moment = trigger.target;

  moment.className = moment.className === 'item completed' ? 'item' : 'item completed';
}

buttonAdd.onclick = () => {
  const input = document.getElementById('texto-tarefa');
  const valuein = input.value;

  const item = document.createElement('li');
  item.className = 'item';

  list.appendChild(item);

  item.innerHTML = valuein;

  input.value = '';
};

buttonClear.onclick = () => {
  while (listmain.firstChild) { listmain.removeChild(listmain.firstChild); }
};

selectTask();
listmain.addEventListener('dblclick', finishTask);
