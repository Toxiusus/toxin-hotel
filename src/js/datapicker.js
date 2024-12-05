const datepickerBox = document.querySelector(".datepicker__box");
const datepickerInput = document.querySelector(".datepicker__input");
const datepickerTo = document.querySelector(".datepicker__input-to");
const datepickerDelete = document.querySelector(".datepicker__delete");
const datepickerSubmit = document.querySelector(".datepicker__submit");
const datepickerDates = document.querySelector(".datepicker__dates");

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
  //когда нажимаем на инпут тру меняется на фолсе и блок появляется
  datepickerBox.hidden = true;
});

datepickerSubmit.addEventListener("click", () => {
  //когда нажимаем на инпут тру меняется на фолсе и блок появляется
  datepickerBox.hidden = true;
});

//отображать даты в интерфейсе календаря
const displayDates = () => {
  //очистить даты
  datepickerDates.innerHTML = "";
};

displayDates();
