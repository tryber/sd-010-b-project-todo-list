const leBoby = document.querySelector('body');

function addButtons(tag, tId, tInner) {
  const aux = document.createElement(tag);
  aux.id = tId;
  aux.innerText = tInner;
  leBoby.appendChild(aux);
}
addButtons('header', '', 'Minha Lista de Tarefas');
addButtons('p', 'funcionamento', 'Clique duas vezes em um item para marcá-lo como completo');
addButtons('input', 'texto-tarefa', '');
addButtons('button', 'criar-tarefa', 'Adicionar');
addButtons('ol', 'lista-tarefas', '');
addButtons('button', 'remover-selecionado', 'remover selecionado');
addButtons('button', 'mover-cima', 'mover-cima');
addButtons('button', 'mover-baixo', 'mover-baixo');
addButtons('button', 'remover-finalizados', 'Limpar Completos');
addButtons('button', 'apaga-tudo', 'Limpar Lista');
addButtons('button', 'salvar-tarefas', 'Salvar Lista');
const leOl = document.querySelector('#lista-tarefas');
function addLista() {
  const auxInput = document.querySelector('#texto-tarefa');
  if (auxInput.value !== '') {
    const auxLi = document.createElement('li');
    auxLi.innerText = auxInput.value;
    leOl.appendChild(auxLi);
    auxInput.value = '';
  }
}
function addClass(li, className) {
  if (Object.entries(className).length > 0) {
    const auxList = Object.values(className);
    auxList.forEach((itemClass) => {
      li.classList.add(itemClass);
    });
  }
}

if (localStorage.ListaSalva) {
  const aux = Object.entries(JSON.parse(localStorage.getItem('ListaSalva')));
  for (let i = 0; i < aux.length; i += 1) {
    const auxRecupera = document.createElement('li');
    const text = aux[i][1][0];
    auxRecupera.innerText = text;
    const classLis = aux[i][1][1];
    addClass(auxRecupera, classLis);
    leOl.appendChild(auxRecupera);
  }
}
const auxButton = document.querySelector('#criar-tarefa');
auxButton.addEventListener('click', addLista);

function clearCompleted() {
  const aux = document.querySelectorAll('li');
  for (let i = 0; i < aux.length; i += 1) {
    const auxSalveCom = aux[i].className.split(' ')[1];
    aux[i].className = `ncinca ${auxSalveCom}`;
  }
}
function pintarCinca(evento) {
  const aux = evento.target;
  const auxSalveCin = aux.className.split(' ')[0];
  const auxSalve = aux.className.split(' ')[1];
  clearCompleted();
  if (aux.className !== auxSalveCin) {
    aux.className = `cinca ${auxSalve}`;
  } else {
    aux.className = `ncinca ${auxSalve}`;
  }
}

leOl.addEventListener('click', pintarCinca);

function dbClick(event) {
  const aux = event.target;
  const auxSalve = aux.className.split(' ')[0];
  const auxSalveCom = aux.className.split(' ')[1];
  if (auxSalveCom !== 'completed') {
    aux.className = `${auxSalve} completed`;
  } else {
    aux.className = `${auxSalve} ncompleted`;
  }
}
leOl.addEventListener('dblclick', dbClick);
function apagaLista() {
  leOl.innerHTML = '';
}
function removeFinalizados() {
  const aux = document.querySelectorAll('.completed');
  for (let i = 0; i < aux.length; i += 1) {
    aux[i].remove();
  }
}
function salvarDados() {
  const auxLi = Array.from(document.querySelectorAll('li'));
  const aux = {};
  auxLi.forEach((li, index) => {
    aux[index] = [li.innerText, li.classList];
  });
  localStorage.setItem('ListaSalva', JSON.stringify(aux));
}
function removeSelecionado() {
  document.querySelector('.cinca').remove();
}

function moverCima() {
  const li = Array.from(document.querySelectorAll('li'));
  for (let key = 0; key < li.length; key += 1) {
    const position = li[key];
    console.log(position);
    if (li[key].classList.contains('cinca') && key > 0) {
      position.parentNode.insertBefore(position, li[key - 1]);
    }
  }
}
function moverBaixo() {
  const li = Array.from(document.querySelectorAll('li'));
  for (let key = li.length - 1; key >= 0; key -= 1) {
    const position = li[key];
    if (li[key].classList.contains('cinca') && key < li.length - 1) {
      console.log(position);
      position.parentNode.insertBefore(li[key + 1], position);
    }
  }
}
document.querySelector('#remover-selecionado').addEventListener('click', removeSelecionado);
document.querySelector('#apaga-tudo').addEventListener('click', apagaLista);
document.querySelector('#remover-finalizados').addEventListener('click', removeFinalizados);
document.querySelector('#salvar-tarefas').addEventListener('click', salvarDados);
document.querySelector('#mover-cima').addEventListener('click', moverCima);
document.querySelector('#mover-baixo').addEventListener('click', moverBaixo);
