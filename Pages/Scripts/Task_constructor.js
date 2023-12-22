document.addEventListener("DOMContentLoaded", function() {
    const taskForm = document.getElementById("NewTask");
    const taskList = document.getElementById("TaskList");

    taskForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const taskInput = document.getElementById("taskName");
        const taskName = taskInput.value;

        if (taskName.trim() !== "") {
            const taskItem = document.createElement("div");
            taskItem.textContent = taskName;

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Remove task";
            deleteButton.addEventListener("click", function() {
                taskItem.remove();
            });

            taskItem.appendChild(deleteButton);
            taskList.appendChild(taskItem);
            taskInput.value = "";

            saveTasksToLocalStorage();
        }
    });

    function saveTasksToLocalStorage() {
        const tasks = [];
        const taskElements = taskList.querySelectorAll("div");
        taskElements.forEach(function(task) {
            tasks.push(task.textContent.replace("Remove task", "").trim());
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function loadTasksFromLocalStorage() {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.forEach(function(task) {
            const taskItem = document.createElement("div");
            taskItem.textContent = task;

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Remove task";
            deleteButton.addEventListener("click", function() {
                taskItem.remove();
                saveTasksToLocalStorage();
            });

            taskItem.appendChild(deleteButton);
            taskList.appendChild(taskItem);
        });
    }

    loadTasksFromLocalStorage();
});
