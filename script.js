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

let clickButton3 = document.getElementById("salvar-tarefas");
clickButton3.addEventListener("click", salvar);

function salvar () {
    let string = [];
    let stringcorreto = []
    let salvaritem = document.querySelectorAll('li');
    for(var i = salvaritem.length; i--; string.unshift(salvaritem[i]))
    for (let i = 0; i < salvaritem.length; i+=1) {
    stringcorreto[i] = document.getElementsByTagName('li')[i].textContent;
    }
    localStorage.setItem("valor", stringcorreto)
console.log(localStorage);
console.log(stringcorreto)  ;  
console.log(string);
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

