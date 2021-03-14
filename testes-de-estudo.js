let localTestes = document.querySelector('#testes');
var parent = document.createElement("div");
var child = document.createElement("p");
localTestes.appendChild(parent);
parent.appendChild(child);

 child.before("Testeee");

console.log(parent.innerHTML);