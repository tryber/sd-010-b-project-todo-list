/*código executado por interação entre os estudantes 
Rafael Mathias, Lotar Lucas, Renan Braga, Felippe Correa,
com colaboração do Gustavo Cerqueira e Matheus Gois.
*/

const task = document.getElementById('texto-tarefa');
const btnCriaTarefa = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');
const btnLimpar = document.querySelector('#apaga-tudo');
const btnRemoverFinalizadas = document.querySelector('#remover-finalizados');
const btnSalvaLista = document.querySelector('#salvar-tarefas');
const btnMoverCima = document.querySelector('#mover-cima');
const btnMoverBaixo = document.querySelector('#mover-baixo');

function selectLi(event) {
  const listLi = document.querySelectorAll('.tarefa');
  for (let i = 0; i < listLi.length; i += 1) {
    if (listLi[i].classList.contains('selected')) {
      listLi[i].classList.remove('selected');
    }
    event.target.classList.add('selected');
  }
}

/* pesquisa toggle */
function mark(event) {
  event.target.classList.toggle('completed');
}

function criarTarefa() {
  const novoItem = document.createElement('li');
  novoItem.className = 'tarefa';
  novoItem.addEventListener('click', selectLi);
  novoItem.addEventListener('dblclick', mark);
  novoItem.innerText = task.value;
  if (!task.value.trim()) {
    return alert('Adicione uma tarefa');
  }
  list.appendChild(novoItem);
  task.value = '';
  task.focus();
}

btnCriaTarefa.addEventListener('click', criarTarefa);
window.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    criarTarefa();
  }
});

btnLimpar.addEventListener('click', () => {
  list.innerHTML = '';
});

btnRemoverFinalizadas.addEventListener('click', () => {
  const array = document.querySelectorAll('.completed');
  for (let index = 0; index < array.length; index += 1) {
    list.removeChild(array[index]);
  }
});
const storage = localStorage;

btnSalvaLista.addEventListener('click', () => {
  storage.setItem('lista', list.innerHTML);
});

window.onload = () => {
  list.innerHTML = storage.getItem('lista');
  const listChild = list.children;
  for (let index = 0; index < listChild.length; index += 1) {
    const element = listChild[index];

    element.addEventListener('click', selectLi);
    element.addEventListener('dblclick', mark);
  }
};

// btnMoverCima  btnMoverBaixo

btnMoverCima.addEventListener('click', () => {
  document.querySelector('.selected');
});
