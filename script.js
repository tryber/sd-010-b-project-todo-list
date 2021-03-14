// ouvindo o botão add
document.getElementById('criar-tarefa').addEventListener('click', addItem)
// ouvindo o botão  todos
document.getElementById('apaga-tudo').addEventListener('click', deleteAll)
// ouvindo o botão remove concluidos
document.getElementById('remover-finalizados').addEventListener('click', deleteDone)
// ouvindo o botão save
document.getElementById('salvar-tarefas').addEventListener('click', save)
// ouvindo o botão up
document.getElementById('mover-cima').addEventListener('click', moveUp)
// ouvindo o botão down
document.getElementById('mover-baixo').addEventListener('click', moveDown)
// ouvindo o botão remover-selecionado
document.getElementById('remover-selecionado').addEventListener('click', removeSelected)





// ====== FUNCOES ======
function addItem(){
    let list = document.getElementById('lista-tarefas');
    let li = document.createElement('li');
    li.innerText = document.getElementById('texto-tarefa').value;
    li.className = 'item';
    document.getElementById('texto-tarefa').value = "";
    list.appendChild(li);
}   

function completeTask(event){
            if (event.target.classList.contains('completed')) {
                event.target.classList.remove('completed');
            } else { event.target.classList.add('completed');}
}

function changeColor(event){

    if (event.target.classList.contains('selected')) {
        event.target.classList.remove('selected');
    } else { event.target.classList.add('selected');}

    const itemList = document.querySelectorAll('ol li')
    for (let index = 0; index < itemList.length; index++ ) {
            itemList[index].style.backgroundColor = 'rgb(256, 256, 256)';
      }
    event.target.style.backgroundColor = 'rgb(128, 128, 128)'
}

function itensListener(){
    const itemList = document.querySelectorAll('ol')
    for(let index = 0; index < itemList.length; index++){
    itemList[index].addEventListener('click', changeColor)
    itemList[index].addEventListener('dblclick', completeTask)
    }
}

itensListener()

function deleteAll() {
    const itemList = document.querySelectorAll('.item')
    for (let index = 0; index < itemList.length; index++ ) {
        itemList[index].remove()
      }
}

function deleteDone(){
    const itemList = document.querySelectorAll('.completed')
    for (let index = 0; index < itemList.length; index++ ) {
        itemList[index].remove()
      }
}

function save(){
    let listOl = document.getElementById('lista-tarefas').innerHTML;
    localStorage.itens = listOl;
    alert('Lista salva');
}


function load() {
    if (localStorage.itens) {
      document.getElementById('lista-tarefas').innerHTML = localStorage.itens;
    }
  }
  
  load();


  function moveUp(){

    const selectedLi = document.querySelectorAll('li');
    for (let i = 1; i < selectedLi.length; i += 1) {
      if (selectedLi[i].style.backgroundColor === 'rgb(128, 128, 128)') {
        selectedLi[i].parentNode.insertBefore(selectedLi[i], selectedLi[i].previousSibling);
      }
    }
  }

  function moveDown(){
    const selectedLi = document.querySelectorAll('li');
    for (let i = 0; i < selectedLi.length - 1; i += 1) {
      if (selectedLi[i].style.backgroundColor === 'rgb(128, 128, 128)') {
        const next = selectedLi[i].nextElementSibling.nextSibling;
        selectedLi[i].parentNode.insertBefore(selectedLi[i], next);
      }
    }
  }

  function removeSelected(){
    const lisSelected = document.querySelectorAll('li');
    lisSelected.forEach((e) => {
      if (e.style.backgroundColor === 'rgb(128, 128, 128)') {
        e.remove();
      }
    })
  }



  