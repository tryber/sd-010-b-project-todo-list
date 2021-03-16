//paragrafo com ID e texto
const paragrafo = document.createElement('p');
paragrafo.innerText = "Clique duas vezes em um item para marcá-lo como completo";
paragrafo.id = 'funcionamento'
const body = document.querySelector('body');
body.appendChild(paragrafo);

//cria input pra colocar text com ID e Type
const writeItem = document.getElementById('botaoInput');
const criaInput = document.createElement('input');
criaInput.id = 'texto-tarefa';
criaInput.type = 'text';
writeItem.appendChild(criaInput);

//cria lista ordenada
const list = document.createElement('ol');
list.id = "lista-tarefas";
list.setAttribute('tabindex', 0);
body.appendChild(list);

//cria botão pra adicionar tarefa
const criaBotao = document.createElement('button');
criaBotao.id = 'criar-tarefa';
criaBotao.innerText = "Adiciona Tarefa";
writeItem.appendChild(criaBotao);

//cria botão pra limpar lista
const criaLimpar = document.createElement('button');
criaLimpar.id = 'apaga-tudo';
criaLimpar.innerText = "Limpar";
writeItem.appendChild(criaLimpar);

//cria botão remover finalizados
const removeFinalizados = document.createElement('button');
removeFinalizados.id = 'remover-finalizados';
removeFinalizados.innerText = "Limpa Finalizados";
writeItem.appendChild(removeFinalizados);

//cria botão salvar tarefas
const salvarTarefa = document.createElement('button');
salvarTarefa.id = 'salvar-tarefas';
salvarTarefa.innerText = "Salvar";
writeItem.appendChild(salvarTarefa);

//cria botão mover pra cima
const criaMoveUp = document.createElement('button');
criaMoveUp.id = 'mover-cima';
criaMoveUp.innerText = "⬆";
writeItem.appendChild(criaMoveUp);

//cria botão mover pra baixo
const criaMoveDown = document.createElement('button');
criaMoveDown.id = 'mover-baixo';
criaMoveDown.innerText = "⬇";
writeItem.appendChild(criaMoveDown);

//cria botão remover selecionado
const removeSelecionado = document.createElement('button');
removeSelecionado.id = 'remover-selecionado';
removeSelecionado.innerText = "Remove Selecionado";
writeItem.appendChild(removeSelecionado);


function pegarLista() {
	const list = document.querySelector('ol');
	let teste = localStorage.getItem('chave-salvar')
	if (teste !== '') {
		list.innerHTML = (localStorage.getItem('chave-salvar'));
	}
}
pegarLista();


//função pra adicionar tarefa
function criarTarefa() {
	const botaoTarefa = document.getElementById('criar-tarefa');
	const olId = document.getElementById('lista-tarefas');

	botaoTarefa.addEventListener('click', function tarefaCriada(event) {
		const itemLista = document.querySelector('#texto-tarefa');
		let itemTarefa = document.createElement('li');
		itemTarefa.classList.add('item-lista-tarefa');
		itemTarefa.innerText = itemLista.value;
		let atributo = document.querySelectorAll('.texto-tarefa');
		itemTarefa.setAttribute('tabindex', atributo.length)
		olId.appendChild(itemTarefa);
		itemLista.value = "";

	})
}
criarTarefa();

function alteraCor() {
	const listaOrdenada = document.querySelector('#lista-tarefas');
	listaOrdenada.addEventListener('click', function corAlterada(event) {
		listaOrdenada.focus();
		let itemCinza = document.querySelector('.corCinza')
		if (itemCinza) {
			itemCinza.classList.remove('corCinza');
		}
		event.target.classList.add('corCinza')
	})
}
alteraCor()

function riscar() {
	const listaOrdenada = document.querySelector('#lista-tarefas');
	listaOrdenada.addEventListener('dblclick', function riscarTarefa(event) {

		if (event.target.classList.contains('completed')) {
			event.target.classList.remove('completed');

		} else {
			event.target.classList.add('completed')
		}
	})
}
riscar();

function limparLista() {
	const botaoLimpar = document.querySelector('#apaga-tudo');
	botaoLimpar.addEventListener('click', function tarefaLimpadas(event) {
		localStorage.clear()
		const task = document.querySelectorAll('li');
		for (i = 0; i < task.length; i += 1) {
			task[i].parentNode.removeChild(task[i]);
		}
	})
}
limparLista();

function limpaFinalizado() {
	const botaoFinalizado = document.querySelector('#remover-finalizados');
	botaoFinalizado.addEventListener('click', function finalizadosRemovidos(event) {
		const itensRiscados = document.querySelectorAll('.completed');
		for (j = 0; j < itensRiscados.length; j += 1) {
			itensRiscados[j].parentNode.removeChild(itensRiscados[j]);
		}
	})
}
limpaFinalizado();

function salvarLista() {
	const salvarTarefa = document.querySelector('#salvar-tarefas');
	salvarTarefa.addEventListener('click', function listaSalva(event) {
		const salvar = document.querySelector('ol').innerHTML;

		localStorage.setItem('chave-salvar', salvar);
	})
}
salvarLista();

function moveDown() {
	const moveDown = document.querySelector('#mover-baixo');
	moveDown.addEventListener('click', function moverBaixo() {

		let itensListas = document.querySelectorAll('.item-lista-tarefa');

		for (let j = 0; j < itensListas.length; j += 1) {

			if (itensListas[j].classList.contains('corCinza') && (itensListas[j].nextElementSibling !== null)) {

				itensListas[j].parentNode.insertBefore(itensListas[j + 1], itensListas[j]);
			}
		}
	})
}
moveDown();

function moveUp() {
	const moveUp = document.querySelector('#mover-cima');
	moveUp.addEventListener('click', function moverCima() {

		let itensListas = document.querySelectorAll('.item-lista-tarefa');

		for (let i = 0; i < itensListas.length; i += 1) {

			if (itensListas[i].classList.contains('corCinza') && (itensListas[i].previousElementSibling !== null)) {

				itensListas[i].parentNode.insertBefore(itensListas[i], itensListas[i - 1]);
			}
		}
	})
}
moveUp();

function removeCinza() {
	const idSelecionado = document.querySelector('#remover-selecionado')
	idSelecionado.addEventListener('click', function cinzaRemovido() {
		let idItemList = document.querySelector('.corCinza');
		if (idItemList) {
			idItemList.parentNode.removeChild(idItemList);
		}
	})
}

removeCinza();
