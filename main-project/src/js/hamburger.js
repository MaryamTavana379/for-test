const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav__list--right");
// let divtag = document.createElement("div");
const body = document.getElementById("#body");
// const x = document.getElementById("nav__list--right")
// if(navMenu.style.position == "fixed"){

 
// }
hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  body.style.overflowY = "hidden"
//   document.getElementById("navigation").appendChild(divtag)
 
}
