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