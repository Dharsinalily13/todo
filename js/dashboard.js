// Sample tasks (placeholder)
const tasks = [
    { title: "Finish project report", status: "pending" },
    { title: "Study for math quiz", status: "completed" },
    { title: "Workout for 30 mins", status: "pending" }
];

const taskList = document.getElementById("task-list");

function displayTasks() {
    taskList.innerHTML = ""; // Clear previous
    tasks.forEach((task, index) => {
        const div = document.createElement("div");
        div.classList.add("task-item");
        div.innerHTML = `
            <input type="checkbox" ${task.status === "completed" ? "checked" : ""} />
            <span>${task.title}</span>
        `;
        taskList.appendChild(div);
    });
}

// Initial display
displayTasks();
