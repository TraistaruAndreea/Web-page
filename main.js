// add close button to all tasks
var list = document.getElementsByTagName("LI");
var i;
for (i = 0; i < list.length; i++) {
    var span = document.createElement("SPAN"); // create a span element
    var txt = document.createTextNode("\u00D7"); // create a text node with the x symbol
    span.className = "close"; // add the close class to the span element
    span.appendChild(txt); // append the text node to the span element
    list[i].appendChild(span); // append the span element to the list item
}   

// hide task when close button is clicked
function attachCloseButtonEvent() {
    var closeButtons = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < closeButtons.length; i++) {
        closeButtons[i].onclick = function () {
        var div = this.parentElement; // get the parent element of the close button
        div.style.display = 'none'; // hide the parent element (task)
        }
    }
}
//add checkmark
function toggleTask(task) {
    task.classList.toggle('checked'); // toggle the checked class on the task
    var checkmark = task.querySelector('.checkmark'); // get the checkmark element
    if (task.classList.contains('checked')) { // check if task is selected
        checkmark.style.visibility = 'visible'; // show checkmark when task is selected
    } else {
        checkmark.style.visibility = 'hidden'; // hide checkmark when task is deselected
    }
}

//add new item
function newElement() {
    var li = document.createElement('li'); // create a new list item
    var task = document.getElementById('input').value; // get the value of the input field
    var new_task = document.createTextNode(task); // create a text node with the input value

    var span = document.createElement('SPAN'); // create a span element
    var txt = document.createTextNode('\u00D7'); // create a text node with the x symbol
    span.className = "close"; // add the close class to the span element
    span.appendChild(txt); // append the text node to the span element
    li.appendChild(span); // append the span element to the list item

    var checkmark = document.createElement('SPAN'); // create a span element
    checkmark.className = "checkmark"; // add the checkmark class to the span element
    checkmark.innerHTML = '&#10003;'; // add the checkmark symbol to the span element

    li.appendChild(new_task); // append the text node to the list item
    li.appendChild(checkmark); // append the checkmark to the list item

    if (task === '') {
        alert('Add a task!');  // alert if input field is empty
    } else {
        document.getElementById("list").appendChild(li); // append the list item to the list
    }
    document.getElementById('input').value = ''; // clear the input field
    
    
    attachCloseButtonEvent(); // attach the close button event to the span element
    // Attach click event to the new task to toggle the checkmark
    li.addEventListener('click', function () {
        toggleTask(this);
    });
}

 // add task to list when enter key is pressed
 document.getElementById('input').addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        newElement(event);
    }
});

//check all
function checkAll() {
    var tasks = document.querySelectorAll('ul li'); // get all tasks
    for (var i = 0;i < tasks.length;i++) {
        var task = tasks[i]; // get the task
        task.classList.add('checked'); // add the checked class to the task
        var checkmark = task.querySelector('.checkmark'); // get the checkmark element
        checkmark.style.visibility = 'visible'; // show the checkmark
    }
}

//delete all
function deleteChecked() {
    var tasks = document.querySelectorAll('ul li.checked'); // get all checked tasks
    tasks.forEach(function (task) { // remove all checked tasks at the same time
      task.remove(); // remove the task
    });
}

//uncheck all
function uncheckAll() {
    var tasks = document.querySelectorAll('ul li'); // get all tasks
    for (var i = 0;i < tasks.length;i++) {
        var task = tasks[i]; // get the task
        task.classList.remove('checked'); // remove the checked class from the task
        var checkmark = task.querySelector('.checkmark'); // get the checkmark element
        checkmark.style.visibility = 'hidden'; // hide the checkmark
    } 
}
