window.onload = getTasks()

const addBtn = document.querySelector("#adicionar")


function saveTask() {
    const task = {
        id: uuidv4(),
        title: document.querySelector("#task-title").value,
        description: document.querySelector("#task-description").value,
        time: document.querySelector("#task-time").value
    }

    let taskList;

    if (localStorage.hasOwnProperty("task-list")) {
        taskList = JSON.parse(localStorage.getItem("task-list"))
        taskList.push(task)
        localStorage.setItem("task-list", JSON.stringify(taskList))
    }else{
        taskList = [task]
        localStorage.setItem("task-list", JSON.stringify(taskList))
    }
    document.location.reload(true)
}
addBtn.addEventListener("click", saveTask)



function getTasks(){
    if (localStorage.hasOwnProperty("task-list")) {
        const taskList = JSON.parse(localStorage.getItem("task-list"))

        taskList.forEach(task => {
            insertTask(task)
        });
    }
}

function insertTask(task){
    const taskElement = `
    <div class="section-task">
    <div class="task-content">
        <span class="task-title">${task.title}</span>
        <span class="task-description">${task.description}</span>
    </div>

    <div class="task-details">
        <span class="horario">${task.time}</span>
    </div>
</div> ` 

    const taskOutput = document.querySelector("#task-list")
    taskOutput.innerHTML += taskElement
}




console.log();






















function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}








































// //Código que pega a data atual e mostra como subtítulo no html
// let data = new Date;
// monName = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
// document.getElementById('dateField').innerHTML = `Rio de Janeiro, ${data.getDate()} de ${monName[data.getMonth()]} de ${data.getFullYear()}`

// //Evento onclick para adicionar novas tarefas
// document.querySelector('img').addEventListener('click',  () => {
//     console.log("Chegou")

//     let tarefa = {
//         titulo: document.getElementById('task-title').value,
//         conteudo: document.getElementById('task-description').value,
//         prazo: document.getElementById('horario').value
//     }
//     console.log(tarefa)
// })