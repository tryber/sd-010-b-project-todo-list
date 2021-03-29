let clickButton = document.getElementById("criar-tarefa");
clickButton.addEventListener("click", criaLista);

function criaLista() {
    //Função para criar a lista ordenada
    let orderlist = document.querySelector('#lista-tarefas');
    let userlist = document.querySelector('#texto-tarefa').value;
    let li = document.createElement('li');
    li.textContent = userlist;
    orderlist.appendChild(li);
    li.className = "cinza";
    document.querySelector('#texto-tarefa').value = "";
    //Função pintar de cinza

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
    li.addEventListener("dblclick", function(tarefacompleta){
       if (li.className === "") {
           li.className = "completed";
       }
       else {
           li.className = "";
       }
        })
        let clickButton1 = document.getElementById("apaga-tudo");
        clickButton1.addEventListener("click", apagar);
        let listaitens = document.getElementsByTagName("li");
        function apagar() {
            for(let index = 0; index < listaitens.length; index +=1) {

            let element = listaitens[index]
            element.removeChild[index];

            }   
           

            


        }
    }



