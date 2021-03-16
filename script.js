function adicionar() {
  const buttomList = document.querySelector('#criar-tarefa');
  buttomList.addEventListener('click', () => {
    const inputList = document.querySelector('#texto-tarefa');
    const listTexto = inputList.value;
    const tarefaItem = document.createElement('li');
    const listaTarefas = document.querySelector('#lista-tarefas');
    tarefaItem.innerHTML = listTexto;
    listaTarefas.appendChild(tarefaItem);
    inputList.value = '';
    inputList.focus();
  });
}
function trocarCinza() {
  const lista = document.querySelector('#lista-tarefas');
  const listaTamanho = lista.children;
  lista.addEventListener('click', (event) => {
      for (let procurar = 0; procurar < listaTamanho.length; procurar += 1) {
        const tem = listaTamanho[procurar].classList.contains('cor-cinza');
        if (tem) {
          listaTamanho[procurar].classList.remove('cor-cinza');
        }
      }
      (event).target.classList.add('cor-cinza');
  });
}
// ajuda do italo de mattos turma B
function doubleClick() {
  let listaTarefas = document.querySelector('#lista-tarefas');
  listaTarefas.addEventListener('dblclick', evento => {
    if (evento.target.classList.contains('completed')) {
      evento.target.classList.remove('completed');
    } else {
      evento.target.classList.add('completed');
   }
  });
}
function reset() {
  const apagaTudo = document.querySelector('#apaga-tudo');
  const li = document.querySelector('#lista-tarefas');
  apagaTudo.addEventListener('click', () => {
    li.innerHTML = '';
  });
}
function finalizados() {
  const finalizados = document.querySelector('#remover-finalizados');
  const ol = document.querySelector('#lista-tarefas');
  finalizados.addEventListener('click', () => {
    const completed = document.querySelectorAll('.completed');
    for (let index = 0; index < completed.length; index += 1) {
      ol.removeChild(completed[index]);
    }
  });
}
window.onload = function () {
  adicionar();
  trocarCinza();
  doubleClick();
  reset();
  finalizados();
};
