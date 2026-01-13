const taskForm = document.getElementById("task-form");
const msg = document.getElementById("msg");

taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    const title = document.getElementById("task-title").value;
    const deadline = document.getElementById("task-deadline").value;
    const priority = document.getElementById("task-priority").value;

    tasks.push({ title, deadline, priority, status: "pending" });
    localStorage.setItem("tasks", JSON.stringify(tasks));

    msg.textContent = "Task added successfully!";
    taskForm.reset();
});
