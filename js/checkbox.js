"use-strict";

// Basic function to print text onto the screen
function displayInfo(text) {
  let content = document.getElementById("checkboxTesting");
  let textElement = document.createElement("p");
  let textToDisplay = document.createTextNode(text);
  textElement.appendChild(textToDisplay);
  content.appendChild(textElement);
}

function getSelectedCheckboxes(checkboxesName) {
  let checkedBoxes = document.querySelectorAll(
    `input[name=${checkboxesName}]:checked`
  );
  return checkedBoxes;
}

let checkedboxesButton = document.getElementById("getCheckedboxes");
checkedboxesButton.addEventListener("click", function() {
  let selectedOptions = getSelectedCheckboxes("date-option");
  selectedOptions.forEach(element => {
    displayInfo(String(element.id));
  });
});

function addDateOptions(dateToAdd) {
  let date = dateToAdd.getDate();
  let month = getMonthName(dateToAdd.getMonth());
  let year = dateToAdd.getFullYear();
  let dateOptions = document.getElementById("dateOptions");
  let datebox = createDateBoxLabel(date, month, year, dateToAdd);
  let dateboxCheckBox = createDateCheckbox(dateToAdd);
  dateOptions.appendChild(dateboxCheckBox);
  dateOptions.appendChild(datebox);
}

function createDateBoxLabel(date, month, year, dateObject) {
  let dateBox = document.createElement("label");
  dateBox.setAttribute("class", "date-box");
  dateBox.setAttribute("for", dateObject);
  let dateValue = createDateValueDiv(date);
  dateBox.appendChild(dateValue);
  let monthYearValue = createMonthYearDiv(month, year);
  dateBox.appendChild(monthYearValue);
  dateBox.addEventListener("click", function() {
    dateBox.classList.toggle("to-update");
  });
  return dateBox;
}

function createDateValueDiv(date) {
  let dateValue = document.createElement("div");
  dateValue.setAttribute("class", "date-value");
  let dateValueText = document.createTextNode(date);
  dateValue.appendChild(dateValueText);
  return dateValue;
}

function createMonthYearDiv(month, year) {
  let monthYearValue = document.createElement("div");
  let monthYearText = document.createTextNode(month + " " + year);
  monthYearValue.appendChild(monthYearText);
  return monthYearValue;
}

// Checkbox will be hidden
function createDateCheckbox(dateObject) {
  let dateCheckBox = document.createElement("input");
  dateCheckBox.setAttribute("type", "checkbox");
  dateCheckBox.setAttribute("id", dateObject);
  dateCheckBox.setAttribute("name", "date-option");
  dateCheckBox.setAttribute("value", dateObject);
  return dateCheckBox;
}

function getMonthName(monthIndex) {
  let monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  return monthNames[monthIndex];
}

window.onload = function() {
  // Add Date Boxes for last seven days
  for (let i = 7; i > 0; i--) {
    dateToAdd = new Date(Date.now() - i * 24 * 60 * 60 * 1000);
    addDateOptions(dateToAdd);
  }
};
