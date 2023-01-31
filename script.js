const menu = document.querySelector(".hamburger-container");
const mobile_nav = document.querySelector(".mobile-nav");
const dark = document.querySelector(".dark");
const buttons = document.querySelectorAll("[data-slider-button]");
const thumbnail = document.querySelectorAll(".thumbnail");
const lightbox = document.querySelector(".lightbox");
const close_button = document.querySelector(".close");
const lightbox_thumb = document.querySelectorAll(".lb-img-thumb");
/* --------- lightbox activation --------- */
thumbnail.forEach((thumbnail) => {
  thumbnail.addEventListener("click", (e) => {
    lightbox.classList.add("is-active");
    const slides = document.querySelector("[data-slides]");
    const activeSlide = slides.querySelector("[data-active]");
    delete activeSlide.dataset.active;
    slides.children[0].dataset.active = true;
    const container = document
      .querySelector(".thumb-1")
      .closest(".lightbox-thumbnail");
    const thumbnail = document.querySelector(".thumb-1");
    thumbnail.classList.add("opaque");
    container.classList.add("active");
  });
});

/* --------- lightbox deactivation --------- */
lightbox.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target !== e.currentTarget) return;
  lightbox.classList.remove("is-active");
});

close_button.addEventListener("click", (e) => {
  lightbox.classList.remove("is-active");
});

/* --------- lightbox image slider --------- */
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
/* --------- lightbox thumbnail active --------- */
lightbox_thumb.forEach((thumbnail) => {
  thumbnail.addEventListener("click", (e) => {
    const slides = document.querySelector("[data-slides]");
    const activeSlide = slides.querySelector("[data-active]");
    if (e.target.classList.contains("thumb-1")) {
      delete activeSlide.dataset.active;
      slides.children[0].dataset.active = true;
    } else if (e.target.classList.contains("thumb-2")) {
      delete activeSlide.dataset.active;
      slides.children[1].dataset.active = true;
    } else if (e.target.classList.contains("thumb-3")) {
      delete activeSlide.dataset.active;
      slides.children[2].dataset.active = true;
    } else {
      delete activeSlide.dataset.active;
      slides.children[3].dataset.active = true;
    }
  });
});

/* --------- mobile navigation toggle --------- */
menu.addEventListener("click", (e) => {
  menu.classList.toggle("is-active");
  mobile_nav.classList.toggle("is-active");
  dark.classList.toggle("is-active");
});

dark.addEventListener("click", (e) => {
  menu.classList.remove("is-active");
  mobile_nav.classList.remove("is-active");
  dark.classList.remove("is-active");
});
