const dropdown = document.querySelector(".dropdown");
const select = document.querySelector(".dropdown__select");
const caret = document.querySelector(".dropdown__caret");
const menu = document.querySelector(".dropdown__menu");

function drop() {}
select.addEventListener("click", () => {
  select.classList.toggle("select-clicked");
  caret.classList.toggle("dropdown__caret-rotate");
  menu.classList.toggle("dropdown__menu-open");
});

const span = document.querySelector(".dropdown__selected");

// Получаем все кнопки с классом dropdown__item-plus для увеличения значений
const plusButtons = document.querySelectorAll(".dropdown__item-plus");
// Получаем все кнопки с классом dropdown__item-minus для уменьшения значений
const minusButtons = document.querySelectorAll(".dropdown__item-minus");

// Создаем объект counters, который будет хранить ссылки на элементы input для различных категорий
const counters = {
  adult: document.getElementById("adultCounter"),   // Счетчик для взрослых
  children: document.getElementById("childrenCounter"), // Счетчик для детей
  babies: document.getElementById("babiesCounter")   // Счетчик для младенцев
};

// Функция для обновления счетчиков по заданному параметру (target) и изменению (delta)
const updateCounter = (target, delta) => {
  // Получаем текущее значение счетчика и преобразуем его в целое число
  const currentValue = parseInt(counters[target].value);
  // Обновляем значение счетчика, обеспечивая, чтобы оно не опускалось ниже 0
  counters[target].value = Math.max(0, currentValue + delta);
};

// Функция-обработчик событий, которая получает событие и изменение (delta)
const handleClick = (e, delta) => {
  // Извлекаем целевую категорию счетчика из атрибута data-target нажатой кнопки
  const targetCounter = e.target.dataset.target;
  // Вызываем функцию обновления счетчика с целевой категорией и значением изменения
  updateCounter(targetCounter, delta);
};

// Добавляем обработчики событий для кнопок "плюс"
// Для каждой кнопки запускаем лямбда-функцию, которая вызывает handleClick с delta равным 1
plusButtons.forEach((button) => {
  button.addEventListener("click", (e) => handleClick(e, 1)); // Увеличение на 1
  
  
});

// Добавляем обработчики событий для кнопок "минус"
// Для каждой кнопки запускаем лямбда-функцию, которая вызывает handleClick с delta равным -1
minusButtons.forEach((button) => {
  button.addEventListener("click", (e) => handleClick(e, -1)); // Уменьшение на 1
});