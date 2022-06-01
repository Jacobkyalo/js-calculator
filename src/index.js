const display = document.querySelector("#screen");
const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    display.innerHTML = button.innerHTML;
  });
});
