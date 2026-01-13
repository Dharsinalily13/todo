let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
const completed = tasks.filter(t => t.status === "completed").length;
const pending = tasks.filter(t => t.status === "pending").length;

const ctx = document.getElementById("taskChart").getContext("2d");
new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Completed', 'Pending'],
        datasets: [{
            data: [completed, pending],
            backgroundColor: ['#16A34A', '#F59E0B']
        }]
    }
});
