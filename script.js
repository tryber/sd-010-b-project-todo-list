const textInput = document.getElementById('texto-tarefa');
const buton = document.getElementById('criar-tarefa');
const lista = document.getElementById('lista-tarefas');
const clickList = document.getElementsByClassName('liStyle');
const btnApaga = document.getElementById('apaga-tudo');
const btnFinalizados = document.getElementById('remover-finalizados');

const verificaCor = (event) => {
  for (let j = 0; j < clickList.length + 1; j += 1) {
    if (clickList[j]) {
      clickList[j].classList.remove('color');
    }
    event.target.classList.add('color');
  }
};
// Muda a cor do fundo para cinza
const mudarCor = () => {
  for (let i = 0; i < clickList.length; i += 1) {
    clickList[i].addEventListener('click', verificaCor);
  }
};

const complet = () => {
  lista.addEventListener('dblclick', (event) => {
    event.target.classList.toggle('completed');
  });
};
complet();

// Vai adicionando item a lista a cada click
buton.addEventListener('click', () => {
  const novaLista = document.createElement('li');
  novaLista.classList.add('liStyle');
  lista.appendChild(novaLista).innerText = textInput.value;
  textInput.value = '';
  mudarCor();
  complet();
});

btnApaga.addEventListener('click', () => {
  lista.innerHTML = '';
});

btnFinalizados.addEventListener('click', () => {
  const finalizados = document.querySelectorAll('li.completed');
  for (let i = 0; i < finalizados.length; i += 1) {
    lista.removeChild(finalizados[i]);
  }
});
