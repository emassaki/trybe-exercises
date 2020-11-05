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
  let weekDaysList = document.querySelector(".week-days");

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
      dayListItem.className = "day friday-day holiday";
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
  fridayButton.id = "btn-friday";
  buttonContainer.appendChild(fridayButton);
}

createFridayButton("Sexta-feira");

// Exercício 5
let fridayButton = document.getElementById("btn-friday");
let fridays = document.querySelectorAll(".friday-day");
let newText = "SEXTOU!";
let dezFridayArray = [4, 11, 18, 25];
fridayButton.addEventListener("click", changeTextFriday);

function changeTextFriday() {
  for (let index = 0; index < fridays.length; index += 1) {
    if (fridays[index].innerText === "SEXTOU!") {
      fridays[index].innerText = dezFridayArray[index];
    } else {
      fridays[index].innerText = newText;
    }
  }
}

// Exercício 6
let listItem = document.getElementsByClassName('day');
for (let index = 0; index < listItem.length; index += 1) {
  listItem[index].addEventListener('mouseenter', function () {
    listItem[index].style.fontSize = '40px';
    listItem[index].style.transition = '0.5s';
  });
  listItem[index].addEventListener('mouseleave', function () {
    listItem[index].style.fontSize = '20px';
    listItem[index].style.transition = '0.5s';
  });
}
// Gabarito
// function dayMouseOver () {
//   let days = document.getElementById('days');
//   days.addEventListener('mouseover', function(event) {
//     event.target.style.fontSize = '40px';
//     event.target.style.transition = '0.5s';
//     event.target.style.fontWeight = '600';
//   })
// }
// function dayMouseOut () {
//   let days = document.getElementById('days');
//   days.addEventListener('mouseout', function(event) {
//     event.target.style.fontSize = '20px';
//     event.target.style.transition = '0.5s';
//     event.target.style.fontWeight = '400';
//   })
// }
// dayMouseOver()
// dayMouseOut()

// Exercício 7
function newTaskSpan(task) {
  let taskSpan = document.createElement('span');
  taskSpan.innerHTML = task;
  let myTasksContainer = document.querySelector('.my-tasks');
  myTasksContainer.appendChild(taskSpan);
}
newTaskSpan("Projeto:")

// Exercício 8
function labelBackgroundColor(color) {
  let divTask = document.createElement('div');
  divTask.className = 'task';
  divTask.style.backgroundColor = color;
  let myTasks = document.querySelector('.my-tasks');
  myTasks.appendChild(divTask);
}
labelBackgroundColor('blue');

// Exercício 9
function selectTask() {
  let taskLabel = document.querySelector('.task');
  taskLabel.addEventListener('click', function() {
    if (taskLabel.className === 'task selected') {
      taskLabel.className = 'task';
    } else {
      taskLabel.className = 'task selected';
    }
  });
}
selectTask();

// Exercício 10
function insertLabelOnDates() {
  let taskLabelColor = document.querySelector('.task').style.backgroundColor;
  let standardLabelColor = 'rgb(119,119,119)';
  let days = document.getElementById('days');
  days.addEventListener('click', function(event) {
    if (event.target.style.color === taskLabelColor) {
      event.target.style.color = standardLabelColor;
    } else {
      event.target.style.color = taskLabelColor;
    }
  })
} 
insertLabelOnDates();
// Adiciona a partir do input
// function addTaskList () {
//   let addTaskButton = document.getElementById('btn-add');
//   addTaskButton.addEventListener('click', function () {
//     let taskList = document.querySelector('.my-tasks');
//     let taskInput = document.getElementById('task-input');
//     let taskItemSpan = document.createElement('span');
//     taskItemSpan.innerText = taskInput.value;
//     taskList.appendChild(taskItemSpan);
//   });
// }
// addTaskList()