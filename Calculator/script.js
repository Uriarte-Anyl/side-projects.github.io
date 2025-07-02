document.querySelectorAll(".input-buttons").forEach((btn) => {
  btn.addEventListener("click", touchAnimate);
  btn.addEventListener("touchStart", touchAnimate);
});

function touchAnimate(event) {
  const elem = event.currentTarget;

  elem.style.animation = "none";
  elem.offsetHeight;
  elem.style.animation = "buttonAnimate 0.5s ease";

  elem.addEventListener(
    "animationEnd",
    () => {
      elem.style.animation = "";
    },
    { once: true }
  );
}
