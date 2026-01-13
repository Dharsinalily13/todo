// Load tasks from localStorage
const taskList = document.getElementById("task-list");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Display tasks on dashboard
function displayTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const div = document.createElement("div");
        div.classList.add("task-item");
        div.innerHTML = `
            <input type="checkbox" ${task.status === "completed" ? "checked" : ""} data-index="${index}" />
            <span>${task.title} (${task.deadline})</span>
        `;
        taskList.appendChild(div);
    });

    // Add checkbox event
    document.querySelectorAll("input[type=checkbox]").forEach(box => {
        box.addEventListener("change", (e) => {
            const idx = e.target.dataset.index;
            tasks[idx].status = e.target.checked ? "completed" : "pending";
            localStorage.setItem("tasks", JSON.stringify(tasks));
        });
    });
}

// Initial display
displayTasks();

