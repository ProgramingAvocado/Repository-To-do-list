const task_container = document.querySelector(".container")


function create_task(name) {

    let new_task = document.querySelector(".task-template").cloneNode(true)
    new_task.querySelector(".not-done").onclick = e => {
        change_status(e)
    }
    new_task.querySelector("p").innerHTML = name
    new_task.classList.remove("task-template")
    task_container.append(new_task)
}

function addukol() {
    if (document.getElementById("task-to-add").value == "") {
        alert("nic tam nemas bruh")
    } else {
        create_task(document.getElementById("task-to-add").value)
    }
}
function change_status(e) {
    e.target.classList.toggle("done")
}

