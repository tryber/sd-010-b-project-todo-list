let clickButton = document.getElementById("criar-tarefa");

clickButton.addEventListener("click", criaLista);

function criaLista() {
    //Função para criar a lista ordenada
    let orderlist = document.querySelector('#lista-tarefas');
    let userlist = document.querySelector('#texto-tarefa').value;
    let li = document.createElement('li');
    li.textContent = userlist;
    orderlist.appendChild(li);

    document.querySelector('#texto-tarefa').value = "";
}