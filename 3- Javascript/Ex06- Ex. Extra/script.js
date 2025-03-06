document.getElementById('add-task').addEventListener('click', function() {
    const taskText = document.getElementById('new-task').value;
    if (taskText === '') return;

    const taskList = document.getElementById('task-list');
    const newTask = document.createElement('li');
    newTask.className = 'task';
    newTask.innerHTML = `
        <span>${taskText}</span>
        <button class="complete-task">Concluir</button>
        <button class="delete-task">Excluir</button>
    `;

    taskList.appendChild(newTask);
    document.getElementById('new-task').value = '';

    newTask.querySelector('.complete-task').addEventListener('click', function() {
        newTask.querySelector('span').classList.toggle('completed');
    });

    newTask.querySelector('.delete-task').addEventListener('click', function() {
        taskList.removeChild(newTask);
    });
});