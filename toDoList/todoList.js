var taskInput=document.getElementById("new-task");
var incompleteTaskHolder = document.getElementById("incomplete-task");
var completeTaskHolder = document.getElementById("complete-task");
var addBtn = document.getElementsByTagName("button")[0]


// function to create new task
var createNewTask = function(taskString){
    var listItem = document.createElement("li")
    var checkBox = document.createElement("input")
    var label = document.createElement("label")
    label.innerHTML = taskString
    checkBox.type = "checkbox"
    listItem.appendChild(checkBox)
    listItem.appendChild(label)
    return listItem
}

var addItem = function(){{
    var listItem = createNewTask(taskInput.value);
    incompleteTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
    // taskInput.value = '';
    
}}

// mark completed task
var taskCompleted = function(){
    var listItem = createNewTask(taskInput.value);
    completeTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskIncomplete)
}

var taskIncomplete = function() {
    var listItem = createNewTask(taskInput.value);
    incompleteTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted)
}

var ajaxRequest = function(){
    console.log("ajax request")}

addBtn.onclick = addItem;
addBtn.addEventListener("click", addItem);
addBtn.addEventListener("click", ajaxRequest);

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
    var checkBox = taskListItem.querySelector("input[type=checkbox]");
    checkBox.onchange = checkBoxEventHandler;
}

for (var i = 0; i< incompleteTaskHolder.children.length; i++) {
    bindTaskEvents(incompleteTaskHolder.children[i], taskCompleted)
}

for (var i = 0; i< completeTaskHolder.children.length; i++) {
    bindTaskEvents(completeTaskHolder.children[i], taskIncomplete)
}


