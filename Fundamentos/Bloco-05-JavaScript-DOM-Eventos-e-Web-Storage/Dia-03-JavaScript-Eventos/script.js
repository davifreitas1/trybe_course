function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

function createElementFunc(element, classTag, content) {
  const e = document.createElement(element);
  e.className = classTag;
  e.innerText = content;
  return e;
}

// Exercício 1

function createDezDays() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const list = document.getElementById('days');

  for (const dayNumber of dezDaysList) {
    const e = createElementFunc('li', 'day', dayNumber);
    if (dayNumber === 24 || dayNumber === 25 || dayNumber === 31) {
      e.className+= ' holiday';
    }
    if (dayNumber === 4 || dayNumber === 11 || dayNumber === 18 || dayNumber === 25) {
      e.className+= ' friday';
    }
    list.appendChild(e);
  }
}

createDezDays();

// Exercício 2

function createBtn(string, id) {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.id = id;
  btn.innerText = string;
  const div = document.querySelector('.buttons-container');
  div.appendChild(btn);
}

createBtn('Feriados', 'btn-holiday');

// Exercício 3

function changeHolidaysColor() {
  const days = document.getElementsByClassName('holiday');
  
  for (const day of days) {
    if (day.style.backgroundColor === 'red') {
      day.style.backgroundColor = 'rgb(238,238,238)';
    } else {
      day.style.backgroundColor = 'red';
    }
  }
}

const holidayBtn = document.getElementById('btn-holiday');
holidayBtn.addEventListener('click', changeHolidaysColor);

// Exercício 4 e 5

createBtn('Sexta-feira', 'btn-friday');

function changeFridayColor() {
  const days = document.getElementsByClassName('friday');
  
  for (const day of days) {
    if (day.style.backgroundColor === 'blue') {
      day.style.backgroundColor = 'rgb(238,238,238)';
    } else {
      day.style.backgroundColor = 'blue';
    }
  }
}

const fridayBtn = document.getElementById('btn-friday');
fridayBtn.addEventListener('click', changeFridayColor);

// Exercício 6


function addEventOnDays() {
  const days = document.querySelectorAll('.day');

  for (const day of days) {
    day.addEventListener('mouseenter', function(event) {
      event.target.style.fontSize = '36px';
    });
    day.addEventListener('mouseout', function(event) {
      event.target.style.fontSize = '20px';
    });
  }
}

addEventOnDays();

// Exercício 7

function newTask(string) {
  const task = createElementFunc('span', '', string);
  const taskList = document.querySelector('.my-tasks');
  taskList.appendChild(task);
}

newTask('Cozinhar');

// Exercício 8

function newTaskDiv(color) {
  const task = createElementFunc('div', 'task', '');
  const taskList = document.querySelector('.my-tasks');
  task.style.backgroundColor = color;
  taskList.appendChild(task);
}

newTaskDiv('green');

// Exercício 9

function selectTask() {
  const tasks = document.querySelectorAll('.task');
  for (const task of tasks) {
    task.addEventListener('click', function(event) {
      if (event.target.className.includes('selected')) {
        event.target.className = 'task';
      } else {
        event.target.className = 'task selected';
        addColorEvent();
      }
    });
  }
}

selectTask();

// Exercício 10

function addColorEvent() {
  const days = document.querySelector('#days');
  const task = document.querySelector('.selected');
  const color = task.style.backgroundColor;
  days.addEventListener('click', function(event) {
    console.log(event.target.style.color);
    if (event.target.style.color === 'green') {
      event.target.style.color = 'rgb(119,119,119)';
    } else {
      event.target.style.color = color;
    }
  });
}