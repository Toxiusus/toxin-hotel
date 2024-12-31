const links = document.querySelectorAll(".slider__nav a");

const slides = document.querySelectorAll(".slider__box img");

links.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    links.forEach((l) => l.classList.remove("slider__link-active"));

    this.classList.add("slider__link-active");

    const targetId = this.getAttribute("href").substring(1);

    const targetSlide = document.getElementById(targetId);

    targetSlide.scrollIntoView({ behavior: "smooth" });
  });
});
