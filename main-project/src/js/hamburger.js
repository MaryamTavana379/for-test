const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav__list--right");
const html = document.getElementsByTagName("html")[0];

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  html.style.overflowY = "hidden";
  //   document.getElementById("navigation").appendChild(divtag)
}
