// Check that JavaScript file is loaded
console.log("script.js is loaded!")

// Declare variables
let completedCount = 0;
const todoArray = [];

// Declare HTML element
const inputTodo = document.querySelector("#inputTodo");
const addBtn = document.querySelector("#addBtn");
const todoList = document.querySelector("ul");
const infoText = document.querySelector("#infoText");
const countTodo = document.querySelector("#countTodo");


// Add a listner to the add Todo button
addBtn.addEventListener("click", function () {

    // Get text from input
    let text = inputTodo.value;

    // Check if there is any input
    if (text.length === 0) {
        infoText.innerText = "Du måste skriva något!";
        return;
    }
    else {
        infoText.innerText = "";
    }


    // Create todo item and add text (ul)
    const todoItem = document.createElement("li");
    todoList.appendChild(todoItem);

    const itemLabel = document.createElement("span");
    itemLabel.innerText = text;
    todoItem.appendChild(itemLabel);

    // Add listener to the todo item
    itemLabel.addEventListener("click", function () {

        // the listener code
        if(todoItem.getAttribute("class") == "completed")
        {
            completedCount--;
            todoItem.setAttribute("class", "");
        }
        else
        {
            completedCount++;
            todoItem.setAttribute("class", "completed");
        }
        
        countTodo.innerText = `Number of completed todos: ${completedCount}`;
        // countTodo.innerText = "Number of completed todos " + completedCount + " " + ;

    });

    // Add to array
    todoArray.push(text);

    // Set input empty
    inputTodo.value = "";
});