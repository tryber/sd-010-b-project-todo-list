const button = document.querySelector('#criar-tarefa');
const inputtext = document.querySelector('#texto-tarefa');
const list = document.querySelector('#lista-tarefas');
const clear = document.getElementById('apaga-tudo');

function additen() {
  const iten = document.createElement('li');
  iten.innerText = inputtext.value;
  iten.className = 'task';
  list.appendChild(iten);
  inputtext.value = '';
}

button.addEventListener('click', additen);

function selectElement(event) {
  const selecteditens = document.querySelectorAll('.task');
  for (let i = 0; i < selecteditens.length; i += 1) {
    selecteditens[i].style.backgroundColor = '';
  }
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}
list.addEventListener('click', selectElement);



function dellete() {
  list.innerHTML = '';
}

clear.addEventListener('click', dellete);