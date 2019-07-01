"use strict";

let changeText = document.getElementById("changeTextButton");
changeText.addEventListener("click", function() {
  let newText = document.getElementById("newText");
  let newTextValue = newText.value;

  let hourText = document.getElementById("hourValue");

  if (hourText.innerText !== newTextValue) {
    console.log("there is a change");
    hourText.classList.add("text-focus-in");
    hourText.innerText = newTextValue;
    setTimeout(() => {
      hourText.classList.remove("text-focus-in");
    }, 1000);
  }
});
