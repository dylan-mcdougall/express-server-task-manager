// Create functionality for the task interface
// Add task         Sort options

window.addEventListener("DOMContentLoaded", () => {
    let modal = document.getElementsByClassName('modal');
    let closeButton = document.getElementById('close');
    let addButton = document.getElementById('add-task');

    addButton.addEventListener("click", () => {
        modal[0].style.display = 'grid';
    })

    closeButton.addEventListener('click', () => {
        modal[0].style.display = 'none';
    })
})
