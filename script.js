const darkBtn = document.getElementById("dark");

if (localStorage.getItem("mkhotamiDark")) document.body.classList.add(localStorage.getItem("mkhotamiDark"));
if (localStorage.getItem("mkhotamiDarkIcon")) darkBtn.innerHTML = localStorage.getItem("mkhotamiDarkIcon");

darkBtn.addEventListener("click", function () {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
    this.innerHTML = `<i class="fa-regular fa-moon"></i>`;
    localStorage.removeItem("mkhotamiDark");
    localStorage.setItem("mkhotamiDarkIcon", `<i class="fa-regular fa-moon"></i>`);
  } else {
    document.body.classList.add("dark");
    this.innerHTML = `<i class="fa-regular fa-sun"></i>`;
    localStorage.setItem("mkhotamiDark", "dark");
    localStorage.setItem("mkhotamiDarkIcon", `<i class="fa-regular fa-sun"></i>`);
  }
});
