function criarTarefa() {
  let addtext = document.getElementById('texto-tarefa').value;
  let list = document.getElementById('lista-tarefas');
  let li = document.createElement('li');
  list.appendChild(li).innerHTML = addtext;
  limpaInput();
}

function botaoAdd() {
  let button = document.getElementById('criar-tarefa');
  button.addEventListener('click', criarTarefa);
}
botaoAdd();

function limpaInput() {
  document.getElementById('texto-tarefa').value = '';
}

// Mudar o beackground para cinza
function changeColor() {
  let addList = document.querySelector('#lista-tarefas');
  addList.addEventListener('click', function (event) {
    let elementCinza = document.querySelector('.cinza');
    if (elementCinza) {
      elementCinza.classList.remove('cinza');
    }
    event.target.classList.add('cinza');
  })
}
changeColor();

// Riscar elemento
function riscaList() {
  let addList = document.querySelector('#lista-tarefas');
  addList.addEventListener('dblclick', function (event) {
    let elementRiscado = document.querySelector('.completed');
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  })
}
riscaList();

// Botão limpar lista
function clearList() {
  let buttonLimpar = document.getElementById('apaga-tudo');
  let listaPai = document.getElementById('lista-tarefas');
  buttonLimpar.addEventListener('click', function () {
    while (listaPai.firstChild) {
      listaPai.removeChild(listaPai.firstChild);
    } //Removendo todos os nós filhos de um elemento
  });

}
clearList();

// Bot]ao Limpar Completados; 
function buttonCompleted() {
  let itemCompleted = document.querySelectorAll('.completed');
  for (let i = 0; i < itemCompleted.length; i += 1) {
    if (itemCompleted[i].parentNode) {
      itemCompleted[i].parentNode.removeChild(itemCompleted[i]);
      // Removendo um elemento específico sem precisar especificar seu pai
    }
  }
}

function clearCompleted() {
  let buttonLimpar = document.getElementById('remover-finalizados');
  buttonLimpar.addEventListener("click", buttonCompleted);
}
clearCompleted();

