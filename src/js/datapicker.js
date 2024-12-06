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
  dates.innerHTML = ""; //*очистить даты
  //*отображать последнюю неделю предыдущего месяца
  const lastOfPrevMonth = new Date(year, month, 0); //получить последнюю дату предыдущего месяца

  for (let i = 0; i <= lastOfPrevMonth.getDate(); i++) {
    const text = lastOfPrevMonth.getDate() - lastOfPrevMonth.getDate() + i;
    const button = createButton(text, true, false);
    dates.appendChild(button);
  }
  //*показать текущий месяц

  const lastOfMonth = new Date(year, month + 1, 0); //получить последнее число месяца

  for (let i = 1; i <= lastOfMonth.getDate(); i++) {
    const button = createButton(i, false, false);
    dates.appendChild(button);
  }

  //отобразить первую неделю следующего месяца
  const firstOfNextMonth = new Date(year, month + 1, 1);

  for (let i = firstOfNextMonth.getDay(); i < 7; i++) {
    const button = createButton(i, true, false);
    dates.appendChild(button);
  }
};

const createButton = (text, isDisabled = false, isToday = false) => {
  const button = document.createElement("button");
  button.textContent = text;
  button.disabled = isDisabled;
  button.classList.toggle("today", isToday);
  return button;
};

displayDates();
