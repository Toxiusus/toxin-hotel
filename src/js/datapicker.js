const datepickerBox = document.querySelector(".datepicker__box");
const datepickerInput = document.querySelector(".datepicker__input");
const datepickerTo = document.querySelector(".datepicker__input-to");
const datepickerDelete = document.querySelector(".datepicker__delete");
const datepickerSubmit = document.querySelector(".datepicker__submit");
const dates = document.querySelector(".datepicker__dates");
const nextBtn = datepickerBox.querySelector(".datepicker__next");
const prevBtn = datepickerBox.querySelector(".datepicker__prev");
const monthInput = datepickerBox.querySelector(".datepicker__month");
const yearInput = datepickerBox.querySelector(".datepicker__year");
const dateButtons = document.querySelectorAll("div.datepicker__dates");

// Создаем новый объект Date, представляющий текущую дату и время
let selectedDate = new Date();

// Получаем текущий год из объекта selectedDate
let year = selectedDate.getFullYear();

// Получаем текущий месяц из объекта selectedDate (0 - январь, 11 - декабрь)
let month = selectedDate.getMonth();

// Определяем функцию formatDate, которая форматирует объект даты в строку формата "DD.MM.YYYY"
const formatDate = (date) => {
  // Получаем день месяца и добавляем ведущий ноль, если это необходимо (например, 01, 02 и т.д.)
  const day = String(date.getDate()).padStart(2, "0");

  // Получаем месяц (нужно добавить 1, так как months начинаются с 0) и добавляем ведущий ноль
  const month = String(date.getMonth() + 1).padStart(2, "0");

  // Получаем год
  const year = date.getFullYear();

  // Возвращаем форматированную строку в формате "DD.MM.YYYY"
  return `${day}.${month}.${year}`;
};

datepickerInput.addEventListener("click", () => {
  datepickerBox.hidden = false;
});

datepickerDelete.addEventListener("click", () => {
  datepickerBox.hidden = true;
  datepickerInput.value = "";
});

datepickerTo.addEventListener("click", () => {
  datepickerBox.hidden = false;
});

datepickerSubmit.addEventListener("click", () => {
  datepickerBox.hidden = true;
});

nextBtn.addEventListener("click", () => {
  if (month === 11) year++;
  month = (month + 1) % 12;
  displayDates();
});

prevBtn.addEventListener("click", () => {
  if (month === 0) year--;
  month = (month - 1 + 12) % 12;
  displayDates();
});

const updateYearMonth = () => {
  monthInput.selectedIndex = month;
  yearInput.value = year;
};

// Функция для отображения дат в календаре
const displayDates = () => {
  dates.innerHTML = ""; // Очищаем контейнер для дат

  updateYearMonth();

  // Получаем последнюю дату предыдущего месяца
  const lastOfPrevMonth = new Date(year, month, 0);
  // Рассчитываем дату, с которой начнем отображать дни
  const startDay = lastOfPrevMonth.getDate() - 1;

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
  button.classList.add("btn-reset");
  return button; // Возвращаем созданную кнопку
};

// Вызываем функцию отображения дат
displayDates();

// Ждем, пока документ полностью загрузится
document.addEventListener("DOMContentLoaded", function () {
  // Находим элемент div с классом 'datepicker__dates'
  var datePickerDiv = document.querySelector(".datepicker__dates");
  var buttons = datePickerDiv.querySelectorAll("button");

  var buttonsArray = Array.from(buttons);
  var clickedButtons = []; // Массив для хранения нажатых кнопок

  buttonsArray.forEach((element) => {
    element.addEventListener("click", (e) => {
      const button = e.target;
      
      // Проверяем, если уже нажимали на две разные кнопки
      if (clickedButtons.includes(button)) {
        return; // Если кнопка уже была нажата, выходим из функции
      }

      // Добавляем текущую кнопку в массив нажатых кнопок
      clickedButtons.push(button);

      // Если нажато уже две кнопки, сбрасываем стиль
      if (clickedButtons.length > 3) {
        clickedButtons.forEach((btn) => {
          btn.classList.remove("selected");
        });
        clickedButtons = []; // Очищаем массив
      }

      // Удаляем класс 'selected' у предыдущей выбранной кнопки
      const selectedButton = datePickerDiv.querySelector(".selected");
      if (selectedButton && selectedButton !== button) {
        selectedButton.classList.remove("selected");
      }

      // Устанавливаем класс "selected" у текущей кнопки
      button.classList.add("selected");

      // Логика для обработки даты
      const selectedDate = new Date(year, month, parseInt(button.textContent));
      if (!datepickerInput.disabled) {
        datepickerInput.value = formatDate(selectedDate);
        datepickerInput.disabled = true;
      } else {
        datepickerTo.value = formatDate(selectedDate);
        datepickerInput.disabled = false;
      }

      datepickerTo.focus();
    });
  });
});
