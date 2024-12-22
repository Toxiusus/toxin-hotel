const dropdown = document.querySelector(".dropdown");
const select = document.querySelector(".dropdown__select");
const caret = document.querySelector(".dropdown__caret");
const menu = document.querySelector(".dropdown__menu");

const plusButtons = document.querySelectorAll(".dropdown__item-plus");
const minusButtons = document.querySelectorAll(".dropdown__item-minus");

const span = document.querySelector(".dropdown__selected");

function drop() {}
select.addEventListener("click", () => {
  select.classList.toggle("select-clicked");
  caret.classList.toggle("dropdown__caret-rotate");
  menu.classList.toggle("dropdown__menu-open");
});

// Создаем объект counters, который будет хранить ссылки на элементы input для различных категорий
const counters = {
  adult: document.getElementById("adultCounter"), // Счетчик для взрослых
  children: document.getElementById("childrenCounter"), // Счетчик для детей
  babies: document.getElementById("babiesCounter"), // Счетчик для младенцев
};

// Функция для обновления счетчиков по заданному параметру (target) и изменению (delta)
const updateCounter = (target, delta) => {
  // Получаем текущее значение счетчика и преобразуем его в целое число
  const currentValue = parseInt(counters[target].value);
  // Обновляем значение счетчика, обеспечивая, чтобы оно не опускалось ниже 0
  // Обновляем значение счетчика для указанной категории (target) с учетом изменения (delta)
  counters[target].value = Math.max(0, currentValue + delta);
  // Здесь counter[target] указывает на соответствующий элемент <input> для данной категории (взрослые, дети или младенцы).
  // Мы обновляем его значение: если результат (currentValue + delta) отрицательный, установим в 0 (это предотвращает негативные значения).

  // Вычисляем общую сумму значений всех счетчиков
  const total = Object.values(counters).reduce(
    (sum, input) => sum + parseInt(input.value || 0), // На каждой итерации добавляем значение текущего счетчика к общей сумме.
    // parseInt(input.value || 0) = мы преобразуем значение текущего input в целое число. Если input.value пуста (например, "" из-за не введенных данных), то берем 0.
    0 // Начальное значение суммы равно 0
  );

  // Обновляем содержимое элемента <span> с общей суммой
  span.innerHTML = total;
  // В элементе <span> мы отображаем общую сумму всех значений счетчиков. Это позволяет пользователю видеть общую численность,
  // в зависимости от того, сколько взрослых, детей и младенцев выбрано.
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
