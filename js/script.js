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

const iframe = document.querySelector("iframe");
const visitProject = document.querySelector(".visit-project a");
const visitProjectTitle = document.querySelector(".visit-project span");

const portofolio = document.querySelector(".portofolio");
const hadinalmusri = document.querySelector(".hadinalmusri");
const homepage = document.querySelector(".homepage");
const warungOta = document.querySelector(".warung-ota");

const portofolioUrl = "https://mkhotami-portofolio.vercel.app/";
const hadinalmusriUrl = "https://hadinalmusri.com/";
const homepageUrl = "https://mkhotami.vercel.app/";
const warungotaUrl = "https://warung-ota.vercel.app/product/";

visitProject.setAttribute("href", portofolioUrl);

portofolio.addEventListener("click", function () {
  iframe.setAttribute("src", portofolioUrl);
  visitProjectTitle.textContent = "Portofolio";
  visitProject.setAttribute("href", portofolioUrl);
});
homepage.addEventListener("click", function () {
  iframe.setAttribute("src", homepageUrl);
  visitProjectTitle.textContent = "homepage";
  visitProject.setAttribute("href", homepageUrl);
});
warungOta.addEventListener("click", function () {
  iframe.setAttribute("src", warungotaUrl);
  visitProjectTitle.textContent = "warung ota";
  visitProject.setAttribute("href", warungotaUrl);
});
hadinalmusri.addEventListener("click", function () {
  iframe.setAttribute("src", hadinalmusriUrl);
  visitProjectTitle.textContent = "Hadinalmusri";
  visitProject.setAttribute("href", hadinalmusriUrl);
});
