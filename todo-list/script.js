function addTask() {
    var li = document.createElement("li")
    var userInput = document.getElementById("userInput").value;
    var inputText = document.createTextNode(userInput);
    li.appendChild(inputText);

    if (userInput === ""){
        alert("Sorry you need to write a task first");
    } else {
        document.getElementById("ul").appendChild(li);
    }
    document.getElementById("userInput").value = "";
}

function closeTask() {
    var listOfTask = document.getElementsByTagName("li");

    for (let list = 0; list < listOfTask.length; list++) {
        var span = document.createElement("span");
        var text = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(text);
        listOfTask[list].appendChild(span);
    }
}

closeTask();