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

