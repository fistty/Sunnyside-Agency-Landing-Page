const hamburger = document.querySelector(".hamburger-button");
const mobileMenu = document.querySelector(".nav-ul");
const overlay = document.querySelector(".overlay");
const navLink = document.querySelectorAll(".nav-link");

function makeActive() {
  const ACT = "active";
  hamburger.classList.toggle(ACT);
  mobileMenu.classList.toggle(ACT);
  overlay.classList.toggle(ACT);
}
function removeActive() {
  const ACT = "active";
  hamburger.classList.remove(ACT);
  mobileMenu.classList.remove(ACT);
  overlay.classList.remove(ACT);
}

hamburger.addEventListener("click", makeActive);
overlay.addEventListener("click", makeActive);
navLink.forEach((element) => {
  element.addEventListener("click", removeActive);
});

// SCROLL IN ANIMATION
const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

hiddenElements.forEach((element) => observer.observe(element));
