const dropdowns = document.querySelector(".dropdown");

const select = document.querySelector('.select')

const caret = document.querySelector('.caret')

const menu = document.querySelector('.menu')
const options = document.querySelector('.menu li')
const selected = document.querySelector('.selected')

select.addEventListener('click',() => {
    select.classList.toggle('select-clicked')
    caret.classList.toggle('caret-rotate')
})



