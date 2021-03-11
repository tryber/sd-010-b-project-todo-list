function addTask() {
  const button = document.getElementById('criar-tarefa');
  const input = document.getElementById('texto-tarefa');
  const lista = document.getElementById('lista-tarefas');
  button.addEventListener('click', function createTask() {
    const newTask = document.createElement('li');
    newTask.innerText = input.value;
    lista.appendChild(newTask);
    input.value = '';
    backgroundReset ();
  });
}

addTask();

function changeItem () {
  const list = document.getElementById('lista-tarefas');
  list.addEventListener('click', function backTask(event) {
    event.target.style.backgroundColor = 'rgb(128,128,128)';
  });
}

changeItem();

function backgroundReset () {
  const itemList = document.getElementsByTagName('li');
  for (let index = 0; index < itemList.length; index += 1) {
    itemList[index].addEventListener('click', function () {
      for (let index2 = 0; index2 < itemList.length; index2 += 1) {
        if (index2 !== index) {
          itemList[index2].style.backgroundColor = '';
        }
      }
    });
  }
}

function overline () {
  const list = document.getElementById('lista-tarefas');
  list.addEventListener('dblclick', function (event) {
    if(event.target.className === 'completed') {
      event.target.className = '';
    } else {
      event.target.className = 'completed';
    }
  });
}

overline();

function clear() {
 const cleanButton = document.getElementById('apaga-tudo');
 cleanButton.addEventListener('click', function () {
    const list = document.getElementById('lista-tarefas');
    while (list.firstChild) {
      list.removeChild(list.lastChild);
    }
  });
}

clear();

function removeCompleted() {
  const classCompleted = document.getElementsByClassName('completed');
  const cleanCompleted = document.getElementById('remover-finalizados');
  cleanCompleted.addEventListener('click', function () {
      while (classCompleted.length > 0){
      classCompleted[0].parentNode.removeChild(classCompleted[0]);
      }
  });
}

removeCompleted();

function save() {
  const buttonSave = document.getElementById('salvar-tarefas');
  buttonSave.addEventListener('click', function () {
    const lista = document.getElementsByTagName('ol');
      localStorage.setItem('listaObjects',JSON.stringify(lista[0].innerHTML));
  });
}

save();

function initialize() {
  let list = document.getElementsByTagName('ol')[0];
  list.innerHTML = JSON.parse(localStorage.getItem('listaObjects'));
  backgroundReset();
}

initialize ();

function acima() {
  const btnacima = document.getElementById('mover-cima');
  btnacima.addEventListener('click', function () {
    const lista = document.getElementsByTagName('li');
    for (let index = 1; index < lista.length; index += 1) {
      if (lista[index].style.backgroundColor === 'rgb(128, 128, 128)') {
        let backup = lista[index - 1].innerText;
        let backupClass = lista[index - 1].className;
        lista[index - 1].innerText = lista[index].innerText;
        lista[index].innerText = backup;
        lista[index - 1].className = lista[index].className;
        lista[index].className = backupClass;
        lista[index].style.backgroundColor = '';
        lista[index - 1].style.backgroundColor = 'rgb(128, 128, 128)';
      }
    }
  });
}

acima();

function abaixo() {
  const btnacima = document.getElementById('mover-baixo');
  btnacima.addEventListener('click', function () {
    const lista = document.getElementsByTagName('li');
    for (let index = 0; index < lista.length - 1; index += 1) {
      if (lista[index].style.backgroundColor === 'rgb(128, 128, 128)') {
        let backup = lista[index].innerText;
        lista[index].innerText = lista[index + 1].innerText;
        lista[index + 1].innerText = backup;
        let backupClass = lista[index].className;
        lista[index].className = lista[index + 1].className;
        lista[index + 1].className = backupClass;
        lista[index].style.backgroundColor = '';
        lista[index + 1].style.backgroundColor = 'rgb(128, 128, 128)';
        return;
      }
    }
  });
}

abaixo();

function removeSelected() {
  const btnremove = document.getElementById('remover-selecionado');
  btnremove.addEventListener('click', function () {
    const lista = document.getElementsByTagName('li');
      for (let index = 0; index < lista.length; index += 1) {
        if (lista[index].style.backgroundColor === 'rgb(128, 128, 128)') {
          lista[index].parentNode.removeChild(lista[index]);
        }
      }
  });
}

removeSelected();