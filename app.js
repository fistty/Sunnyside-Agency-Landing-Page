const hamburger = document.querySelector(".hamburger-button");
const mobileMenu = document.querySelector(".nav-ul");
const overlay = document.querySelector(".overlay");
const navLink = document.querySelectorAll(".nav-link");


function makeActive() {
  let act = "active";
  hamburger.classList.toggle(act);
  mobileMenu.classList.toggle(act);
  overlay.classList.toggle(act);
}
function removeActive() {
  let act = "active";
  hamburger.classList.remove(act);
  mobileMenu.classList.remove(act);
  overlay.classList.remove(act);
}

hamburger.addEventListener("click", makeActive);
overlay.addEventListener("click", makeActive);
navLink.forEach((element) => {
  element.addEventListener("click", removeActive);
});
