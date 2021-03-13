const bodyChilds = document.body;

// requisito 1
bodyChilds.appendChild(document.createElement('header'));
document.querySelector('header').innerText = 'Minha Lista de Tarefas';

// requisito 2
const headerP = document.createElement('p');
bodyChilds.appendChild(headerP);
headerP.id = 'funcionamento';
headerP.innerText = 'Clique duas vezes em um item para marcá-lo como completo';

// requisito 3
const input = document.createElement('input');
bodyChilds.appendChild(input);
input.id = 'texto-tarefa';

// requisito 4
const olTasks = document.createElement('ol');
bodyChilds.appendChild(olTasks);
olTasks.id = 'lista-tarefas';

// requisito 5
const buttonIl = document.createElement('button');
bodyChilds.appendChild(buttonIl);
buttonIl.id = 'criar-tarefa';
buttonIl.innerText = 'Adicionar Tarefa';
buttonIl.addEventListener('click', function () {
  olTasks.appendChild(document.createElement('li'));
  olTasks.lastChild.innerText = input.value;
  olTasks.lastChild.classList.add('task');
  input.value = '';
});

/* requisito 6
??????? */

// requisito 7 & requisito 8
const getGrayElement = document.getElementsByClassName('GrayElement');
olTasks.addEventListener('click', function (event) {
  if (getGrayElement.length !== 1) {
    event.target.classList.add('GrayElement');
    getGrayElement[0].style.backgroundColor = 'rgb(128, 128, 128)';
  }
  getGrayElement[0].style.backgroundColor = 'white';
  getGrayElement[0].classList.remove('GrayElement');
  event.target.classList.add('GrayElement');
  getGrayElement[0].style.backgroundColor = 'rgb(128, 128, 128)';
});

// requisito 9
olTasks.addEventListener('dblclick', function (event) {
  event.target.classList.toggle('completed');
  if (event.target.classList.contains('completed')) {
    event.target.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
  } else {
    event.target.classList.remove('completed');
    event.target.style.textDecoration = 'initial';
  }
});

// requisito 10
const buttonClearAll = document.createElement('button');
bodyChilds.appendChild(buttonClearAll);
buttonClearAll.id = 'apaga-tudo';
buttonClearAll.innerText = 'Limpar Tudo';

buttonClearAll.addEventListener('click', function () {
  const tasks = document.querySelectorAll('.task');
  for (let counter = tasks.length - 1; counter >= 0; counter -= 1) {
    document.getElementsByTagName('ol')[0].removeChild((tasks[counter]));
  }
});

//requisito 11
const buttonClearComplete = document.createElement('button');
bodyChilds.appendChild(buttonClearComplete);
buttonClearComplete.id = 'remover-finalizados';
buttonClearComplete.innerText = 'Remover Finalizados';
buttonClearComplete.addEventListener('click', function () {
  const complete = document.querySelectorAll('.completed');
  for (let counter = complete.length - 1; counter >= 0; counter -= 1) {
    document.getElementsByTagName('ol')[0].removeChild(complete[counter]);
  }
});


//requisito 14
const removeSelected = document.createElement('button');
bodyChilds.appendChild(removeSelected);
removeSelected.id = 'remover-selecionado';
removeSelected.innerText = 'Remover Selecionado';
removeSelected.addEventListener('click', function() { 
  document.querySelector('ol').removeChild(document.getElementsByClassName('GrayElement')[0]);
});

const buttonSave = document.createElement('button');
document.body.appendChild(buttonSave);
buttonSave.id = 'salvar-tarefas';
buttonSave.innerText = 'salvar tarefas';
buttonSave.addEventListener('click', function (){
  const getOl = document.querySelector('ol').innerHTML;
    localStorage.setItem('item', getOl);
});
if(localStorage.item) {
  document.querySelector('ol').innerHTML = localStorage.item;
}
