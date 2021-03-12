const listaTarefa = document.getElementById('lista-tarefas');
const botãoCriar = document.getElementById('criar-tarefa');
const elementoUsuario = document.getElementById('texto-tarefa');

/* Função criada com a ajuda de um amigo e mentor chamado João Victor. */
function corFundo(event) {
  const elementoClicado = event.target; // Origem do evento.
  if (elementoClicado.classList.contains('corFundo')) { // Verifica se o elemento clicado tem a classe'corFundo'
    return elementoClicado.classList.remove('corFundo'); // Remove a classe caso tenha
  }
  const elementoAtivo = document.getElementsByClassName('corFundo')[0]; // Captura o elemento LI que esta com a classe 'corFundo' adicionada
  if (elementoAtivo !== undefined) { // Verifica se o elemento capturado "elementoAtivo", está com a classe adicionada nele
    elementoAtivo.classList.remove('corFundo'); // Caso haja a classe no elemento "elementoAtivo", remove a classe.
  }
  return elementoClicado.classList.add('corFundo'); // Caso a origen do evento "elementoClicado"(click do mouse), não tenha a classe "corFundo", ela é adicionada.
}

function riscaTarefa(e) {
  const evento = e.target;
  if (evento.classList.contains('completed')) {
    return evento.classList.remove('completed');
  }
  return evento.classList.add('completed');
}

/* Função criada com ajuda dos colegas dos Plantoes. Com a ajuda do racionio de Camila
 Arruda e Issac foi posivel desenvolver o trecho do codigo onde adiciona tarefas a lista.
 Referencias de sites no final do codigo. */
function criaTarefa() {
  if (elementoUsuario.value === '') { // Verifica se há texto digitado pelo usuario
    alert('Adicione uma tarefa!'); // Caso não tenha texto, dispara o alerta
    elementoUsuario.focus(); // o Cursor para digitação aparece atomaticamente no input
  } else { // Se tiver texto digitado...
    const novaTarefa = document.createElement('li'); // Cria um novo elemento 'li'
    listaTarefa.appendChild(novaTarefa).innerHTML = elementoUsuario.value; // Adiciona o novo elemento criado 'li' dentro da lista ordenada 'ol' e atribui o valor digitado pelo usuario para o novo elemento criado 'li'
    novaTarefa.addEventListener('click', corFundo); // Adiciona o evento no elemento criado 'li'. Evento criado na função acima.
    novaTarefa.addEventListener('dblclick', riscaTarefa);
    elementoUsuario.value = ''; // Após a criação do elemento 'li', o input retorna no seu estado inicial.
    elementoUsuario.focus(); // Cursor para digitação aparece automaticamente no input
  }
}

botãoCriar.addEventListener('click', criaTarefa);

/* https://pt.stackoverflow.com/questions/52418/como-limpar-campos-de-formulario-html
https://pt.stackoverflow.com/questions/173221/como-checar-se-uma-string-est%C3%A1-vazia-em-javascript/173226
https://developer.mozilla.org/pt-BR/docs/Web/API/Document/createElement
https://pt.stackoverflow.com/questions/63395/quando-usar-this-e-quando-usar-event-target
https://javascript.info/event-delegation */
