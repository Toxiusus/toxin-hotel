const dropdown = document.querySelector(".dropdown");
const select = document.querySelector(".dropdown__select");
const caret = document.querySelector(".dropdown__caret");
const menu = document.querySelector(".menu");
const options = document.querySelectorAll(".menu li");
const selected = document.querySelector(".dropdown__selected");

select.addEventListener("click", () => {
  select.classList.toggle("select-clicked");
  caret.classList.toggle("dropdown__caret-rotate");
  menu.classList.toggle("menu-open");
});