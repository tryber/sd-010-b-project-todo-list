//DÚVIDAS PRA TIRAR NO PLANTÃO: COISAS DO ESLINT; REQUISITO 14 E AS DUAS DÚVIDAS DE CSS



let input=document.getElementById('texto-tarefa');
let textInsideInput=input.value;
let button=document.getElementById('criar-tarefa')
let ol=document.getElementById('lista-tarefas')


button.addEventListener('click',add)


function add(){
    
    let list=document.createElement('li')//aqui precisa estar dentro dessa função. Senão aparece apenas uma li sempre.
    list.innerHTML=input.value// aqui não dava certo se colocasse textInsideInput. Só deu certo com input.value
    
    ol.appendChild(list)
    input.value='';
}
//requisito 7 e 8
ol.addEventListener('click',grayColor)


function grayColor(event){
    let array=document.querySelectorAll('li')//isso cria um array com todas as LIs
    for(let index=0;index<array.length;index+=1){
        array[index].style.backgroundColor='white'
    } 
    event.target.style.backgroundColor='rgb(128, 128, 128)'   
   
}
//requisito 10
let cleanButton=document.getElementById('apaga-tudo');
cleanButton.addEventListener('click',eraseList);
function eraseList(){
    let array=document.querySelectorAll('li')
    for(let index=0;index<array.length;index+=1){
        ol.removeChild(array[index]); //assim como fiz appendchild pra adicionar um filho ao OL, fiz esse removechild pra remover as LIs( tive que botar array[index] ao invés de 'li' ou a var list. Só assim deu certo.)
        
        //tentei fazer array[index].innerHTML='';   Porém só estava apagando  o texto das LIs e não apaga os números das LIs.
    }
}
eraseList();


//requisito 14
  let xButton=document.getElementById('remover-selecionado');

xButton.addEventListener('click',removeSelected)

function removeSelected(){
    let array=document.querySelectorAll('li')

    for(let index=0;index<array.length;index+=1){  
       if(array[index].style.backgroundColor=='rgb(128, 128, 128)'){
        ol.removeChild(array[index]);
       } //tava dando errado antes porque tinha errado identação. E não pode ser apenas um =, senão apaga todas as LI(o que é estranho). Mas o correto mesmo,Como quero fazer comparação nesse requisito, é usar ==
    }
}    

 








