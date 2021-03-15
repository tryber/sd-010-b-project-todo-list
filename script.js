const button = document.getElementById('criar-tarefa');
const iten = document.getElementById('texto-tarefa');
const list = document.getElementById('lista-tarefas');

// Requisito 5 e 6 criar uma lista ordenada de tarefas:
function addTask() {
  const task = document.createElement('li');
  list.appendChild(task).innerText = iten.value; // primeira ação: adicionar valor
  // Ajuda de colegas nas salas de estudo:
  iten.value = ''; // segunda ação: deixar o input em branco
}
button.addEventListener('click', addTask);

// Requisito 7 e 8 colocar Background em apenas um item ao clicar uma vez:
function changeBackgroundColor(event) {
  const selectedColor = document.querySelector('.grey');
  event.target.classList.add('grey');
  // Ajuda do Isaac no Plantão:
  if (selectedColor) selectedColor.classList.remove('grey');
}
list.addEventListener('click', changeBackgroundColor);

// Requisito 9 sublinhar tarefa ao clicar duas vezes:
// Entendimento da função toggle em: https://www.w3schools.com/howto/howto_js_toggle_class.asp
function lineThrough() {
  list.addEventListener('dblclick', function (event) {
  event.target.classList.toggle('completed');
  });
}
lineThrough();

// Requisito 10 apagar tudo ao clicar no botão:
const buttonClean = document.getElementById('apaga-tudo');
function cleanAll(){
  const itenTask = list.children;
  for (let index = itenTask.length - 1; index >= 0; index = index - 1) {
    itenTask[index].remove();
  }
}
buttonClean.addEventListener('click', cleanAll);

// Requisito 11 apagar finalizados ao clicar no botão:
const buttonComplete = document.getElementById('remover-finalizados');
function cleanCompleted(){
  const complete = document.getElementsByClassName('completed');
  for (let index = complete.length - 1; index >= 0; index = index - 1) {
    complete[index].remove();
  }
}
buttonComplete.addEventListener('click', cleanCompleted);
