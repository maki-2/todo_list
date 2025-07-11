// Load tasks when the page loads
window.onload = function () {
    loadTasks();
  };

// This function is called when the "Add" button is clicked
function addTask() {
    // Get the input field element
    const input = document.getElementById("task-input");
  
    // Get the trimmed value entered by the user
    //"Trimmed" means removing extra spaces from the beginning and end of a string like from "   Finish homework   " to  "Finish homework"
    const task = input.value.trim();
  
    if (task !== "") {
        createTaskElement(task);
        saveTask(task);
        input.value = "";
      } else {
        alert("Please enter a task.");
      }
    }
    
    // Create and add a task to the DOM
    function createTaskElement(task) {
      const li = document.createElement("li");
    
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
    
      const label = document.createElement("label");
      label.textContent = task;
      label.style.marginLeft = "8px";
    
      checkbox.addEventListener("change", function () {
        label.style.textDecoration = this.checked ? "line-through" : "none";
      });
    
      li.appendChild(checkbox);
      li.appendChild(label);
    
      document.getElementById("todo-list").appendChild(li);
    }
    
    // Save a task to local storage
    function saveTask(task) {
      let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      tasks.push(task);
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    
    // Load tasks from local storage
    function loadTasks() {
      let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      tasks.forEach(task => createTaskElement(task));
    }
    
    //delete function
    // When the "Delete All Tasks" button is clicked
    document.getElementById("delete-button").addEventListener("click", function () {
      // Clear the list from the screen
      document.getElementById("todo-list").innerHTML = "";

      // Remove the tasks from localStorage
      localStorage.removeItem("tasks");
    });
    
  
