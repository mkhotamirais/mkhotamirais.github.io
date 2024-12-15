const openNav = document.getElementById("open-nav");
const nav = document.querySelector("nav");
const closeNav = document.getElementById("close-nav");

openNav.addEventListener("click", () => {
  nav.classList.add("active");
});

closeNav.addEventListener("click", () => {
  nav.classList.remove("active");
});

const navMenu = document.querySelectorAll("nav .menu a");
navMenu.forEach((n) =>
  n.addEventListener("click", () => {
    nav.classList.remove("active");
  })
);
