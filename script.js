// Seletores DOM
const listEl = document.getElementById('task-list');
const inputEl = document.getElementById('new-task');
const addBtn = document.getElementById('add-btn');

// Carrega tarefas do servidor
async function loadTasks() {
    const res = await fetch('/tasks');
    const tasks = await res.json();
    listEl.innerHTML = '';
    tasks.forEach(renderTask);
}

// Renderiza um item na lista
function renderTask(task) {
    const li = document.createElement('li');
    li.className = 'task-item' + (task.done ? ' done' : '');
    li.dataset.id = task.id;

    li.innerHTML = `
        <span>${task.text}</span>
        <div>
            <button class="check-btn">✔️</button>
            <button class="delete-btn">🗑️</button>
        </div>
    `;

    // Alterna estado concluído
    li.querySelector('.check-btn').addEventListener('click', async () => {
        await fetch(`/tasks/${task.id}`, { method: 'PUT' });
        loadTasks();
    });

    // Deleta tarefa
    li.querySelector('.delete-btn').addEventListener('click', async () => {
        await fetch(`/tasks/${task.id}`, { method: 'DELETE' });
        loadTasks();
    });

    listEl.appendChild(li);
}

// Adiciona nova tarefa
addBtn.addEventListener('click', async () => {
    const text = inputEl.value.trim();
    if (!text) return;
    await fetch('/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text })
    });
    inputEl.value = '';
    loadTasks();
});

// Inicializa
loadTasks();