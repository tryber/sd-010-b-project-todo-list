function criarTarefa() {
    let pegaTextoTarefa = document.getElementById("texto-tarefa").value;
    let pegaLista = document.getElementById("lista-tarefas");
    let criarItemDaLista = document.createElement("li");
    criarItemDaLista.innerText = pegaTextoTarefa;
    criarItemDaLista.classList.add("item-lista");

    let pegaTarefa = document.getElementById("texto-tarefa");
    pegaTarefa.value = ""
    pegaLista.appendChild(criarItemDaLista);
    pintar()
}
function pintar() {
  
let encontraItensDaLista = document.querySelectorAll('.item-lista');
  
encontraItensDaLista.forEach((element) => {
        element.addEventListener('click', (event) => {
          retiraClasse()
        event.target.classList.add("fundo-Item")
    })
    })
  }
  function retiraClasse() {
    let encontraFundoItem = document.getElementsByClassName("fundo-Item")[0];
    encontraFundoItem.classList.remove("fundo-Item");
  }
function apagarTudo() {
    let pegaOl = document.getElementById("lista-tarefas");
    pegaOl.innerText = "";
  
  }