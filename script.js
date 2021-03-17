const inputText = document.querySelector('#texto-tarefa');
const list = document.querySelector('#lista-tarefas');

function removeSelected() {
  const selection = document.querySelectorAll('.selected');
  for (let index = 0; index < selection.length; index += 1) {
    selection[index].classList.remove('selected');
  }
}

function selectedItem(event) {
  removeSelected();
  event.target.classList.toggle('selected');
}

function itemComplete(event) {
  if (event.className === 'completed') {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.toggle('completed');
  }
}

function addTask() {
  const item = document.createElement('li');
  item.className = 'item';
  item.innerText = inputText.value;
  list.appendChild(item);
  inputText.value = '';
  item.addEventListener('click', selectedItem);
  item.addEventListener('dblclick', itemComplete);
}

function removeSelectedItem() {
  const selectedItemList = document.querySelector('.selected');
  selectedItemList.remove();
}

function deleteList() {
  const recoverItems = document.querySelectorAll('.item');
  if (recoverItems.length !== 0) {
    const listItem = document.querySelector('#lista-tarefas');
    listItem.innerHTML = '';
  }
}

function deletingCompletedItem() {
  const itemsList = document.querySelectorAll('.completed');
  for (let index = 0; index < itemsList.length; index += 1) {
    itemsList[index].remove();
  }
}
function savingList() {
  localStorage.setItem('list', list.innerHTML);
}

function retrievingList() {
  list.innerHTML = localStorage.getItem('list');
  const recoverItem = document.querySelectorAll('li');
  for (let index = 0; index < recoverItem.length; index += 1) {
    recoverItem[index].addEventListener('click', selectedItem);
    recoverItem[index].addEventListener('dblclick', itemComplete);
  }
}

window.onload = function () {
  const creatingTasks = document.querySelector('#criar-tarefa');
  creatingTasks.addEventListener('click', addTask);
  const removeItem = document.querySelector('#remover-selecionado');
  removeItem.addEventListener('click', removeSelectedItem);
  const deleteCompleteItem = document.querySelector('#remover-finalizados');
  deleteCompleteItem.addEventListener('click', deletingCompletedItem);
  const saveList = document.querySelector('#salvar-tarefas');
  saveList.addEventListener('click', savingList);
  const clearList = document.querySelector('#apaga-tudo');
  clearList.addEventListener('click', deleteList);

  retrievingList();
};
