let input = document.querySelector("input");
let add = document.querySelector(".add");
let ul = document.querySelector("ul");

// Load tasks from localStorage on page load
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Display saved tasks
let serial = 1;
tasks.forEach(task => {
    createTaskItem(task);
    serial++;
});

// Create and add task to DOM
function createTaskItem(taskText) {
    let li = document.createElement("li");
    let remove = document.createElement("button");
    remove.textContent = "remove";
    remove.classList.add("remove");

    let text = document.createElement("h5");
    text.textContent = `${serial}. ` + taskText;

    li.appendChild(text);
    li.appendChild(remove);
    ul.appendChild(li);

    // Remove logic
    remove.addEventListener("click", () => {
        ul.removeChild(li);
        removeFromLocalStorage(taskText);
        rebuildList(); // rebuild the list to fix serial numbers
    });
}

// Save to localStorage
function saveToLocalStorage(taskText) {
    tasks.push(taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Remove from localStorage
function removeFromLocalStorage(taskText) {
    tasks = tasks.filter(task => task !== taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Rebuild list (for proper serial renumbering)
function rebuildList() {
    ul.innerHTML = "";
    serial = 1;
    tasks.forEach(task => {
        createTaskItem(task);
        serial++;
    });
}

// Add task
add.addEventListener("click", () => {
    let taskText = input.value.trim();
    if (taskText === "") return;

    createTaskItem(taskText);
    saveToLocalStorage(taskText);

    input.value = "";
    serial++;
});
