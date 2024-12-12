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

// Преобразуем HTMLCollection dateButtons (коллекция элементов кнопок) в массив
Array.from(dateButtons).forEach((element) => {
  // Для каждой кнопки добавляем обработчик события "click"
  element.addEventListener("click", (e) => {
    // Получаем элемент, на который кликнули
    const button = e.target;

    // Создаем новый объект Date на основе текущего года и месяца, передавая день из текстового содержимого кнопки,
    // и преобразуем его в целое число с помощью parseInt
    selectedDate = new Date(year, month, parseInt(button.textContent));

    // Проверяем, какой из инпутов в данный момент свободен
    if (!datepickerInput.disabled) { //если говорить тупым языком,то тут сказано является ли input заблокированым
      // Устанавливаем значение в первый input и блокируем его
      datepickerInput.value = formatDate(selectedDate); // Устанавливаем значение в input (datepickerInput) в отформатированном виде
      datepickerInput.disabled = true; // Блокируем первый инпут

      // Устанавливаем фокус на второй input
      datepickerTo.focus();
    } else {
      // Устанавливаем значение во второй input
      datepickerTo.value = formatDate(selectedDate);

      // При желании можно также разблокировать первый инпут
      datepickerInput.disabled = false; // Разблокируем первый инпут для повторного использования
    }
  });
});

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
  // datepickerInput.value = selectedDate.toLocaleDateString("en-GB", {
  //   year: "numeric",
  //   day: "2-digit",
  //   month: "2-digit",
  // });
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

// Обработчик клика по дате
const handleDateClick = (e) => {
  const button = e.target; // Получаем элемент кнопки, на которую кликнули

  // Убираем класс выделения с предыдущей выбранной даты (если она есть)
  const selected = dates.querySelector("datepicker__dates-selected");
  selected && selected.classList.remove("datepicker__dates-selected");

  // Добавляем класс выделения к текущей выбранной дате
  button.classList.add("selected");

  // Обновляем выбранную дату
  let selectedDate = new Date(year, month, parseInt(button.textContent));
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
  return button; // Возвращаем созданную кнопку
};

// Вызываем функцию отображения дат
displayDates();
