function addNewItemList() {
  const getInputButton = document.querySelector('#criar-tarefa');
  const getInputField = document.querySelector('#texto-tarefa');
  const getOl = document.querySelector('#lista-tarefas');

  getInputButton.addEventListener('click', function () {
    if (getInputField.value.length > 0) {
      const newLi = document.createElement('li');
      newLi.innerText = getInputField.value;
      //  newLi.className = 'selected';
      getOl.appendChild(newLi);
      getInputField.value = '';
    } else {
      alert('Error: Digite ao menos 1 caractere.');
    }
  });
}

addNewItemList();

function changeColorItem() {
  const getOl = document.querySelector('#lista-tarefas');

  getOl.addEventListener('click', function (event) {
    let getLi = document.querySelector('.selected');
    if (getLi != null) {
      getLi.classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
}

changeColorItem();

function lineThroughItem() {
  const getOl = document.querySelector('#lista-tarefas');
  getOl.addEventListener('dblclick', function (event) {
    let getLi = document.querySelector('.completed');
    if (getLi != null) {
      //  getLi.classList.remove('completed');
      getLi.classList.remove('selected');
    }

    if (event.target.classList.contains('completed') === false) {
      event.target.classList.add('completed');
      event.target.classList.remove('selected');
    } else {
      event.target.classList.remove('completed');
    }
  });
}

lineThroughItem();

function clearAllItems() {
  const clearButton = document.querySelector('#apaga-tudo');
  const getOl = document.querySelector('#lista-tarefas');

  clearButton.addEventListener('click', function () {
    // deleta o primeiro filho
    // mas o segundo se tornar o primeiro filho
    // com isso o loop só finalizar quando
    // todos os filhos forem deletados
    // porque todos se tornaram primeiro filho
    while (getOl.firstChild) {
      getOl.removeChild(getOl.firstChild);
    }
  });
}

clearAllItems();

function clearFinishedItems() {
  const clearButton = document.querySelector('#remover-finalizados');
  const getOl = document.querySelector('#lista-tarefas');

  clearButton.addEventListener('click', function () {
    let getLi = document.querySelector('.completed');

    if (getLi.classList.contains('completed')) {
      getOl.removeChild(getLi);
    }
  });
}

clearFinishedItems();
