function botao() {
  let bt = document.querySelector("#criar-tarefa");
  let inputtexto = document.querySelector("#texto-tarefa");

  let listapai = document.querySelector("#lista-tarefas");
  bt.addEventListener("click", function() {
    let lista = document.createElement("li");
    lista.className = ("tarefas")
    lista.innerHTML = inputtexto.value
    listapai.appendChild(lista)
    inputtexto.value = "";


  })
}
botao()

function selecionandocores() {
  let lista = document.querySelector("#lista-tarefas")

  lista.addEventListener("click", function(event) {
    let selecionada = document.querySelector(".selected");
    if (selecionada !== null) {
      selecionada.classList.remove("selected");

      event.target.classList.add("selected")
    } else {

      event.target.classList.add("selected")

    }
  })
}
selecionandocores()

function completando() {
  let lista = document.getElementById('lista-tarefas');


  function taskcompleta(event) {
    event.target.classList.toggle('completed');
  }
  lista.addEventListener('dblclick', taskcompleta);
}
completando();

/*pesquisei no google e achei essa dica:
https://pt.stackoverflow.com/questions/435414/como-remover-elementos-de-uma-lista-em-javascript*/
function btDeletarTudo() {
  let botaoDeletar = document.getElementById("apaga-tudo")
  let ol = document.getElementById("lista-tarefas")
  botaoDeletar.addEventListener('click', apagaTudo);

  function apagaTudo() {
    ol.innerHTML = "";
  }
}
btDeletarTudo()

/* tive ajuda do meu namorado e pesquisei no google sobre while
https://www.devmedia.com.br/javascript-while-e-do-while/41015
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/do...while
*/

function limpandocompletas() {
  let btLimpaCompleta = document.getElementById("remover-finalizados");
  btLimpaCompleta.addEventListener("click", function() {
    while (document.querySelector('.completed')) {
      document.querySelector('.completed').remove();
    }

  })
}
limpandocompletas()