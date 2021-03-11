function botaoEnviar() {
  const pai = document.getElementById('criar-tarefa');

  pai.addEventListener('click', function () {
    const input = document.getElementById('texto-tarefa');
    const lista = document.getElementById('lista-tarefas');
    const element = document.createElement('li');
    element.classList = 'item';
    element.innerHTML = input.value;
    lista.appendChild(element);
      
    input.value = '';
  });
}
botaoEnviar();

function selectedClass() {
  const pai = document.getElementById('lista-tarefas');

  pai.addEventListener('click', function(event) {
    const filho = document.getElementsByClassName('item');
    for (i = 0; i < filho.length; i += 1){  
   
      if (filho[i].classList.contains('selected')) {
        filho[i].classList.remove('selected');
        filho[i].style.backgroundColor = 'white';
      } 
      event.target.classList.add('selected');
      
    }         

    let batata = document.getElementsByClassName('item selected')[0];
    batata.style.backgroundColor = 'rgb(128, 128, 128)';
  })
}
selectedClass()



function completedClass() {

  const pai = document.getElementById('lista-tarefas');

  pai.addEventListener('dblclick', function (event) {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  }); 


  
} completedClass()
  


