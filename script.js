// Grab the input and list elements
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

// Function to add a new Todo
function addTodo() {
  const task = todoInput.value.trim();

  if (task === "") {
    alert("Please enter a valid task!");
    return;
  }

  // Create a new list item
  const li = document.createElement("li");
  li.className = "flex justify-between items-center bg-gray-100 p-3 rounded-lg shadow-md";

  li.innerHTML = `
    <span class="text-gray-700">${task}</span>
    <div class="flex items-center gap-2">
      <button onclick="editTodo(this)"
        class="bg-yellow-400 text-white px-2 py-1 rounded-lg shadow hover:bg-yellow-500">
        Edit
      </button>
      <button onclick="deleteTodo(this)"
        class="bg-red-500 text-white px-2 py-1 rounded-lg shadow hover:bg-red-600">
        Delete
      </button>
    </div>
  `;

  // Add the new item to the list and clear the input
  todoList.appendChild(li);
  todoInput.value = "";
}

// Function to edit a Todo item
function editTodo(button) {
  const currentTask = button.parentElement.previousElementSibling;
  const updatedTask = prompt("Update your task:", currentTask.textContent);

  if (updatedTask && updatedTask.trim() !== "") {
    currentTask.textContent = updatedTask;
  }
}

// Function to delete a Todo item
function deleteTodo(button) {
  button.parentElement.parentElement.remove();
}
