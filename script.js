// DOM Elements
const addBtn = document.getElementById('add-btn');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const themeToggle = document.getElementById('theme-toggle');

// Add Todo Item Functionality
addBtn.addEventListener('click', addTodo);
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTodo();
});

// Toggle Dark Mode
themeToggle.addEventListener('click', toggleTheme);

// Add Todo
function addTodo() {
    const todoText = todoInput.value.trim();
    if (!todoText) {
        alert("Please enter something.");
        return;
    }

    // Create Todo Item
    const li = document.createElement('li');
    li.classList.add(
        'flex',
        'justify-between',
        'items-center',
        'bg-purple-100',
        'dark:bg-gray-700',
        'p-4',
        'rounded-lg',
        'shadow-md',
        'hover:shadow-lg',
        'transition'
    );

    li.innerHTML = `
        <span class="todo-text text-gray-800 dark:text-white">${todoText}</span>
        <div>
            <button class="check-btn text-green-500 px-2 hover:text-green-700">
                ✓
            </button>
            <button class="delete-btn text-red-500 px-2 hover:text-red-700">
                ✕
            </button>
        </div>
    `;

    // Mark as Done
    li.querySelector('.check-btn').addEventListener('click', () => {
        li.classList.toggle('line-through');
        li.classList.toggle('text-gray-400');
    });

    // Delete Item
    li.querySelector('.delete-btn').addEventListener('click', () => {
        todoList.removeChild(li);
    });

    // Append Todo Item
    todoList.appendChild(li);

    // Clear Input
    todoInput.value = '';
}

// Toggle Light/Dark Theme
function toggleTheme() {
    document.body.classList.toggle('dark');
}
