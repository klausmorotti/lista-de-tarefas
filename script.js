// Sombra colorida ao clicar no input
let input = document.querySelector('form input[type=search]');
input.addEventListener('click', () => {
    input.style.boxShadow = '2px 5px 15px var(--color-purple-2)';
})

// Adicionando as tarefas na área de tarefas
let form = document.querySelector('form');
let inputText = document.querySelector('form input[type=search]');
let inputSubmit = document.querySelector('form input[type=submit]');

let completeTask;
let deleteTask;
let arrayTasks = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let inputValue = inputText.value;

    if (inputValue == '') {
        inputText.style.border = '1px solid #FF0000';
        inputText.classList.add('animationInput');
        setTimeout(() => {
            inputText.classList.remove('animationInput');
        }, 1000)
    } else {

        inputText.style.border = '1px solid var(--color-white)';

        let task = document.querySelector('.modelTask .task').cloneNode(true);

        task.querySelector('p').innerHTML = inputValue;

        document.querySelector('.tasks').append(task);

        inputText.value = '';

        verifyTasks();


        // Pegando todos botões de remover e finalizar tarefa a cada tarefa nova que adiciono
        deleteTask = task.querySelectorAll('.deleteTask');
        completeTask = task.querySelectorAll('.completeTask');
        addClick(deleteTask, completeTask);
    }
})

// Função que verifica se há tasks, se houver a estrutura aparece, senao, nao aparece
function verifyTasks() {
    if (document.querySelectorAll('.task').length > 1) {
        document.querySelector('.tasks').style.opacity = 1;
    } else {
        document.querySelector('.tasks').style.opacity = 0;
    }
}

// Função que adiciona um clique para todos os botões de remover ou finalizar tarefa
function addClick(deleteTask, completeTask) {
    deleteTask.forEach((item) => {
        item.addEventListener('click', () => {  
            removeTask(item);
            verifyTasks();
        })
    })


    completeTask.forEach((item) => {
        item.addEventListener('click', () => {
            finishTask(item);
        })
    })
}


// Removendo o item clicado acessando o elemento pai com nome TASK
let removeTask = (item) => {
    let taskItem = item.closest('.task');
    taskItem.remove();
}

let finishTask = (item) => {
    let taskItem = item.closest('.task');
    if (taskItem.classList.contains('taskComplete')) {
        taskItem.classList.remove('taskComplete');
        taskItem.querySelector('p').style.color = 'var(--color-purple-1)';
    } else {
        taskItem.classList.add('taskComplete');
        taskItem.querySelector('p').style.color = 'var(--color-black)';
    }
}


