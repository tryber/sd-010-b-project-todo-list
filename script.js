let button = document.getElementById('criar-tarefa');
let lista = document.getElementById('lista-tarefas');
let input = document.getElementById('texto-tarefa');
button.addEventListener('click', function(){
var ordenalista = document.createElement('ol')
ordenalista.innerText = input.value;
lista.appendChild(ordenalista);
input.value = "";
ordenalista.addEventListener('click', function(){
//ordenalista.style.backgroundColor = " rgb(128,128,128)";
})
})

//teste