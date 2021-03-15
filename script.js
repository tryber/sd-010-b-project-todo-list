const things = document.getElementById('lista-tarefas');
const content = document.getElementById('texto-tarefa');
const button = document.getElementById('criar-tarefa');

function recebeClick() {
  const item = document.createElement('li');
  things.appendChild(item);
  item.innerHTML = content.value;
  item.className = 'whatToDo';
  item.addEventListener('dblclick', function (evento) {
   if (evento.target.className === 'completed') {
      evento.target.className = 'notCompleted'
   } else {
   evento.target.className = 'completed';}
  });
  item.addEventListener('click', function (event) {
    const Col = getComputedStyle(event.target);
    const or = Col.backgroundColor;
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  });
  content.value = '';
}
button.addEventListener('click', recebeClick);

// Exercicio 10
const clear = document.getElementById('apaga-tudo');// atribui na constante clear o elemento button de apagar tudo
const rem = document.getElementById('lista-tarefas');// atribui na constante rem a tag ol

function erase() {
  const posted = document.querySelectorAll('.whatToDo');
  for (let index = 0; index < posted.length; index += 1) {
  rem.removeChild(posted[index]);
  }
}
clear.addEventListener('click', erase);
erase();
