"use-strict";

let testInputValue = document.getElementById("fakeApiResult");
let apiButton = document.getElementById("callApi");
let apiResultLocation = document.getElementById("promiseResult");

function clearHtmlNodes(parentNode) {
  while (parentNode.firstChild) {
    parentNode.removeChild(parentNode.firstChild);
  }
}

function displayApiResult(status, message) {
  let resultTextElement = document.createElement("span");
  let resultText = document.createTextNode(`${status} - ${message}`);
  resultTextElement.appendChild(resultText);
  resultTextElement.classList.add("focus-in-expand");
  apiResultLocation.appendChild(resultTextElement);
}

function displayLoaderImage() {
  let loader = document.createElement("div");
  loader.setAttribute("class", "loader");
  apiResultLocation.appendChild(loader);
}

apiButton.addEventListener("click", function() {
  // hide API submit button
  apiButton.classList.toggle("hide");
  // Clear any text from previous API call and display loader
  clearHtmlNodes(apiResultLocation);
  displayLoaderImage();
  // Using timeout to simulate API call response time
  // Display loader image should show until promise is resolved
  setTimeout(function() {
    let apiPromise = new Promise(function(resolve, reject) {
      let value = testInputValue.value;
      if (value === "1") {
        resolve("API call succeeded");
      }
      reject("API call failed");
    });

    apiPromise.then(
      value => {
        displayApiResult("SUCCESS", "fufilled: " + value);
      },
      error => {
        displayApiResult("FAILED", "rejected: " + error);
      },
      // Clear loader and any previous responses text
      clearHtmlNodes(apiResultLocation),
      // Display the submit button again
      apiButton.classList.toggle("hide")
    );
  }, 2000);
});
