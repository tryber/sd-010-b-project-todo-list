window.onload = function(){

    

    function createLi(){

        let ol = document.getElementById('lista-tarefas');
        let li = document.createElement('li');
        ol.appendChild(li); 

        //recuperando o elemento
        let textoTarefa = document.getElementById('texto-tarefa');   
        // recebendo o valor do elemento   
        let textInput = textoTarefa.value;
        //reatribuindo o valor do elemento
        textoTarefa.value = ""; 
        
          // essa parte do codigo está certa        
            li.innerText = textInput;
            
            
            
            
    }

    let buttonInput = document.getElementById("criar-tarefa");
    buttonInput.addEventListener('click',function(){
        createLi();
        
    })    

    // event.target e sua sintaxe!!
    
    const orderList = document.getElementById('lista-tarefas');
    orderList.addEventListener('click', event => {

        //armazenando um constante com id lista e li
        const whiteList = document.querySelectorAll('#lista-tarefas li');

        //rodando a lista para fazer com que todos recebam inherit
        for(let i = 0; i < whiteList.length; i += 1){

        whiteList[i].style.backgroundColor = '';

        }
// colocando o evento.
        event.target.style.backgroundColor = 'rgb(128,128,128)';

    })

    //criar dois clicks criam completed e se der dois clicks novamente removem completed
    // a ideia basicamente é criar dois eventos um para criar o completed armazenando a lista
    // a outra parte é criar um evento removendo apenas os completed

    
    orderList.addEventListener('dblclick', event => {
  
        const whiteList = document.querySelectorAll('#lista-tarefas li');

        for(let i = 0; i < whiteList.length; i += 1){
            if(event.target === whiteList[i]){
                if (whiteList[i].classList.contains('completed')){
                    whiteList[i].classList.remove('completed');
                }
                else{
                    whiteList[i].classList.add('completed');
                }

               
            }
            
        }       


    })


 



   

    

}
          

