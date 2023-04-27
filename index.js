// Create functionality for the task interface
// Add task         Sort options

window.addEventListener("DOMContentLoaded", () => {
    let modal = document.getElementsByClassName('modal');
    let closeButton = document.getElementById('close');
    let addButton = document.getElementById('add-task');
    let taskName = document.getElementById('task-name');
    let taskCategory = document.getElementById('task-category');
    let repeatSelect = document.getElementById('repeat-button');
    let dueDate = document.getElementById('due-date');
    let prioritySelect = document.getElementById('priority-level');
    let submitTask = document.getElementById('submit');
    let errorMsg = document.getElementById('error-message');

    addButton.addEventListener("click", () => {
        modal[0].style.display = 'grid';
    })

    closeButton.addEventListener('click', () => {
        modal[0].style.display = 'none';
    })

    submitTask.addEventListener('click', e => {
        if (!taskName.value || !taskCategory.value || repeatSelect.value === "Repeat" || !dueDate.value || prioritySelect.value === "Priority Level") {
            e.preventDefault();
            errorMsg.style.display = "block";
        } else {
            let taskObj = {
                name: taskName.value,
                category: taskCategory.value,
                frequency: repeatSelect.value,
                due: dueDate.value,
                priority: prioritySelect.value
            }
            console.log(taskObj);
            taskName.value = "";
            taskCategory.value = "";
            repeatSelect.value = "Repeat";
            dueDate.value = "";
            prioritySelect.value = "Priority Level";
            errorMsg.style.display = "none";
            modal[0].style.display = "none";
        }
    })
})
