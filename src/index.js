const display = document.querySelector("#screen");
const buttons = document.querySelectorAll(".button");
const opr = document.querySelectorAll(".opr");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    buttonValue = button.innerText;
    if (buttonValue == opr) {
      display.innerText += buttonValue;
    } else if (buttonValue == "AC") {
      display.innerText = "";
    } else if (buttonValue == "DEL") {
      display.innerText = display.innerText.slice(0, -1);
    } else if (buttonValue == "=") {
      try {
        display.innerText = eval(display.innerText);
      } catch (error) {
        display.innerText = "operation error!";
      }
    } else {
      display.innerText += buttonValue;
    }
  });
});
