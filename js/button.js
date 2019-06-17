"use strict";

let actionButton = document.getElementById("button1");
let processingAnimation = document.getElementById("processingAnimation");
let processingBorder = document.getElementById("processingBorder");

actionButton.addEventListener("click", () => {
  actionButton.classList.toggle("hide");
  processingAnimation.classList.toggle("hide");
  processingBorder.classList.toggle("hide");
});
