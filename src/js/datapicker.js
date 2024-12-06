const datepickerBox = document.querySelector(".datepicker__box");
const datepickerInput = document.querySelector(".datepicker__input");
const datepickerTo = document.querySelector(".datepicker__input-to");
const datepickerDelete = document.querySelector(".datepicker__delete");
const datepickerSubmit = document.querySelector(".datepicker__submit");
const dates = document.querySelector(".datepicker__dates");

let selectedDate = new Date();
let year = selectedDate.getFullYear();
let month = selectedDate.getMonth();

datepickerInput.addEventListener("click", () => {
  datepickerBox.hidden = false;
});

datepickerTo.addEventListener("click", () => {
  datepickerBox.hidden = false;
});

datepickerDelete.addEventListener("click", () => {
  datepickerBox.hidden = true;
});

datepickerSubmit.addEventListener("click", () => {
  datepickerBox.hidden = true;
});

//отображать даты в интерфейсе календаря
const displayDates = () => {
  dates.innerHTML = ""; // Очистка контейнера для дат
  
  // Отображение последней недели предыдущего месяца
  const lastOfPrevMonth = new Date(year, month, 0); // Получить последнюю дату предыдущего месяца
  const startDay = lastOfPrevMonth.getDate() - lastOfPrevMonth.getDay(); // Определяем день для начала отображения

  for (let i = startDay; i <= lastOfPrevMonth.getDate(); i++) {
    const button = createButton(i, true, false); // Создаем кнопку для каждого дня
    dates.appendChild(button);
  }

  // Показать текущий месяц
  const lastOfMonth = new Date(year, month + 1, 0); // Получить последнее число месяца

  for (let i = 1; i <= lastOfMonth.getDate(); i++) {
    const button = createButton(i, false, false); // Создаем кнопку для каждого дня текущего месяца
    dates.appendChild(button);
  }

  // Отобразить первую неделю следующего месяца
  const firstOfNextMonth = new Date(year, month + 1, 1);
  const daysInNextMonthToShow = 7 - firstOfNextMonth.getDay(); // Сколько дней показывать из следующего месяца

  for (let i = 1; i <= daysInNextMonthToShow; i++) {
    const button = createButton(i, true, false); // Создаем кнопку для дней следующего месяца
    dates.appendChild(button);
  }
};

const createButton = (text, isDisabled = false, isToday = false) => {
  const button = document.createElement("button");
  button.textContent = text; // Устанавливаем текст кнопки
  button.disabled = isDisabled; // Задаем состояние кнопки (активна или нет)
  button.classList.toggle("today", isToday); // Добавляем класс "сегодня", если нужно
  return button; // Возвращаем кнопку
};

displayDates(); // Вызов функции для отображения дат