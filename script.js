const menu = document.querySelector(".hamburger-container");
const mobile_nav = document.querySelector(".mobile-nav");

menu.addEventListener("click", function (e) {
  menu.classList.toggle("is-active");
  mobile_nav.classList.toggle("is-active");
});
