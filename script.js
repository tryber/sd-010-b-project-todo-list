function getList() {
    let getButton = document.querySelector('#criar-tarefa');
    let getOl = document.querySelector('#lista-tarefas');
    let getInput = document.querySelector('#texto-tarefa');

        getButton.addEventListener('click', function() {
            let creationLi = document.createElement('li')
            getOl.appendChild(creationLi).innerHTML = getInput.value
            getInput.value = '';
    })
}
getList()

function changeColor() { 
let changeClass = document.querySelector('ol');
changeClass.addEventListener('click', function(evt) {
    let selected = document.querySelector('.selected')
    // Fiz uma pesquisa sobre a utilização das propriedades do ClassList no:
    // https://www.w3schools.com/jsref/prop_element_classlist.asp
    if(selected != null){
        document.querySelector('.selected').classList.remove('selected');
    } 
        evt.target.classList.add('selected')
})
}
changeColor()

function completed() {
    let getLi =  document.querySelector('#lista-tarefas')
    getLi.addEventListener('dblclick', function(evt){
        evt.target.classList.toggle('completed')
    })
}
completed()

function removeLi() {
    let getButton = document.querySelector('#apaga-tudo')
    getButton.addEventListener('click', function(){
        let getLis = document.querySelectorAll('#lista-tarefas>li')
        for(let index = 0; index < getLis.length ; index+=1){
            let li = getLis[index]
            li.parentNode.removeChild(li)
        }
    })
}
removeLi()

function removeComplet() {
    let getButton = document.querySelector('#remover-finalizados')
    getButton.addEventListener('click', function(){
        let getLis = document.querySelectorAll('#lista-tarefas>li')
        for(let index = 0; index < getLis.length ; index+=1){
            let li = getLis[index]
            if(li.className == 'completed selected' || li.className == 'selected completed' || li.className == 'completed'){
                li.parentNode.removeChild(li)
            }
        }
    })
}
removeComplet()