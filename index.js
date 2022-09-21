//Código que pega a data atual e mostra como subtítulo no html
let data = new Date;
monName = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
document.getElementById('dateField').innerHTML = `Rio de Janeiro, ${data.getDate()} de ${monName[data.getMonth()]} de ${data.getFullYear()}`

//Evento onclick para adicionar novas tarefas
document.querySelector('img').addEventListener('click',  () => {
    console.log("Chegou")

    let tarefa = {
        titulo: document.getElementById('task-title').value,
        conteudo: document.getElementById('task-description').value,
        prazo: document.getElementById('horario').value
    }
    console.log(tarefa)
})