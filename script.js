let lista = document.getElementById('lista-tarefas')

let input = document.createElement('input')
input.id = 'texto-tarefa'
input.type = 'text'
input.value = ''
document.body.appendChild(input)

let botao = document.createElement('button')
botao.innerHTML = 'Add'
botao.id = 'criar-tarefa'
document.body.appendChild(botao)


let listaOrdenada = document.createElement('ol')
listaOrdenada.id = 'lista-tarefas'
document.body.appendChild(listaOrdenada)

botao.addEventListener('click', addlist)

listaOrdenada.addEventListener('click', selectItem)

listaOrdenada.addEventListener('dblclick', complete)

let clearButton = document.createElement('button')
clearButton.innerHTML = 'Clear'
clearButton.id = 'apaga-tudo'
document.body.appendChild(clearButton)
let apagar = document.getElementById('apaga-tudo')

apagar.addEventListener('click', clearAll)

let completeButton = document.createElement('button')
completeButton.id = 'remover-finalizados'
completeButton.innerHTML = 'Clear complete'
document.body.appendChild(completeButton)

let apagarCompletos = document.getElementById('remover-finalizados')

apagarCompletos.addEventListener('click', clearComplete)



//functions 

function addlist (){
    if (input.value === ''){
        alert('Você tem que digitar algo')
    } else {
        let createli = document.createElement('li')
        createli.innerHTML = document.getElementById('texto-tarefa').value;
        listaOrdenada.appendChild(createli)
        input.value = ''
    }
}

function selectItem (e){
    apagarClass()
    if (e.target.tagName == 'LI'){
        e.target.classList.add('selected')
    }
} 

function apagarClass(){
    let listaItens = listaOrdenada.childNodes;
    for (let i = 0; i < listaItens.length; i += 1){
        listaItens[i].classList.remove('selected')
    }
}

function complete(e){
    if (e.target.className == 'completed selected'){
        e.target.classList.remove('completed')
    } else if (e.target.tagName == 'LI'){
        e.target.classList.add('completed')
    }
}

function clearAll(){
    let lista = document.getElementsByTagName('li')
    let itens = lista.length
    for (let i = 0; i < itens; i += 1){
            lista[0].remove()
    }
}

function clearComplete(){
    let lista = document.getElementsByClassName('completed')
    let itens = lista.length
    for(let i = 0; i < itens; i += 1){
            lista[0].remove()
    }
}