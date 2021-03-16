// let listItems = ['item um', 'item dois', 'item tres', 'item quatro', 'item cinco'];
let listItems =  JSON.parse(localStorage.getItem('Items')) || [];

// referencia do botao Adicionar
const btn = document.querySelector('#criar-tarefa');
// referencia do input
const input = document.querySelector('#texto-tarefa');
// lista ordenada 
const orderList = document.querySelector('#lista-tarefas');
// referencia do botão Limpar Lista
const btnCleanList = document.querySelector('#apaga-tudo');
// referencia do botão Limpar Completos
const btnCleanFinished = document.querySelector('#remover-finalizados');
// referencia do botão Salvar Lista
const btnSaveList = document.querySelector('#salvar-tarefas');

function saveList() {
  btnSaveList.addEventListener('click', () => {
    console.log('clicou')
    localStorage.setItem('Items', JSON.stringify(listItems));
  })
}

function CleanFinished() {
  btnCleanFinished.addEventListener('click', () => {
    let finished = document.querySelectorAll('.completed');
    for (let i = 0; i < finished.length; i += 1) {
      // remove o item do array de listItens
      for (let j = 0; j < listItems.length; j += 1) {
        if (finished[i].innerText === listItems[j].item) {
          listItems.splice(j, 1)
        }
      }
      // remove o item da lista ordenada
      orderList.removeChild(finished[i]);
    }
  })
}

// criar ação no botão "Limpar Lista"
btnCleanList.addEventListener('click', () => {

  // Limpa lista na tela;
  orderList.innerHTML = '';

  // Limpa o array listItems;
  listItems = []
})

// criar ação no botão "Adicionar"
btn.addEventListener('click', () => {

  let newItem = input.value;

  let obj = {
    item: newItem,
    class: 'new-item-list'
  }
  listItems.push(obj);

  showUpList();
})

function readItensList() {
  let listas = document.querySelectorAll('li');
  listItems = [];
  for (let i = 0; i < listas.length; i += 1) {
    let obj = {
      item: listas[i].innerText,
      class: listas[i].className
    }
    listItems.push(obj);
  }

}

// Função que com o click duplo faz o item ficar tachado;
function doubleClickCheck(lista) {
  // console.log('lista')
  lista.addEventListener('dblclick', () => {
    // console.log('clicado duas vezes');
    if (lista.style.backgroundColor === 'rgb(128, 128, 128)' && lista.className !== 'completed') {
      lista.setAttribute('class', 'completed');
    } else if (lista.style.backgroundColor === 'rgb(128, 128, 128)' && lista.className === 'completed') {
      lista.setAttribute('class', 'new-item-list')
    }
    readItensList();
  })

}

// Função quer muda a cor de fundo quando clicado o item;
function changeBackground(lista) {

  // Captura evento de click sobre a lista;
  lista.addEventListener('click', () => {

    // Array com os item da lista, pego pela classe .new-item-list;
    const itemsList = document.querySelectorAll('.new-item-list');

    // Loop-for sobre o array itemList;
    for (let i = 0; i < itemsList.length; i += 1) {

      // atribui background white para TODOS os itens do array itemList;
      itemsList[i].style.backgroundColor = "white";
    }

    // se background diferente de cinza atribuir background cinza;
    if (lista.style.backgroundColor !== 'rgb(128, 128, 128)') {
      lista.style.backgroundColor = 'rgb(128, 128, 128)';
    }
  })
}

// Função quer mostra a lista na tela;
function showUpList() {

  orderList.innerHTML = '';

  for (line of listItems) {

    // criar elemento de lista
    const lista = document.createElement('li');

    // colocar atributo de classe no elemento de lista
    lista.setAttribute('class', line.class);

    // atribui o texto digitado no input ao texto do elemento de lista
    lista.innerText = line.item;

    // adiciona o elemento de lista dentro da lista ordenada
    orderList.appendChild(lista);

    // limpa o input
    input.value = '';

    changeBackground(lista);
    doubleClickCheck(lista);
    CleanFinished();
    saveList();
  }
}

showUpList();
