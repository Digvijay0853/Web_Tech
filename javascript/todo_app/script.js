
let taskInput = document.getElementById("taskInput");
let tasklist = document.getElementById("tasklist");
function addTask() {
    let task = taskInput.value.trim();

    if (task === "") {
        alert("Please Enter a Task")
        return;
    }
    let li = document.createElement("li")
    let span = document.createElement("span")
    span.textContent = task;

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "DELETE";
    deleteButton.onclick = function () {
        li.remove();
    }
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox"

    checkbox.onclick = function(){
        li.classList.toggle("completed")
    }
    li.appendChild(checkbox)
    li.appendChild(span)
    li.appendChild(deleteButton)
    tasklist.appendChild(li);
    taskInput.value = "";



}