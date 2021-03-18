const paiDaLista = document.getElementById('lista-tarefas');
let lista = paiDaLista.childNodes
const botão = document.getElementById('criar-tarefa');
botão.addEventListener('click', vaiPraLista); 
const botãoApaga = document.getElementById('apaga-tudo');
// **************Adciona o texto na lista****************


function vaiPraLista() { //função do botão vaiPraLista
  let entradaDeTarefa = document.getElementById('texto-tarefa').value;
  const li = document.createElement('li');
  li.innerText = entradaDeTarefa;
  entradaDeTarefa.value = '';
  li.addEventListener('click',  seleciona);
  // ***********risca o texto ao clicar duas vezes*********
  li.addEventListener('dblclick', function(event) {
    event.target.classList.toggle('completed');
  });
  paiDaLista.appendChild(li);
}// ***********seleciona o texto ao clicar************
function seleciona() {
  let apagaACor = document.querySelector('.selected');
  if (apagaACor !== null) {
    apagaACor.classList.remove('selected');
  }
  this.classList.add('selected');
};// ***********Apaga tudo***************************
botãoApaga.addEventListener('click', function () {
  let list = document.getElementById("lista-tarefas");
  while (0 < (list.childElementCount)) {
  list.removeChild(list.childNodes[0]);
  }
});// ***********Apaga Riscados**********************
const botãoApagaRiscados = document.getElementById('remover-finalizados');
botãoApagaRiscados.addEventListener('click', function () {
  const riscados = document.getElementsByClassName('completed');
  for (let index = 0; index < riscados.length; index = 0) {
    riscados[0].parentNode.removeChild(riscados[0]);
  }
});// ***************Salva************************
//https://warcontent.com/localstorage-javascript/
const botãoSalvar = document.getElementById('salvar-tarefas');
botãoSalvar.addEventListener('click', salvar); 
function salvar() {
  const itensASalvar = paiDaLista.innerHTML;
  localStorage.setItem('Salvo', itensASalvar); //por innerHTMH pois o localStorageso salva texto
}
window.onload = function() {
  paiDaLista.innerHTML = localStorage.getItem ('Salvo');
  colocaOsListeners();
}
function colocaOsListeners() {
  for (let cont = 0; cont < lista.length; cont += 1) {
    lista[cont].addEventListener('click',  seleciona);
    // ***********risca o texto ao clicar duas vezes*********
    lista[cont].addEventListener('dblclick', function (event) {
      event.target.classList.toggle('completed');
    });
  }
}
// ***********Move selecionado para baixo******************
let botaoMoverBaixo = document.querySelector('#mover-baixo');
botaoMoverBaixo.addEventListener('click', function () {
  let lista1 = document.querySelectorAll('li');
  let papai = document.querySelector('#lista-tarefas');
  for (let index = 0; index < lista1.length; index ++){
    let position = lista1[index];
    if (position.classList.contains('selected') && position.nextElementSibling !== null){
      console.log('oi');
      papai.insertBefore(lista1[index + 1], position);
    }
  }nextElementSibling
});
// ***********Move selecionado para cima******************
let botaoMoverCima = document.getElementById('mover-cima');
botaoMoverCima.addEventListener('click', function () {
  let lista1 = document.querySelectorAll('li');
  let papai = document.querySelector('#lista-tarefas');
  for (let index = 0; index < lista1.length; index ++){
    let position = lista1[index];
    if (position.classList.contains('selected') && position.previousElementSibling !== null){
      console.log('oi');
      papai.insertBefore(position, lista1[index - 1]);
    }
  }

});