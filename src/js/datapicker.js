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

// Обработчик клика по дате
const handleDateClick = (e) => {
  const button = e.target; // Получаем элемент кнопки, на которую кликнули

  // Убираем класс выделения с предыдущей выбранной даты (если она есть)
  const selected = dates.querySelector("datepicker__dates-selected");
  selected && selected.classList.remove("datepicker__dates-selected");
  
  // Добавляем класс выделения к текущей выбранной дате
  button.classList.add("selected");

  // Обновляем выбранную дату
  selectedDate = new Date(year, month, parseInt(button.textContent));
};

// Функция для отображения дат в календаре
const displayDates = () => {
  dates.innerHTML = ""; // Очищаем контейнер для дат

  // Получаем последнюю дату предыдущего месяца
  const lastOfPrevMonth = new Date(year, month, 0);
  // Рассчитываем дату, с которой начнем отображать дни (три последних дня)
  const startDay = lastOfPrevMonth.getDate() - 2; 

  // Отображаем три последних дня предыдущего месяца
  for (let i = startDay; i <= lastOfPrevMonth.getDate(); i++) {
    const button = createButton(i, true, false); // Создаем кнопку для каждой даты
    dates.appendChild(button); // Добавляем кнопку в контейнер
  }

  // Получаем последнюю дату текущего месяца
  const lastOfMonth = new Date(year, month + 1, 0); 

  // Отображаем все даты текущего месяца
  for (let i = 1; i <= lastOfMonth.getDate(); i++) {
    const button = createButton(i, false, false); // Создаем кнопку для каждой даты
    dates.appendChild(button); // Добавляем кнопку в контейнер
  }
  
  // Получаем первую дату следующего месяца и рассчитываем, сколько дней отображать
  const firstOfNextMonth = new Date(year, month + 1, 1);
  const daysInNextMonthToShow = 4 - firstOfNextMonth.getDay(); // Остаток дней до конца недели

  // Отображаем недостающие дни следующего месяца
  for (let i = 1; i <= daysInNextMonthToShow; i++) {
    const button = createButton(i, true, false); // Создаем кнопку для каждой даты
    dates.appendChild(button); // Добавляем кнопку в контейнер
  }
};

// Функция для создания кнопки даты
const createButton = (text, isDisabled = false, isToday = false) => {
  const button = document.createElement("button"); // Создаем новую кнопку
  button.textContent = text; // Устанавливаем текст кнопки
  button.disabled = isDisabled; // Устанавливаем, является ли кнопка неактивной
  button.classList.toggle("today", isToday); // Устанавливаем класс "today", если кнопка относится к текущему дню
  return button; // Возвращаем созданную кнопку
};

// Вызываем функцию отображения дат
displayDates();
