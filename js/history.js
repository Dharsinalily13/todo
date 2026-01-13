const historyList = document.getElementById("history-list");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function displayHistory() {
    historyList.innerHTML = "";
    tasks.forEach(task => {
        const div = document.createElement("div");
        div.innerHTML = `${task.title} | ${task.deadline} | ${task.priority} | ${task.status}`;
        historyList.appendChild(div);
    });
}
displayHistory();
