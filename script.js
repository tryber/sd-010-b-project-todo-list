function criaTarefa () {
    let entrada = document.getElementById('texto-tarefa');
    if(entrada.value == ""){
        alert('Insira uma tarefa!');
    } else {
        criaLi(entrada.value);
        entrada.value = "";
    }
    mudaCorItem();
}

function criaLi (valor) {
    let ul = document.getElementById('lista-tarefas');

    let elementoLi = document.createElement('li');
    elementoLi.innerText = valor;
    elementoLi.className = 'item';
    ul.append(elementoLi);
    elementoLi.addEventListener('dblclick', function(evento){
        toggleClasseCompleted(evento.target);
    });
    
// Com ajuda de uma pessoa desenvolvedora
//     cria.addEventListener('click', function(evt){
//         console.log('ooi')
//         evt.target.style.backgroundColor = 'rgb(128, 128, 128)';
//     });
}

function mudaCorItem () {
    let pegaLi = document.querySelectorAll('.item');

    for (i =0; i < pegaLi.length; i += 1){
        pegaLi[i].addEventListener('click', function(evt) {
            evt.target.style.backgroundColor = 'rgb(128, 128, 128)';
        });
    }
}
mudaCorItem();

// o toggle verifica se existe um classe específica dentro do classList, se existir ele irá remove-la, senão irá adiciona-la.
function toggleClasseCompleted (elemento) {
    elemento.classList.toggle('completed');
}

function apagaTodosItens () {
    let elementoPai = document.getElementById('lista-tarefas');
// referência tirada do site https://qastack.com.br/programming/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
    while (elementoPai.firstChild) {
        elementoPai.removeChild(elementoPai.lastChild);
    }
}

function removeFinalizados () {
  let lista = document.querySelectorAll('li');
  let elementoPai = document.getElementById('lista-tarefas');
  
  for (let index = 0; index < lista.length; index += 1) {
    if (lista[index].classList.contains('completed') === true) {
      elementoPai.removeChild(lista[index]);
    }
  }
}
