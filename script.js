/*
   Essa função recebe um texto, cria um element li, altera sua classe para 'task', adiciona o texto da tarefa e o retorna.
  */
function createTask(text) {
  const task = document.createElement('li'); // cria um element li e armazena em task
  task.className = 'task'; // altera a classe do element para 'task'
  task.innerHTML = text; // adiciona o texto da tarefa em task
  return task; // retorna o element criado
}

/*
   Essa função insere a tarefa digitada na caixa de texto em lista de tarefas.
  */
function insertTask() {
  // obtem a caixa de texto e armazena em input
  const input = document.getElementById('texto-tarefa');

  // obtem o elemento id "lista-tarefas" e armazena em lista
  const lista = document.getElementById('lista-tarefas');

  if (input.value !== '') { // se há texto digitado na caixa de texto
    const task = createTask(input.value); // cria uma tarefa e adiciona em task
    lista.appendChild(task); // a task é adicionada como filha em lista de tarefas
    input.value = ''; // limpa o texto da caixa de texto.
  }
}

/*
   Essa função uma string de cor rgb e se houver uma task que possua essa cor de background, ela será retornada.
  */
function selectTaskWithBackgroundColor(color) {
  // obtem todos os elementos task e armazena em taskElementsList
  const taskElementsList = document.querySelectorAll('.task');
  let selectTask = null; // inicializa com null a task

  // para cada elemento task na lista
  taskElementsList.forEach((task) => {
    // se o background do elemento for cinza
    if (task.style.backgroundColor === color) {
      selectTask = task; // armazena o elemento em selecTask
    }
  });

  return selectTask; // retorna null ou a task selecionada
}

/*
   Essa função recebe o evento disparado por um elemento da classe task, obtem esse elemento e altera a cor de fundo para cinza.
  */
function changeTaskBackgroundColor(event) {
  const task = event.target; // armazena o elemento task que disparou o evento

  // verifica se há elemento task selecionado (cor de fundo cinza) e armazena em currentTask
  const currentTask = selectTaskWithBackgroundColor('rgb(128, 128, 128)');

  if (currentTask) {
    // se há elemento selecionado currentElementColor !== null
    currentTask.style.backgroundColor = task.style.backgroundColor; // remove a cor de fundo cinza do elemento task atual
  }

  // altera o backgroundColor do elemento task para cinza rgb(128,128,128)
  task.style.backgroundColor = 'rgb(128, 128, 128)';
}

/*
   Essa função recebe o evento disparado por um elemento da classe task e obtem esse elemento. Caso esteja riscada (completada), retira a classe completed dela. Caso contrário, acrescenta a classe completed ao elemento que disparou o evento.
  */
function taskCompletedOrNot(event) {
  const task = event.target; // armazena o elemento task que disparou o evento

  // Se task estiver riscada (completada), retira a classe completed dela. Caso contrário, acrescenta a classe completed à task.
  task.classList.toggle('completed');
}

/*
   Essa função executa a configuração relacionada aos eventos, como por exemplo, escutadores de eventos.
  */
function setupEvents() {
  // obtem o elemento de id criar-tarefa e armazena em button
  const button = document.querySelector('#criar-tarefa');

  // adiciona um escutador de evento click que dispara a function insertTask para elemento de id criar-tarefa
  button.addEventListener('click', insertTask);

  // obtem o elemento ol e armazena em taskList
  const taskList = document.querySelector('#lista-tarefas');

  // adiciona um escutador de eventos "click" que dispara a function changeTaskBackgroundColor ao pai dos elementos task (elemento ol)
  taskList.addEventListener('click', changeTaskBackgroundColor);

  // adiciona um escutador de eventos "dblclick" que dispara a function taskCompletedOrNot ao pai dos elementos task (elemento ol)
  taskList.addEventListener('dblclick', taskCompletedOrNot);
}
/*
   Essa função executa a function init para carregar valores e adicionar escutador de evento click que dispara a function insertTask.

   Material consultado sobre o loop forEach
   https://www.w3schools.com/jsref/jsref_foreach.asp

   Material consultado sobre arrow functions
   https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions
   https://www.w3schools.com/js/js_arrow_function.asp
  */
window.onload = function init() {
  // define uma função init para carregar valores e realizar setup relacionado a eventos
  setupEvents(); // realiza setup relacionado a eventos.
};
