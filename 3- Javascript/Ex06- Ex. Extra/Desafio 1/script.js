document.getElementById('add-task').addEventListener('click', function() { //Quando clicamos no botão de adicionar tarefa:
    const taskText = document.getElementById('new-task').value; //Pegamos o valor do input de nova tarefa
    if (taskText === '') return; //Se o valor for vazio, não fazemos nada

    const taskList = document.getElementById('task-list');  //Pegamos a lista de tarefas (UL)
    const newTask = document.createElement('li');   //Criamos um novo elemento LI para a nova tarefa
    newTask.className = 'task';   //Adicionamos a classe 'task' ao novo LI
    newTask.innerHTML = `<span>${taskText}</span>
        <button class="complete-task">Concluir</button>
        <button class="delete-task">Excluir</button>
    `;  //Definimos o conteúdo HTML do novo LI, incluindo o texto da tarefa e os botões de concluir e excluir

    taskList.appendChild(newTask);  //Adicionamos o novo LI à lista de tarefas (UL)
    document.getElementById('new-task').value = ''; //Limpamos o input de nova tarefa
    document.getElementById('new-task').focus();  //Colocamos o foco de volta no input de nova tarefa

     // Adiciona os event listeners para os botões de concluir e excluir    

    newTask.querySelector('.complete-task').addEventListener('click', function() { //Quando clicamos no botão de concluir tarefa:
        newTask.querySelector('span').classList.toggle('completed'); //Adicionamos ou removemos a classe 'completed' do span que contém o texto da tarefa
    });  
    
    //******* Toggle significa que se a classe existir, ela será removida; se não existir, será adicionada *********

    newTask.querySelector('.delete-task').addEventListener('click', function() {
        taskList.removeChild(newTask);
    });
});