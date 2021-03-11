const button = document.getElementById('criar-tarefa');
const ol = document.getElementById('lista-tarefas');
const textos = document.getElementById('texto-tarefa');

function creatElement() {
  button.addEventListener('click', () => {
    const newElement = document.createElement('li');
    newElement.innerText = textos.value;
    newElement.className = 'tasks';
    ol.appendChild(newElement);
    textos.value = '';
    textos.focus();
  });
}
//
//

creatElement();

const li = document.getElementsByClassName('tasks');

function changeLi() {
  for (let index = 0; index < li.length; index += 1) {
    ol.addEventListener('click', (event) => {
      if (li.length > 0) {
        li[index].classList.remove('listSelected');
        event.target.classList.add('listSelected');
      }
    });
  }
}

button.addEventListener('click', changeLi);
//

ol.addEventListener('dblclick', (event) => {
  event.target.classList.toggle('completed');
});

// button.addEventListener('click', checkList);
// 10
const reset = document.getElementById('apaga-tudo');
const listaTarefas = document.getElementById('lista-tarefas');
function removeTask() {
  for (let index = li.length; index >= 1; index -= 1) {
    listaTarefas.removeChild(li[0]);
  }
}
reset.addEventListener('click', removeTask);

// 11

function removeFinished() {
  const removerFinalizados = document.getElementById('remover-finalizados');

  const completed = document.getElementsByClassName('completed');
  removerFinalizados.addEventListener('click', () => {
    for (let index = 0; index < completed.length; index += 1) {
      ol.removeChild(completed[0]);
      // completed[index].remove();
    }
  });
}

// removeFinished()
button.addEventListener('click', removeFinished);
