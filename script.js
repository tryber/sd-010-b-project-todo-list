window.onload = function () {
  let addTask = null;
  let clearAll = null;
  let recoveredInput = null;
  let recoveredOl = null;
  let selectElement = null;
  let allTasks = null;
  let removeCompleted = null;
  let saveTasks = null;
  let moveElementUp = null;
  let removeSelected = null;

  startAplication();

  function createHeader() {
    // Etapa 01 - Adicione à sua lista o título "Minha Lista de Tarefas" em uma tag
    // Criando o Elemento Header
    const element = document.createElement('header');
    document.body.appendChild(element);

    // Criando o Elemento Titulo
    const title = document.createElement('h1');
    title.id = 'title';
    title.innerText = 'Minha Lista de Tarefas';
    element.appendChild(title);
  }

  function createInstructions() {
    // Etapa 02 - Adicione abaixo do título um pequeno e discreto parágrafo com id="funcionamento" e com o texto "Clique duas vezes em um item para marcá-lo como completo"
    // Criando uma section para guardar o titulo
    const element = document.createElement('section');
    document.body.appendChild(element);

    // Criando uma paragrafo elemento <p> dentro da section
    const elementP = document.createElement('p');
    elementP.id = 'funcionamento';
    elementP.innerText =
      'Clique duas vezes em um item para marcá-lo como completo';
    element.appendChild(elementP);
  }

  function createInput() {
    // Etapa 03 - Adicione um input com o id="texto-tarefa" onde a pessoa usuária poderá digitar o nome do item que deseja adicionar à lista
    // Criando uma section para guardar o input
    const element = document.createElement('section');
    document.body.appendChild(element);

    // Criando uma paragrafo elemento <p> dentro da section
    const elementInput = document.createElement('input');
    elementInput.id = 'texto-tarefa';
    element.appendChild(elementInput);

    recoveredInput = elementInput;
  }

  function createOrdenedList() {
    // Etapa 04 - Adicione uma lista ordenada de tarefas com o id="lista-tarefas"
    // Criando uma section para guardar a OL
    const elementSection = document.createElement('section');
    document.body.appendChild(elementSection);

    // Criando uma Lista Ordenada <OL> dentro da section
    const element = document.createElement('ol');
    element.id = 'lista-tarefas';
    elementSection.appendChild(element);
    recoveredOl = document.getElementById('lista-tarefas');
    selectElement = document.querySelector('#lista-tarefas');

    if (localStorage.getItem('tasks')) {
      recoveredOl.innerHTML = localStorage.getItem('tasks');
    }

    // Etapa 05 - Criando o botão Criar Tarefa
    // Criando um Botão <button> dentro da section
    const elementButton = document.createElement('button');
    elementButton.id = 'criar-tarefa';
    elementButton.innerText = 'Criar Tarefa';
    elementSection.appendChild(elementButton);
    addTask = document.getElementById('criar-tarefa');

    // Etapa 10 - Adicione um botão com id="apaga-tudo" que quando clicado deve apagar todos os itens da lista
    // Criando um Botão <button> dentro da section
    const elementButtonClear = document.createElement('button');
    elementButtonClear.id = 'apaga-tudo';
    elementButtonClear.innerText = 'Apaga Tudo';
    elementSection.appendChild(elementButtonClear);
    clearAll = document.getElementById('apaga-tudo');

    // Etapa 11 - Adicione um botão com id="remover-finalizados" que quando clicado remove somente os elementos finalizados da sua lista
    // Criando um Botão <button> dentro da section
    const elementRemoveCompleted = document.createElement('button');
    elementRemoveCompleted.id = 'remover-finalizados';
    elementRemoveCompleted.innerText = 'Remover Finalizados';
    elementSection.appendChild(elementRemoveCompleted);
    removeCompleted = document.getElementById('remover-finalizados');

    // Etapa 12 - Bonus - Adicione um botão com id="salvar-tarefas" que salve o conteúdo da lista. Se você fechar e reabrir a página, a lista deve continuar no estado em que estava
    // Criando um Botão <button> dentro da section
    const elementSalvarTarefas = document.createElement('button');
    elementSalvarTarefas.id = 'salvar-tarefas';
    elementSalvarTarefas.innerText = 'Salvar Tarefas';
    elementSection.appendChild(elementSalvarTarefas);
    saveTasks = document.getElementById('salvar-tarefas');

    // Etapa 12 - Adicione dois botões, um com id="mover-cima" e outro com id="mover-baixo", que permitam mover o item selecionado para cima ou para baixo na lista de tarefas
    // Criando um Botão <button> dentro da section
    const elementButtonUp = document.createElement('button');
    elementButtonUp.id = 'mover-cima';
    elementButtonUp.innerText = 'Mover Cima';
    elementSection.appendChild(elementButtonUp);
    moveElementUp = document.getElementById('mover-cima');

    const elementButtonDown = document.createElement('button');
    elementButtonDown.id = 'mover-baixo';
    elementButtonDown.innerText = 'Mover Baixo';
    elementSection.appendChild(elementButtonDown);
    moveElementDown = document.getElementById('mover-baixo');

    // Etapa 14 - Adicione um botão com id="remover-selecionado" que, quando clicado, remove o item selecionado
    // Criando um Botão <button> dentro da section
    const elementButtonRemoveSelected = document.createElement('button');
    elementButtonRemoveSelected.id = 'remover-selecionado';
    elementButtonRemoveSelected.innerText = 'Remover Selecionado';
    elementSection.appendChild(elementButtonRemoveSelected);
    removeSelected = document.getElementById('remover-selecionado');
  }

  function addItem(props) {
    const elementItem = document.createElement('li');
    elementItem.id = 'item';
    elementItem.className = 'opened';
    elementItem.innerText = props.value;
    elementItem.style.background = 'rgb(255, 255, 255)';
    recoveredOl.appendChild(elementItem);
    return true;
  }

  function defaultBackgroundItems() {
    allTasks = document.querySelectorAll('#item');
    for (let index = 0; index < allTasks.length; index++) {
      allTasks[index].style.backgroundColor = 'white';
    }
    return allTasks;
  }

  function atualizaStorage() {
    localStorage.removeItem('tasks');
    localStorage.setItem(
      'tasks',
      document.getElementById('lista-tarefas').innerHTML
    );
  }

  addTask.addEventListener('click', function () {
    if (addItem(recoveredInput)) {
      atualizaStorage();
      recoveredInput.value = '';
    }
  });

  removeCompleted.addEventListener('click', function () {
    allTasks = document.querySelectorAll('#item');
    for (let index = 0; index < allTasks.length; index++) {
      if (
        allTasks[index].classList.value === 'completed' ||
        allTasks[index].classList.value === 'completed itemSelected'
      ) {
        allTasks[index].parentNode.removeChild(allTasks[index]);
      }
    }
    atualizaStorage();
  });

  moveElementUp.addEventListener('click', function () {
    let item = verifyClickedItemUp();
    if (item !== null) {
      recoveredOl.insertBefore(item, item.previousElementSibling);
      atualizaStorage();
    }
  });

  moveElementDown.addEventListener('click', function () {
    let item = verifyClickedItem();
    if (item != null) {
      try {
        recoveredOl.insertBefore(item.nextElementSibling, item);
        atualizaStorage();
      } catch (error) {}
    }
  });

  function verifyClickedItemUp() {
    allTasks = document.querySelectorAll('#item');
    let retorno = null;
    for (let index = 0; index < allTasks.length; index++) {
      if (
        allTasks[index].className === 'opened itemSelected' ||
        allTasks[index].className === 'completed itemSelected'
      ) {
        if (index > 0 && index <= allTasks.length) {
          retorno = allTasks[index];
          break;
        }
      }
    }
    return retorno;
  }

  function verifyClickedItem() {
    allTasks = document.querySelectorAll('#item');
    let retorno = null;
    for (let index = 0; index < allTasks.length; index++) {
      if (
        allTasks[index].className === 'opened itemSelected' ||
        allTasks[index].className === 'completed itemSelected'
      ) {
        retorno = allTasks[index];
        break;
      }
    }
    return retorno;
  }

  clearAll.addEventListener('click', function () {
    allTasks = document.querySelectorAll('#item');
    for (let index = 0; index < allTasks.length; index++) {
      allTasks[index].parentNode.removeChild(allTasks[index]);
    }
    atualizaStorage();
  });

  function unselctItem(props) {
    allTasks = document.querySelectorAll('#item');
    for (let index = 0; index < allTasks.length; index++) {
      if (allTasks[index] != props) {
        if (allTasks[index].className === 'opened itemSelected') {
          allTasks[index].className = 'opened';
        } else if (allTasks[index].className === 'completed itemSelected') {
          allTasks[index].className = 'completed';
        }
      }
    }
  }

  selectElement.addEventListener('click', function (props) {
    defaultBackgroundItems();
    props.target.style.background = 'rgb(128, 128, 128)';
    if (props.target.className === 'completed') {
      props.target.className = 'completed itemSelected';
    } else if (props.target.className === 'opened') {
      props.target.className = 'opened itemSelected';
    }
    unselctItem(props.target);
  });

  saveTasks.addEventListener('click', function () {
    alert('Itens Salvos');
    localStorage.setItem(
      'tasks',
      document.getElementById('lista-tarefas').innerHTML
    );
    atualizaStorage();
  });

  removeSelected.addEventListener('click', function () {
    let item = verifyClickedItem();
    if (item != null) {
      item.parentNode.removeChild(item);
      atualizaStorage();
    }
  });

  selectElement.addEventListener('dblclick', function (props) {
    if (
      props.target.classList.value === 'opened itemSelected' ||
      props.target.classList.value === 'opened'
    ) {
      props.target.classList = 'completed itemSelected';
    } else {
      props.target.classList = 'opened itemSelected';
    }
    atualizaStorage();
  });

  function startAplication() {
    createHeader();
    createInstructions();
    createInput();
    createOrdenedList();
  }
};
