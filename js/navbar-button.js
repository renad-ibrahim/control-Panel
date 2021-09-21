const button = document.querySelector(".button");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

button.addEventListener("click", () => {
  navLinks.classList.toggle("open");

});