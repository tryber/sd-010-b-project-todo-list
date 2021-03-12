function listaItem() {
  const buttonAdicionar = document.querySelector('#criar-tarefa');
  const adicionandoTexto = document.querySelector('#texto-tarefa');
  const adicionandoItem = document.querySelector('#lista-tarefas');
  buttonAdicionar.addEventListener('click', function () {
    if (adicionandoTexto.value.length > 0) {
      let list = document.createElement('li');
      list.innerHTML = adicionandoTexto.value;
      adicionandoItem.appendChild(list);
      adicionandoTexto.value = '';
    } else {
      alert('Digite Algum Valor')
    }
  });
}
listaItem();

function backgroundCinza() {
  let lista = document.getElementById('lista-tarefas');
  lista.addEventListener('click', function (event) {
    let colorCinza = document.querySelector(".cinza");
    if (colorCinza) {
      colorCinza.classList.remove('cinza');
    }
    event.target.classList.add('cinza');
  })
}
backgroundCinza();
// botao para click duas vezes :https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event
function backgroundRiscado() {
  let lista = document.getElementById('lista-tarefas')
  lista.addEventListener('dblclick', function (event) {
    let riscado = document.querySelector('.completed');
    if (riscado) {
      riscado.classList.remove('completed');
    }
    event.target.classList.add('completed');
  })
}
backgroundRiscado();

function bottonApagaLista() {
  const botton = document.getElementById('apaga-tudo')
  let lista = document.getElementById('lista-tarefas');
  botton.addEventListener('click', function () {
    while (lista.firstChild) {
      // A declaração while cria um laço que executa uma rotina especifica enquanto a condição de teste for avaliada como verdadeira
      // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/while
      lista.removeChild(lista.firstChild);
    }
  });
}
bottonApagaLista();

function apagaTudo() {
  let botton = document.getElementById('remover-finalizados');
  botton.addEventListener('click', buttonFinal);
}
apagaTudo();

function buttonFinal() {
  let bottonCompleted = document.querySelector('.completed');
  while (bottonCompleted.parentNode) {
    bottonCompleted.parentNode.removeChild(bottonCompleted);
  }
}
