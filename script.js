document.querySelector('#criar-tarefa').addEventListener('click', function () {
  task = document.querySelector('#texto-tarefa');
  taskList = document.querySelector('#lista-tarefas');
  generateLi = document.createElement('li');
  generateLi.innerHTML = task.value;
  taskList.appendChild(generateLi);
  task.value = '';
  generateLi.className = 'listItem';


  document.querySelectorAll('.listItem').forEach(function (item) {
    item.addEventListener('click', function (element) {
      if (document.querySelectorAll('.selectedItem').length > 0) {
        document.querySelectorAll('.selectedItem')[0].className = 'listItem';
      }
      element.target.className = 'selectedItem';
    });
  });
});


  document.getElementById('apaga-tudo').addEventListener('click', function () {
    while (document.getElementById('lista-tarefas').firstChild) {
      document.getElementById('lista-tarefas').removeChild(document.getElementById('lista-tarefas').firstChild);
    }
  });

