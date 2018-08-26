let addTarefa = document.querySelector(".addTarefa");
let listaDeItens = document.querySelector(".listaDeItens");

addTarefa.addEventListener('click',() =>{
    let li = document.createElement('li');
    li.setAttribute('class', 'item');
    li.classList.add('item');
    let tarefa = document.querySelector("#tarefa").value
    li.innerHTML = tarefa;
    listaDeItens.insertBefore(li, listaDeItens.childNodes[0]);

    let span = document.createElement('span');
    span.innerHTML = "Concluir Tarefa";
    li.appendChild(span);
   


})