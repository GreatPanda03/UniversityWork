var taskEntry = document.getElementById("myInput");
var taskList = document.getElementById("myList");
var close = document.getElementsByClassName("close");

// adds a new task with the text entered in the task entry box
function addTask() {
    let newTask = document.createElement("li");
    newTask.innerHTML = taskEntry.value;
    taskList.append(newTask);

    prepareTask(newTask);
}

// auxiliary function to prepare the given task element
function prepareTask(task) {
    
    // toggles whether a task is checked
    task.addEventListener("click", function() {
        if (task.classList.contains("checked")) {
            task.classList.remove("checked");
        } else {
            task.classList.add("checked");
        }
    });    

    // TO-DO: 
    // 1. add code to display "close" button when a task is hovered over
    // 2. hide the cross when task is not hovered over
    // 3. delete the task when the cross is clicked
    // voila
}

// prepares any existing tasks
window.onload = function() {
    let allTasks = taskList.childNodes;

    allTasks.forEach(function(task, index, array) {
        prepareTask(task);
    });
};