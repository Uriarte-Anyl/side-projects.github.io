document.querySelectorAll(".input-buttons").forEach((btn) => {
  btn.addEventListener("click", handleInput);
});

function handleInput(event) {
  const button = event.currentTarget;
  const value = button.dataset.value;
  const action = button.dataset.action;
  const inputDisplay = document.getElementById("input");
  const outputDisplay = document.getElementById("output");

 
  animateButton(button);

 
  if (action === "clear") {
    inputDisplay.innerText = "0";
    outputDisplay.innerText = "0";
    return;
  }

 
  if (action === "delete") {
    let current = inputDisplay.innerText;
    inputDisplay.innerText = current.length > 1 ? current.slice(0, -1) : "0";
    return;
  }

  
  if (action === "equal") {
    try {
      // replace the symbols for clear visual representation
      let expression = inputDisplay.innerText
        .replace(/×/g, "*")
        .replace(/÷/g, "/");
      let result = eval(expression);
      outputDisplay.innerText = result;
    } catch {
      outputDisplay.innerText = "Error";
    }
    return;
  }

 
  if (value) {
    if (inputDisplay.innerText === "0") {
      inputDisplay.innerText = value;
    } else {
      inputDisplay.innerText += value;
    }
  }
}

function animateButton(elem) {
  elem.style.animation = "none";
  elem.offsetHeight; 
  elem.style.animation = "buttonAnimate 0.5s ease";
  elem.addEventListener(
    "animationend",
    () => {
      elem.style.animation = "";
    },
    { once: true }
  );
}
