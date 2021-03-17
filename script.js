// Captura de elementos HTML
const inputBox = document.querySelector('#texto-tarefa');
const addButton = document.querySelector('#criar-tarefa');
const orderedList = document.querySelector('#lista-tarefas');
const clearListButton = document.querySelector('#apaga-tudo');
const clearCompletedItemButton = document.querySelector('#remover-finalizados');
const clearSelectedItemButton = document.querySelector('#remover-selecionado');

// ----------------------------------------------------------------------------

// Função "Limpa Itens Selecionado": Remove item className = 'selected-list-item'.
function clearSelectedItem() {
  const currentlyFocusedItem = document.querySelector('.selected-list-item');
  currentlyFocusedItem.remove();
}

// Referência: https://pt.stackoverflow.com/a/439938
// Função "Limpa Itens Completados": Remove item por item se className = '.complete'.
function clearCompletedItems() {
  document.querySelectorAll('.completed').forEach((e) => e.remove());
}

// Referência: https://stackoverflow.com/a/18795074/14683615
// Função "Limpa Lista":
function clearList() {
  orderedList.innerHTML = '';
}

// Função "Item Focado": Marca item selecionado com cor GRAY (adiciona ClassName=selected-list-item) e remove do selcionado, se houver.
function focusedItem(li) {
  const currentlyFocusedItem = document.querySelector('.selected-list-item');

  if (currentlyFocusedItem != null) {
    currentlyFocusedItem.classList.remove('selected-list-item');
    li.target.classList.add('selected-list-item');
  } else {
    li.target.classList.add('selected-list-item');
  }
}

// Função "Item Completado": Marca item como completo (adiciona ClassName=completed-list-item) ou remove se já marcado.
function completedItem(li) {
  const currentlyItem = li.target;
  const completed = currentlyItem.classList.contains('completed');

  if (completed) {
    currentlyItem.classList.remove('completed');
  } else {
    currentlyItem.classList.add('completed');
  }
}

// Função "Itens da Lista Ouvindo": Adiciona evento"s" de escuta em cada item da lista de tarefas e chama funções específicas pra cada evento"
function listItemsListening() {
  const listItems = document.querySelectorAll('li');
  for (let index = 0; index < listItems.length; index += 1) {
    listItems[index].addEventListener('click', focusedItem);
    listItems[index].addEventListener('dblclick', completedItem);
  }
}

// Função "Insere Item lista": Se campo não vazio, insere elemento <li> dentro da <ol>, com conteúdo do campo <inputBox>.
function insertListItem() {
  if (inputBox.value !== '') {
    const newListItem = document.createElement('li');
    newListItem.innerText = inputBox.value;
    orderedList.appendChild(newListItem);
    inputBox.value = '';
    listItemsListening();
  } else {
    alert('Olá! Voçê precisa informar um nome para a Tarefa!');
  }
}

// ----------------------------------------------------------------------------

// Escuta click no botão Adicionar e chama função "Insere Item Lista"
addButton.addEventListener('click', insertListItem);
clearListButton.addEventListener('click', clearList);
clearCompletedItemButton.addEventListener('click', clearCompletedItems);
clearSelectedItemButton.addEventListener('click', clearSelectedItem);
