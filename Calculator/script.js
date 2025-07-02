document.querySelectorAll(".input-buttons").forEach((btn) => {
  btn.addEventListener("click", touchAnimate);
  btn.addEventListener("touchstart", touchAnimate);
});

function touchAnimate(event) {
  const elem = event.currentTarget;

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

function calc(a, b, answer, operation) {
  let input = document.getElementById("input");
  let output = document.getElementById("output");

  switch (operation) {
    case "+":
      a += b;
      break;
    case "-":
      a -= b;
      break;
    case "×":
      a *= b;
      break;
    case "÷":
      a /= b;
      break;
    default:
      break;
  }
  return answer(operation);
}
