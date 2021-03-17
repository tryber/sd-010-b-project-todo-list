function novaTarefa() {

  let lista = document.getElementById("lista-tarefas");

  let tarefa = document.getElementById("texto-tarefa").value;

  if (tarefa !== "") {

    let li = document.createElement("li");

    li.className = "tarefa";

    li.innerText = tarefa;

    lista.appendChild(li);

    document.getElementById('texto-tarefa').value = "";

    li.addEventListener("click", selecionarTarefa);
		li.addEventListener("dblclick", riscarTarefa);
		
  }
}

function selecionarTarefa(click) {

  let selTarefa = click.target;
  let listaDeTarefas = document.getElementsByClassName("tarefa");

  for (let index = 0; index < listaDeTarefas.length; index++) {

    listaDeTarefas[index].classList.remove("cinza");

  }

  selTarefa.classList.add("cinza");
}

function riscarTarefa(duploClick) {

	let selTarefa = duploClick.target;
	let arrayDeClasses = selTarefa.classList;

	if (arrayDeClasses.length === 3){

		selTarefa.classList.remove("completed");

	} else {

		selTarefa.classList.add("completed");
	}

		
}





