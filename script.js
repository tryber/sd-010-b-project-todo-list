function addNewTask() { //cria lista de tarefas apertando botao
  const getInputField = document.querySelector('#texto-tarefa'); 
  const addInputButton = document.querySelector('#criar-tarefa');
  const getTaskList = document.querySelector('#lista-tarefas');
  const eraseAllButton = document.querySelector('#apaga-tudo')

  eraseAllButton.addEventListener('click', function(event) {
    event.target.classList.removeChild('#lista-tarefas')
    
  })

  addInputButton.addEventListener('click', function() {
    if (getInputField.value.length > 0) {
      const newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
      newLi.addEventListener('click', function(event) {
        // pintar a li de cinza e despintar as outras se houver
        let selected = document.querySelector('.selected')
        if (selected != null) {
          selected.classList.remove('selected')
        }
        event.target.classList.add('selected')
      })
      newLi.addEventListener('dblclick', function(event){
        let completed = document.querySelector('.completed')
        event.target.classList.add('completed')
        if (completed != null) {
          newLi.addEventListener('dblclick' , function(event) {
            event.target.classList.remove('completed')
          })
        }
      })
      
    }    
      
  })
  
};

addNewTask();




