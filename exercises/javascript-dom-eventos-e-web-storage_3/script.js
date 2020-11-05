function createDaysOfTheWeek() {
  const weekDays = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Exercício 1
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

const daysOfTheMonth = document.querySelector('#days');

let monthDays = () => {
  for (let day of dezDaysList) {
    let listOfDays = document.createElement('li');
    listOfDays.className = 'day';
    listOfDays.innerHTML = day;
    daysOfTheMonth.appendChild(listOfDays);

    if (day == 24 || day == 25 || day == 31) {
      listOfDays.classList.add('holiday');
    }

    if (day === 4 || day === 11 || day === 18 || day === 25) {
      listOfDays.classList.add('friday');
    }
  }
};
monthDays();

// Exercício 2
const buttonContainer = document.querySelector('.buttons-container');

let holidayButton = (string) => {
  let btnHoliday = document.createElement('button');
  btnHoliday.id = 'btn-holiday';
  btnHoliday.innerText = string;
  buttonContainer.appendChild(btnHoliday);
};
holidayButton('Feriados');

// Exercício 3
let holidayClick = () => {
  const holidayBtn = document.querySelector('#btn-holiday');
  const holidayLi = document.querySelectorAll('.holiday');

  for (let li of holidayLi) {
    holidayBtn.addEventListener('click', () => {
      if (li.style.backgroundColor != 'white') {
        li.style.backgroundColor = 'white';
      } else {
        li.style.backgroundColor = 'rgb(238, 238, 238)';
      }
    });
  }
};
holidayClick();

// Exercício 4
let btnFriday = (string) => {
  const btnContainer = document.querySelector('.buttons-container');
  const btnCreate = document.createElement('button');
  btnCreate.id = 'btn-friday';
  btnCreate.innerText = string;
  btnContainer.appendChild(btnCreate);
};
btnFriday('Sexta-Feira');

// Exercício 5
let btnFridayText = (array) => {
  const btnFriday = document.querySelector('#btn-friday');
  const fridayList = document.getElementsByClassName('friday');

  for (let i = 0; i < fridayList.length; i += 1) {
    btnFriday.addEventListener('click', () => {
      if (fridayList[i].innerHTML !== 'Sextou!') {
        fridayList[i].innerHTML = 'Sextou!';
      } else {
        fridayList[i].innerHTML = array[i];
      }
    });
  }
};
btnFridayText([4, 11, 18, 25]);

// Exercício 6
const liDay = document.getElementsByClassName('day');

let zoomIn = (e) => {
  e.target.style.fontSize = '40px';
};

let zoomOut = (e) => {
  e.target.style.fontSize = '20px';
};

let zoomInDay = () => {
  for (let i of liDay) {
    i.addEventListener('mouseover', zoomIn);
  }
};
zoomInDay();

let zoomOutDay = () => {
  for (let i of liDay) {
    i.addEventListener('mouseout', zoomOut);
  }
};
zoomOutDay();

// Exercício 7
const myTasks = document.querySelector('.my-tasks');
const spanCreate = document.createElement('span');

let newTask = (string) => {
  spanCreate.innerText = string;
  myTasks.appendChild(spanCreate);
};
newTask('Fazer exercícios de Eventos no JS');

// Exercício 8
const createTasksColor = document.createElement('div');

let taskColor = (string) => {
  createTasksColor.className = 'task';
  createTasksColor.style.backgroundColor = string;
  myTasks.appendChild(createTasksColor);
};
taskColor('royalblue');

// Exercício 9
let taskSelect = (e) => {
  
}