function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
// Exercício 1
function createDaysOfTheMonth() {
  const dezDaysList = [
    29,
    30,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
  ];
  const daysList = document.getElementById("days");

  for (let index = 0; index < dezDaysList.length; index += 1) {
    const day = dezDaysList[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = day;
    dayListItem.className = "day";
    if (day === 24 || day === 25 || day === 31) {
      dayListItem.className = "day holiday";
    }
    if (day === 4 || day === 11 || day === 18) {
      dayListItem.className = "day friday-day";
    }
    if (day === 25) {
      dayListItem.className = "day friday holiday";
    }

    daysList.appendChild(dayListItem);
  }
}

createDaysOfTheMonth();

// Exercício 2
function createHolidayButton(buttonName) {
  let buttonContainer = document.querySelector(".buttons-container");
  let holidayButton = document.createElement("button");
  holidayButton.innerHTML = buttonName;
  holidayButton.id = "btn-holiday";
  buttonContainer.appendChild(holidayButton);
}

createHolidayButton("Feriados");

// Exercício 3
let holidayButton = document.getElementById("btn-holiday");
let holidays = document.querySelectorAll(".holiday");
let newStyle = "yellow";
holidayButton.addEventListener("click", paintHoliday);

function paintHoliday() {
  for (let index = 0; index < holidays.length; index += 1) {
    if (holidays[index].style.backgroundColor === "yellow") {
      holidays[index].style.backgroundColor = "rgb(238,238,238)";
    } else {
      holidays[index].style.backgroundColor = newStyle;
    }
  }
}

// Exercício 4
function createFridayButton(buttonName) {
  let buttonContainer = document.querySelector(".buttons-container");
  let fridayButton = document.createElement("button");
  fridayButton.innerHTML = buttonName;
  fridayButton.id = "btn-holiday";
  buttonContainer.appendChild(fridayButton);
}

createFridayButton("Sexta-feira");
