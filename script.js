const menu = document.querySelector(".hamburger-container");
const mobile_nav = document.querySelector(".mobile-nav");
const dark = document.createElement("div");
dark.id = "dark";

document.body.appendChild(dark);

menu.addEventListener("click", function (e) {
  menu.classList.toggle("is-active");
  mobile_nav.classList.toggle("is-active");
  dark.classList.toggle("is-active");
});
