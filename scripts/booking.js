/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified.
// Do any of these variables need to be initialized when the page is loaded?
// When do they need to be reset or updated?
let dayCounter = 0;
let totalCost = 0;
let cost = document.querySelector("#calculated-cost");


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
function selectDays(days,handle) {
  days.forEach((day) => {
    day.addEventListener("click", () => {
      if (day.classList.contains("clicked")) {
        day.classList.remove("clicked");
        dayCounter--;
      } else {
        day.classList.add("clicked");
        dayCounter++;
      }
      handle();
    });
  });
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
function clearDays(days) {
  let clear = document.querySelector("#clear-button");
  clear.addEventListener("click", () => {
    days.forEach((day) => {
      if (day.classList.contains("clicked")) {
        day.classList.remove("clicked");
      }
    });
    dayCounter = 0;
    totalCost = 0;
    cost.innerHTML = totalCost;
  });
}

(function () {
  let dailyRate = 35;
  let full = document.querySelector("#full");
  let half = document.querySelector("#half");

  /********* change rate *********/
  // when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
  function changeRate() {
    full.addEventListener("click", () => {
      dailyRate = 35;
      half.classList.remove("clicked");
      full.classList.add("clicked");
      calculate();
    });
    half.addEventListener("click", () => {
      dailyRate = 20;
      full.classList.remove("clicked");
      half.classList.add("clicked");
      calculate();
    });
  }

  // when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

  /********* calculate *********/
  // when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
  function calculate() {
    totalCost = dailyRate * dayCounter;
    cost.innerHTML = totalCost;
  }

  let days = Array.from(document.querySelectorAll(".day-selector")[0].children);
  changeRate()
  selectDays(days,calculate);
  clearDays(days);
})();
