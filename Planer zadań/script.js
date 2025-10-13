function add() {
    const input = document.getElementById("input");
    const taskText = input.value.trim();
    if (taskText === "") {
        alert("Wpisz treść zadania!");
        return;
    }

    const taskList = document.getElementById("tasklist");

    
    const li = document.createElement("li");
    li.textContent = taskText + " ";

  
    const doneButton = document.createElement("button");
    doneButton.textContent = "Wykonane";
    doneButton.className = "buttonl";
    

    doneButton.onclick = function () {
        li.style.textDecoration = "line-through";
        doneButton.disabled = true; 
    };

    li.appendChild(doneButton);
    taskList.appendChild(li);

    input.value = ""; 
    input.focus();    
}
