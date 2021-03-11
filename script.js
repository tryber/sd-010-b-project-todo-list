window.onload = function () {
// Botão add tarefa, add event listener na lista
    const adicionar = document.querySelector('#criar-tarefa');
    adicionar.addEventListener('click', addTarefa);
    function addTarefa(){
        let tarefa = document.querySelector('input').value;
        let ol = document.querySelector('#lista-tarefas');
        let li = document.createElement('li');
        li.innerHTML = tarefa;
        ol.appendChild(li);
        document.querySelector('input').value = '';
        li.addEventListener('click', listaSelect);
        li.addEventListener('dblclick', listaRisca);
    }

// Item lista selecionado
    function listaSelect (liEmQuestao){
        let lis = document.querySelectorAll('#lista-tarefas li');
        let target = liEmQuestao.target;
        for(let i = 0; i < lis.length; i++){
            lis[i].classList.remove('selected');
        }
        target.classList.add('selected');
    }
// Item lista riscar
    function listaRisca(liEmQuestao) {
        let li = liEmQuestao.target;
        let index = 0;
        let size = li.classList.length;
        for(let i = 0; i < size; i++){
        if(li.classList[i] == 'completed'){
            index++;
        }
    }

    if(index == 0){
        li.classList.add('completed');
    }else{
        li.classList.remove('completed');
    }
        
        console.log(li.classList);
        console.log(liEmQuestao.target);
}

// BOTÃO APAGAR
    let apagar = document.querySelector('#apaga-tudo');
    apagar.addEventListener('click', apagarLista);
    function apagarLista() {
        let ol = document.querySelector('#lista-tarefas')
        while (ol.firstChild) {
            ol.removeChild(ol.lastChild);
          }
    }

// REMOVER FINALIZADOS
    let remover = document.querySelector('#remover-finalizados');
    remover.addEventListener('click', removerFinalizados);
    function removerFinalizados() {
        let ol = document.querySelectorAll('#lista-tarefas');
        let t = true;
        while(t){
            let item = document.querySelector('.completed');
            if(item == null){
            t = false;
            }else{
            item.parentNode.removeChild(item);
            // Source: https://www.w3schools.com/jsref/met_node_removechild.asp
            }
        }
        
    }

// REMOVER SELECIONADO
    let removerS = document.querySelector('#remover-selecionado');
    removerS.addEventListener('click', removerSelecionado);
    function removerSelecionado() {
        let li = document.querySelector('.selected');
        li.parentNode.removeChild(li);
    }

// MOVER TAREFAS
    // Botões
    let moverCima = document.querySelector('#mover-cima');
    moverCima.addEventListener('click', movCim);
    let moverBaixo = document.querySelector('#mover-baixo');
    moverBaixo.addEventListener('click', movBai);

    //Funções
    function movCim () {
        let mov = document.querySelector('.selected');
        if(mov != null){
            let cim = mov.previousElementSibling;
            let parent = document.querySelector('#lista-tarefas');
            if(cim != null){
                cim.before(mov);
            }
        }
    }
    
    function movBai () {
        let mov = document.querySelector('.selected');
        if(mov != null){
            let bai = mov.nextElementSibling;
            let parent = document.querySelector('#lista-tarefas');
            if(bai != null){
                bai.after(mov);
            }
        }
    }


}