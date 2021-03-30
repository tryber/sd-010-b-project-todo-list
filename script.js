//Salvar dados
function retornaDados() {
 let dados = localStorage.listadetarefas;
 if (dados !==undefined) {
let listadados = dados.split(',');
for (let i=0; i<listadados.length; i+=1)  {
let li = document.createElement('li');
li.className = "item-lista";
li.innerText = listadados[i];
document.querySelector('ol').appendChild(li);


}
 }
}
retornaDados();





let clickButton = document.getElementById("criar-tarefa");
clickButton.addEventListener("click", criaLista);

function criaLista() {
    
    let orderlist = document.querySelector('#lista-tarefas');
    let userlist = document.querySelector('#texto-tarefa').value;
    let li = document.createElement('li');
    li.textContent = userlist;
    orderlist.appendChild(li);
    li.className = "cinza";
    document.querySelector('#texto-tarefa').value = "";
    

    li.addEventListener("click", function(eventodeorigem) {
    let botaoclicado = eventodeorigem.target;
    let classe = document.querySelectorAll(".cinza");    
    for(let index = 0; index < classe.length; index +=1) {
    let itemclicado = classe[index]; 
    if (itemclicado != botaoclicado) {
        itemclicado.className = "cinza";
    }
    else {
        itemclicado.className = "cinza selected";
    }
    }
    })
    li.addEventListener("dblclick", function(){
        let teste = li.className;
        if (teste === "cinza selected") {
            li.className = "completed";
            teste = "completed";
            console.log(teste);
        }
        else if (teste === "completed") {
            li.className = "";
            teste = "";
        }
        })  
        

        










 }

      let clickButton1 = document.getElementById("apaga-tudo");
      clickButton1.addEventListener("click", apagar);
      
      function apagar () {
   let eraseList = document.querySelectorAll('li');
   for (let i = 0; i < eraseList.length; i++) {
    eraseList[i].remove();
}
}

let clickButton2 = document.getElementById("remover-finalizados");
clickButton2.addEventListener("click", apagarriscado);

function apagarriscado () {
let estariscado = document.querySelectorAll('li');
for (let i = 0; i < estariscado.length; i++) {
    if (estariscado[i].className === "completed")
    estariscado[i].remove();
}
}
//salvar

let clickButton3 = document.querySelector("#salvar-tarefas");
clickButton3.addEventListener("click", salvar);

function salvar () {
    let listadetarefas = document.querySelectorAll('li');
    let array = [];
    for (let i = 0; i < document.querySelectorAll('li').length; i+=1) {
        array[i] = listadetarefas[i].innerHTML;
    }
    localStorage.setItem('listadetarefas', array);
    }



    
let clickButton4 = document.getElementById("remover-selecionado");
clickButton4.addEventListener("click", apagarselecionado);
           
function apagarselecionado () {
    let estarselecionado = document.querySelectorAll('li');
    for (let i = 0; i < estarselecionado.length; i++) {
        if (estarselecionado[i].className === "cinza selected")
        estarselecionado[i].remove();
    }
    }



    let botaocima = document.getElementById("mover-cima");
    botaocima.addEventListener("click", movercima);

    function movercima () {
        let elemento = document.querySelector(".selected");
        if (elemento.previousElementSibling !== null) {
            let salvarTexto = elemento.previousElementSibling.innerText;
            elemento.previousElementSibling.innerText = elemento.innerText;
            elemento.innerText = salvarTexto;
            elemento.classList.remove("selected");
            elemento.previousElementSibling.classList.add("selected");


        }
    }
