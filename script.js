let cab = document.getElementById('cabecalho');
let header = document.createElement('header');
header.innerHTML = 'Minha Lista de Tarefas';
header.setAttribute('id', 'header');
cab.appendChild(header);

let par = document.createElement('p');
par.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';;
par.id = 'funcionamento';
header.appendChild(par);

let ent = document.getElementById('entrada');
let input = document.createElement('input');
input.id = 'texto-tarefa';
ent.appendChild(input);

let list = document.getElementById('list');
let item = document.createElement('ol');
item.id = 'lista-tarefas';
list.appendChild(item);

let btn = document.createElement('button');
btn.id = 'criar-tarefa';
btn.textContent = 'Clique aqui';
ent.appendChild(btn); 

let btnDel = document.createElement('button');
btnDel.id = 'apaga-tudo';
btnDel.textContent = 'Apagar Itens';
btn.appendChild(btnDel);

function tarBtn(){
    let btn = document.getElementById('criar-tarefa');
    btn.addEventListener('click' , tarefas )
}
tarBtn();
 function tarefas(){
     let tasks = document.getElementById('texto-tarefa').value;
     if (tasks !== '') {
     let addIt = document.createElement('li');
     addIt.classList.add('selected')
     item.appendChild(addIt).innerText = tasks;
     clear();    
    }
}
 tarefas();
 function changeBackgroundColor(li){
    li.addEventListener('click', function(event){   
        let listArray = document.querySelectorAll("li");
        if(event.target.style.backgroundColor !== 'rgb(128, 128, 128)'){
            event.target.style.backgroundColor = 'rgb(128, 128, 128)';
            eventX = event.target;
        }
        else{ 
        }
        for(let index1 = 0; index1 < listArray.length; index1++){
            if(listArray[index1] !== event.target){
                listArray[index1].style.backgroundColor = 'white';
            }
        }
    })   
}   
    clear();

function clear() {
    document.getElementById('texto-tarefa').value = '';
}

btnDel.addEventListener('click', Deletar);
function Deletar(){
        item.innerHTML = "";
}
Deletar();
//tarefas();
//tarBtn();
changeBackgroundColor(item);
      
