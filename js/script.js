let addTarefa = document.querySelector(".addTarefa");
let listaDeItens = document.querySelector(".listaDeItens");


addTarefa.addEventListener('click', () => {
    let li = document.createElement('li');
    li.setAttribute('class', 'item');
    li.classList.add('item');
    let tarefa = document.querySelector("#tarefa").value
    li.innerHTML = tarefa;
    listaDeItens.insertBefore(li, listaDeItens.childNodes[0]);

    let botoes = document.createElement('div');
    botoes.setAttribute('class', 'botoesTarefa');
    botoes.classList.add('botoesTarefa');

    let concluirTarefa = document.createElement('span');
    concluirTarefa.setAttribute('class', 'concluirTarefa');
    concluirTarefa.classList.add('concluirTarefa');
    concluirTarefa.innerHTML = "Concluir Tarefa";


    let removerTarefa = document.createElement('span');
    removerTarefa.setAttribute('class', 'removerTarefa');
    removerTarefa.classList.add('removerTarefa');
    removerTarefa.innerHTML = "Remover Tarefa";
    li.appendChild(botoes);
    botoes.appendChild(concluirTarefa);
    botoes.appendChild(removerTarefa);


    removerTarefa.addEventListener('click', () => {
        li.parentNode.removeChild(li);
    })
    concluirTarefa.addEventListener('click', () => {
        if (!li.classList.contains("tarefaConcluida")) {
            li.classList.add('tarefaConcluida');
            concluirTarefa.innerHTML = "Tarefa Concluída"
            concluirTarefa.style.backgroundColor = "mediumseagreen"
        }
        else{
        li.classList.remove('tarefaConcluida');
        concluirTarefa.innerHTML = "Concluir Tarefa"
        concluirTarefa.style.backgroundColor = "lightgreen"
        }

    })

})

