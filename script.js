let getButton = document.getElementById('criar-tarefa');
let getTexto = document.getElementById('texto-tarefa');
let getOL = document.getElementById('lista-tarefas');

getButton.addEventListener('click',function(){
let createLi = document.createElement('li');
    createLi.classList = 'lista';
    createLi.innerText = getTexto.value;
    getOL.appendChild(createLi);
    getTexto.value = '';
});

getOL.addEventListener('click', function(event){
    let getLista = document.getElementsByClassName('lista');
    for(let index = 0; index < getLista.length; index+=1){
        console.log(index);
        getLista[index].classList.remove('cinza');
        event.target.classList.add('cinza');
    }
});

getOL.addEventListener('dblclick', function(event){
    let getLista = document.getElementsByClassName('lista');
        if(event.target.classList.contains('completed')) {
        event.target.classList.remove('completed')
        } else {
            event.target.classList.add('completed')
        };
});        

//em quanto
let getClear = document.getElementById('apaga-tudo');
getClear.addEventListener('click', function(){
    while(getOL.firstChild) {
        getOL.removeChild(getOL.firstChild)
    }
});

let getFinish = document.getElementById('remover-finalizados');
getFinish.addEventListener('click', function(){
    let getCompletedAll = document.querySelectorAll('.completed');
    for (let index = 0; index < getCompletedAll.length; index += 1) {
        if (getCompletedAll[index].classList.contains('completed')) {
            getOL.removeChild(getCompletedAll[index]);
        }
    }
});

// Agradecimentos aos Sites https://www.horadecodar.com.br/2020/12/15/como-pegar-valor-de-input-com-javascript/ ; https://cursos.alura.com.br/forum/topico-limpando-a-caixa-de-texto-20395
//Agradecimentos ao Daniel Roberto Turma 10 Tribo B