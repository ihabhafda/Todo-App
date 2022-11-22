/*
    Students Tasks:
    [1] Use Sweet Alert If Input Is Empty 
    [2] Check If Task Is Exist  
    [3] Create Delete All Tasks Button
    [4] Create Finish All Tasks Button
    [5] Add To Tasks To The Local Storage
*/


// Setting Up Variables
let theInput = document.querySelector('.add-task input');
let theAddButton = document.querySelector('.add-task .plus');
let tasksContainer = document.querySelector('.tasks-content');
let TasksCount = document.querySelector('.tasks-count span');
let TasksCompleted = document.querySelector('.tasks-completed span');

// Focus On Input Field
window.onload = function () {
    theInput.focus();
};

// Adding The Task
theAddButton.onclick = function () {

    // If Input Is Empty
    if (theInput.value == '') {

        console.log("No Value");

    } else {

        let noTasksMsg = document.querySelector('.no-tasks-message');

        // Check If Span Witch No Tasks Message Is Exist
        if (document.body.contains(document.querySelector('.no-tasks-message'))) {

            // Remove No tasks Message
            noTasksMsg.remove();

        }

        // Create Main Span Element
        let mainSpan = document.createElement("span");

        // Create Delete Button
        let deleteElement = document.createElement("span");

        // Create The Main Span Text
        let text = document.createTextNode(theInput.value);

        // Create The Delete Button Text
        let deleteText = document.createTextNode("Delete");

        // Add Text To Main Span
        mainSpan.appendChild(text);

        // Add Class Text To Main Span
        mainSpan.className= 'task-box';

        // Add Text To Delete Button
        deleteElement.appendChild(deleteText);

        // Add Class To Delete Button
        deleteElement.className = 'delete';

        // Add Delete Button To Main Span
        mainSpan.appendChild(deleteElement);

        // Add The Task To The Container
        tasksContainer.appendChild(mainSpan);

        // Empty The Input
        theInput.value = '';

        // Focus On Field
        theInput.focus();

        // Calculate Tasks
        calculateTasks();

    }

};

document.addEventListener('click', function (e) {

    // Delete Task
    if (e.target.className == 'delete') {

        // Remove Current Task
        e.target.parentNode.remove();

        // check Number Of Tasks Inside The Container
        if (tasksContainer.childElementCount == 0) {

            createNoTasks();

        }

    }

    // Finish Task
    if (e.target.classList.contains('task-box')) {

        // Toggle Class 'Finished'
        e.target.classList.toggle("finished");

    }

            // Calculate Tasks
            calculateTasks();

});

// Function To Create No Tasks Message
function createNoTasks() {

    // Create Message span Element
    let msgSpan = document.createElement("span");

    // Create The Text Message
    let msgText = document.createTextNode("No Tasks To Show");

    // Add Text To Message span Element
    msgSpan.appendChild(msgText);

    // Add Class To Message Span
    msgSpan.className = 'no-tasks-message';

    // Append The Message Span Element To The Task Container
    tasksContainer.appendChild(msgSpan); 

}

// Function To Calculate Tasks
function calculateTasks() {

    // Calculate All Task
    TasksCount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length;

    // Calculate Completed Tasks
    TasksCompleted.innerHTML = document.querySelectorAll('.tasks-content .finished').length;

}