//Starting

window.onload = createOl()
window.onload = recoveryTarefas()

function createOl () {
  let addOl = document.createElement("OL");
  addOl.setAttribute("id", "lista-tarefas")
  document.getElementById("center-input").appendChild(addOl) }

document.addEventListener("click", function (event) {
  if (event.target.id === "criar-tarefa") {
    let newLi = document.createElement("LI");
    newLi.setAttribute("class", "item-lista")
    let textInput = document.getElementById("texto-tarefa").value;
    let textLi = document.createTextNode(textInput);
    newLi.appendChild(textLi);
    document.getElementById("lista-tarefas").appendChild(newLi);
    document.getElementById("texto-tarefa").value = ""
  }
  if (event.target.classList.contains("item-lista")) {
    if(document.querySelectorAll(".rgb-cinza").length === 0) {
      event.target.classList.add("rgb-cinza")
    } if (document.querySelectorAll(".rgb-cinza").length !== 0) {
      document.querySelectorAll(".rgb-cinza")[0].classList.remove("rgb-cinza");
      event.target.classList.add("rgb-cinza") 
    }
  }
  if (event.target.id === "apaga-tudo") {
    let dad = document.getElementById("lista-tarefas");
    let childNumbers = document.getElementById("lista-tarefas").childElementCount;
    for (let i = 0; i < childNumbers; i += 1) {
      dad.removeChild(dad.lastElementChild)
    }
  }
  if (event.target.id === "remover-finalizados") {
    let listCompleted = document.querySelectorAll(".completed");
    for (let i = 0; i < listCompleted.length; i += 1) {
      listCompleted[i].remove()
    }
  }
  if (event.target.id === "salvar-tarefas") {
    localStorage.clear()
    let listLength = document.querySelectorAll(".item-lista").length
    for (let index = 0; index < listLength; index += 1) {
      if (document.querySelectorAll(".item-lista")[index].className === "item-lista rgb-cinza completed" || document.querySelectorAll(".item-lista")[index].className === "item-lista completed rgb-cinza") {
        let listItem = document.querySelectorAll(".item-lista")[index].innerText;
        localStorage.setItem(`tarefa ${index}`, `${listItem} rgb-cinza completed`)
      }
      else if (document.querySelectorAll(".item-lista")[index].className === "item-lista rgb-cinza") {
        let listItem = document.querySelectorAll(".item-lista")[index].innerText;
        localStorage.setItem(`tarefa ${index}`, `${listItem} rgb-cinza`)
      }
      else if (document.querySelectorAll(".item-lista")[index].className === "item-lista completed") {
        let listItem = document.querySelectorAll(".item-lista")[index].innerText;
        localStorage.setItem(`tarefa ${index}`, `${listItem} completed`)
      }
      else if (document.querySelectorAll(".item-lista")[index].className === "item-lista") {
        let listItem = document.querySelectorAll(".item-lista")[index].innerText;
        localStorage.setItem(`tarefa ${index}`, `${listItem}`)
      }
    }
    console.log(localStorage)
  }  
})

document.addEventListener("dblclick", function (event) {
  if (event.target.classList.contains("item-lista") && !event.target.classList.contains("completed")) {
    event.target.classList.add("completed")
  }
  else if (event.target.classList.contains("item-lista") && event.target.classList.contains("completed")) {
    event.target.classList.remove("completed") 
  }
})

function recoveryTarefas () {
  if (localStorage.length == 0) {}
  else if (localStorage.length > 0) {
    for (let k = 0; k < localStorage.length; k += 1) {
      let item = localStorage.getItem(`tarefa ${k}`);
      if (item.includes("rgb-cinza completed")) {
        let newLi = document.createElement("LI");
        newLi.setAttribute("class", "item-lista rgb-cinza completed");
        let newItem = item.replace(" rgb-cinza", "").replace(" completed", "");
        let textInput = newItem;
        let textLi = document.createTextNode(textInput);
        newLi.appendChild(textLi);
        document.getElementById("lista-tarefas").appendChild(newLi);
      }
      else if (item.includes("rgb-cinza")) {
        let newLi = document.createElement("LI");
        newLi.setAttribute("class", "item-lista rgb-cinza");
        let newItem = item.replace(" rgb-cinza", "");
        let textInput = newItem;
        let textLi = document.createTextNode(textInput);
        newLi.appendChild(textLi);
        document.getElementById("lista-tarefas").appendChild(newLi);
      }
      else if (item.includes("completed")) {
        let newLi = document.createElement("LI");
        newLi.setAttribute("class", "item-lista completed");
        let newItem = item.replace(" completed", "");
        let textInput = newItem;
        let textLi = document.createTextNode(textInput);
        newLi.appendChild(textLi);
        document.getElementById("lista-tarefas").appendChild(newLi);
      }
      else {
        let newLi = document.createElement("LI");
        newLi.setAttribute("class", "item-lista");
        let textInput = item;
        let textLi = document.createTextNode(textInput);
        newLi.appendChild(textLi);
        document.getElementById("lista-tarefas").appendChild(newLi);
      }
    }
  }
}