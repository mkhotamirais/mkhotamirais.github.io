const openNav = document.getElementById("open-nav");
const nav = document.querySelector("nav");
const navContent = document.querySelector(".nav-content");

openNav.addEventListener("click", () => {
  nav.classList.add("active");
});

nav.addEventListener("click", () => {
  nav.classList.remove("active");
  navContent.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});

const navMenu = document.querySelectorAll("nav .menu a");
navMenu.forEach((n) =>
  n.addEventListener("click", () => {
    nav.classList.remove("active");
  })
);
