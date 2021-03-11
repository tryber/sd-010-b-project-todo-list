const inputField = document.getElementById('texto-tarefa');
const list = document.getElementById('lista-tarefas');
const btn = document.getElementById('criar-tarefa');
const apagar = document.getElementById('apaga-tudo');
const finalizados = document.getElementById('remover-finalizados');

btn.addEventListener('click', () => {
  const listItem = document.createElement('li');
  listItem.innerText = inputField.value;
  listItem.className = 'li';
  inputField.value = '';
  list.appendChild(listItem);
});

list.addEventListener('click', itemSelection, false);

function itemSelection(evt) {
  clearListClass();
  evt.target.classList.add('selected');
}

function clearListClass() {
  // limpar os outros Itens
  const listItem = document.querySelectorAll('.li');
  for (let index = 0; index < listItem.length; index += 1) {
    const classes = `${listItem[index].className}`;
    const classe = classes.replace('selected', '');
    listItem[index].className = classe;
  }
}

function itemCheck(evt) {
  const obj = evt.target.className;
  const classes = obj.split(' ');

  if (classes.includes('completed')) {
    obj.replace('completed', '');
  } else evt.target.className += ' completed';
}

list.addEventListener('dblclick', itemCheck, false);
list.addEventListener('click', itemSelection, false);

apagar.addEventListener('click', () => {
  while (list.lastElementChild != 'null') list.lastChild.remove();
});

finalizados.addEventListener('click', () => {
  const finalizados = document.querySelectorAll('.completed');
  for (let index = 0; index < finalizados.length; index += 1) {
    finalizados[index].remove();
  }
});
