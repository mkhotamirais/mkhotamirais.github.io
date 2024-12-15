const header = document.querySelector(".header");
const navbar = document.querySelector(".header .navbar");
const menuBtn = document.querySelector("#menu-btn");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
});

window.onscroll = () => {
  menuBtn.classList.remove("fa-xmark");
  navbar.classList.remove("active");

  if (window.scrollY > 0) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};
