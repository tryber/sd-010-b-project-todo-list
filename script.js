function createElement(tag) {
  const element = document.createElement(tag);
  return element;
}

// Montagem do HTML:
const main = document.getElementById('main');

const title = createElement('h1');
title.innerHTML = 'Minha Lista de Tarefas';
document.querySelector('header').appendChild(title);
title.id = 'title';

const funcionamento = createElement('p');
funcionamento.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';
main.appendChild(funcionamento);
funcionamento.id = 'funcionamento';

const input = createElement('input');
input.id = 'texto-tarefa';
main.appendChild(input);

const button = createElement('button');
button.innerHTML = 'Adicionar';
button.id = 'criar-tarefa';
main.appendChild(button);

const ordenedList = createElement('ol');
ordenedList.id = 'lista-tarefas';
main.appendChild(ordenedList);

const moveUp = createElement('button');
moveUp.id = 'mover-cima';
moveUp.innerHTML = '&#8679';
main.appendChild(moveUp);

const moveDown = createElement('button');
moveDown.id = 'mover-baixo';
moveDown.innerHTML = '&#8681';
main.appendChild(moveDown);

const clearDone = createElement('button');
clearDone.id = 'remover-finalizados';
clearDone.innerHTML = 'Remover finalizados';
main.appendChild(clearDone);

const removeSelected = createElement('button');
removeSelected.id = 'remover-selecionado';
removeSelected.innerHTML = 'Remover selecionados';
main.appendChild(removeSelected);

const clearList = createElement('button');
clearList.id = 'apaga-tudo';
clearList.innerHTML = 'Limpar lista';
main.appendChild(clearList);

const saveTasks = createElement('button');
saveTasks.id = 'salvar-tarefas';
saveTasks.innerHTML = 'salvar tarefas';
main.appendChild(saveTasks);

// Adcionar:
function addNewTask() {
  button.addEventListener('click', () => {
    if (input.value.length > 0) {
      const newItem = createElement('li');
      newItem.innerHTML = input.value;
      newItem.classList.add('task');
      input.value = '';
      ordenedList.appendChild(newItem);
    }
  });
}

// Seleciona tarefa na lista:
function selectTask() {
  ordenedList.addEventListener('click', (e) => {
    for (let i = 0; i < ordenedList.children.length; i += 1) {
      if (ordenedList.children[i].classList.contains('select')) {
        ordenedList.children[i].classList.remove('select');
        e.target.classList.add('select');
      }
      e.target.classList.add('select');
    }
  });
}

// Marca tarefa concluida:
function taskDone() {
  ordenedList.addEventListener('dblclick', (e) => {
    if (e.target.classList.contains('completed')) {
      e.target.classList.remove('completed');
    } else {
      e.target.classList.add('completed');
    }
  });
}

// Limpa lista:
function clearAll() {
  clearList.addEventListener('click', () => {
    ordenedList.innerHTML = '';
  });
}

const taskList = ordenedList.childNodes;

// Remove finalizados:
function removeDone() {
  // clearDone.addEventListener('click', () => {
  //   for (let i = 0; i < taskList.length; i += 1) {
  //     if (taskList[i].classList.contains('completed')) {
  //       taskList[i].remove(taskList);
  //     }
  //   }
  // });

  // Fonte: https://github.com/tryber/sd-010-b-project-todo-list/blob/AlanTanaka-project-to-do-list/
  clearDone.addEventListener('click', () => {
    const tasksDone = document.querySelectorAll('.completed');
    tasksDone.forEach((task) => task.remove());
  });
}

// Remove itens selecionados:
function removeTask() {
  removeSelected.addEventListener('click', () => {
    for (let i = 0; i < taskList.length; i += 1) {
      if (taskList[i].classList.contains('select')) {
        taskList[i].remove(taskList);
      }
    }
  });
}

// Move selecionados pra cima/pra baixo:
moveDown.addEventListener('click', () => {
  const selected = document.querySelector('.select');
  const lower = selected.nextElementSibling;
  if (selected && selected !== ordenedList.lastChild) {
    lower.remove(ordenedList);
    selected.insertAdjacentElement('beforebegin', lower);
  }
});

moveUp.addEventListener('click', () => {
  const selected = document.querySelector('.select');
  const upper = selected.previousElementSibling;
  if (selected && selected !== ordenedList.firstChild) {
    upper.remove(ordenedList);
    selected.insertAdjacentElement('afterend', upper);
  }
});

// Salva lista de tarefas:
// Fonte: https://github.com/tryber/sd-010-b-project-todo-list/blob/AlanTanaka-project-to-do-list/
// Fonte: https://www.w3schools.com/js/js_json_stringify.asp
// Fonte: https://developer.mozilla.org/pt-BR/docs/Web/API/Storage/setItem
function saveTaskList() {
  saveTasks.addEventListener('click', () => {
    localStorage.clear(); // Limpa o storage anterior;
    // Cria uma lista de obj com o texto e class referentes a cada item da lista;
    [...ordenedList.children].map((children, index) => {
      const taskInfo = {
        class: children.className,
        text: children.innerHTML,
      };
      // Salva no localstorage: o indice da tarefa(keyName do LS) e seu obj respectivo transformado em string(keyValue do LS);
      localStorage.setItem(`${index}`, JSON.stringify(taskInfo));
      return true; // Lint: 'Expected to return a value in arrow function.'
    });
  });
}

// Load da lista salva:
// Fonte: https://github.com/tryber/sd-010-b-project-todo-list/blob/AlanTanaka-project-to-do-list/
// FOnte: https://www.w3schools.com/js/js_json_parse.asp
function loadTaskList() {
  // localStorage.forEach((task) => {
  //   const obj = JSON.parse(task);
  //   const taskLoad = document.createElement('li');
  //   taskLoad.innerHTML = obj.text;
  //   taskLoad.classList.add(obj.class);
  //   ordenedList.appendChild(taskLoad);
  // });
  for (let i = 0; i < localStorage.length; i += 1) {
    const obj = JSON.parse(localStorage[i]);
    const taskLoad = document.createElement('li');
    taskLoad.innerHTML = obj.text;
    taskLoad.className = obj.class;
    ordenedList.appendChild(taskLoad);
  }
}

window.onload = () => {
  addNewTask();
  selectTask();
  taskDone();
  clearAll();
  removeDone();
  removeTask();
  saveTaskList();
  loadTaskList();
};

// npm run cypress:open => eveluator job local
