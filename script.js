const menu = document.querySelector(".hamburger-container");
const mobile_nav = document.querySelector(".mobile-nav");
const dark = document.querySelector(".dark");
const buttons = document.querySelectorAll("[data-slider-button]");
const thumbnail = document.querySelectorAll(".thumbnail");
const lightbox = document.querySelector(".lightbox");
const close_button = document.querySelector(".close");

thumbnail.forEach((thumbnail) => {
  thumbnail.addEventListener("click", (e) => {
    lightbox.classList.add("is-active");
  });
});

lightbox.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target !== e.currentTarget) return;
  lightbox.classList.remove("is-active");
});

close_button.addEventListener("click", (e) => {
  lightbox.classList.remove("is-active");
});

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const offset = button.dataset.sliderButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

menu.addEventListener("click", function (e) {
  menu.classList.toggle("is-active");
  mobile_nav.classList.toggle("is-active");
  dark.classList.toggle("is-active");
});
