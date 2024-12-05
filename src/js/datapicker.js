const datepickerBox = document.querySelector(".datepicker__box"); //datepickerinbox который находится в миксине
const datepickerInput = document.querySelector(".datepicker__input"); //datepickerinput который находится в миксине
const datepickerTo = document.querySelector(".datepicker__input-to"); //datepickerinput который находится в миксине
const body = document.querySelector("body");

datepickerInput.addEventListener("click", () => {
  //когда нажимаем на инпут тру меняется на фолсе и бок появляется
  datepickerBox.hidden = false;
});

datepickerTo.addEventListener("click", () => {
  //когда нажимаем на инпут тру меняется на фолсе и бок появляется
  datepickerBox.hidden = false;
});

body.addEventListener("click", () => {
  //когда нажимаем на инпут тру меняется на фолсе и бок появляется
  datepickerBox.hidden = true;
});
