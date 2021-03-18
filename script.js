//Exemplo do site https://stackoverflow.com/questions/26946235/pure-javascript-listen-to-input-value-change

let itens = [];

document.getElementById("criar-tarefa").addEventListener('click' , adicionar);
function adicionar() {
  const ol = document.getElementById("lista-tarefas");
  const input = document.getElementById("texto-tarefa");
  const inputValue = input.value;
  const li = document.createElement("li");
  li.innerText = inputValue;

  li.addEventListener('click',(e)=>{
    const li = e.target;
    const classe = 'selecionado';
    if(document.querySelector(".selecionado") == null){
      li.classList.add(classe);
    }else{
      document.querySelector(".selecionado").classList.remove("selecionado");
      li.classList.add(classe);
    }
  });
  li.addEventListener('dblclick', (e)=>{
    if(li.classList.contains("completed") == true){
      li.classList.remove("completed");
    }else{
      li.classList.add("completed");
    }
  });
  ol.appendChild(li);
  input.value = "";
}

//let array = [];
let inputText = document.getElementById("lista-tarefas");
//itens = document.querySelectorAll("#lista-tarefas li");
let array = [];

for(let i = 0; i < itens.length; i+=1) {
  tab.push(itens[i].innerHTML);
}

for(let i = 0; i < itens.length; i+=1) {
  itens[i].onclick = function(){
    index = tab.indexOf(this.innerHTML);
    console.log(this.innerHTML + " Nada = " + index);
  };
}
