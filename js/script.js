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

const mkhotamiPortofolio = document.querySelector(".mkhotami-portofolio");
const publicApis = document.querySelector(".public-apis");
const panduanReactjs = document.querySelector(".panduan-reactjs");
const mkhotamiRingkasan = document.querySelector(".mkhotami-ringkasan");
const mkhotamiEduwork = document.querySelector(".mkhotami-eduwork");
const hadinalmusri = document.querySelector(".hadinalmusri");

const mkhotamiPortofolioUrl = "https://mkhotami-portofolio.vercel.app/";
const publicApisUrl = "https://panduan-public-apis.vercel.app/";
const panduanReactjsUrl = "https://panduan-reactjs.vercel.app/";
const mkhotamiRingkasanUrl = "https://mkhotami-ringkasan.vercel.app/";
const mkhotamiEduworkUrl = "https://mkhotami-eduwork.vercel.app/";
const hadinalmusriUrl = "https://hadinalmusri.com";

visitProject.setAttribute("href", mkhotamiPortofolioUrl);

mkhotamiPortofolio.addEventListener("click", function () {
  iframe.setAttribute("src", mkhotamiPortofolioUrl);
  visitProjectTitle.textContent = "Mkhotami Portofolio";
  visitProject.setAttribute("href", mkhotamiPortofolioUrl);
});
publicApis.addEventListener("click", function () {
  iframe.setAttribute("src", publicApisUrl);
  visitProjectTitle.textContent = "Public Apis";
  visitProject.setAttribute("href", publicApisUrl);
});
panduanReactjs.addEventListener("click", function () {
  iframe.setAttribute("src", panduanReactjsUrl);
  visitProjectTitle.textContent = "Panduan Reactjs";
  visitProject.setAttribute("href", panduanReactjsUrl);
});
mkhotamiRingkasan.addEventListener("click", function () {
  iframe.setAttribute("src", mkhotamiRingkasanUrl);
  visitProjectTitle.textContent = "Mkhotami Ringkasan";
  visitProject.setAttribute("href", mkhotamiRingkasanUrl);
});
mkhotamiEduwork.addEventListener("click", function () {
  iframe.setAttribute("src", mkhotamiEduworkUrl);
  visitProjectTitle.textContent = "Mkhotami Eduwork";
  visitProject.setAttribute("href", mkhotamiEduworkUrl);
});
hadinalmusri.addEventListener("click", function () {
  iframe.setAttribute("src", hadinalmusriUrl);
  visitProjectTitle.textContent = "Hadinalmusri";
  visitProject.setAttribute("href", hadinalmusriUrl);
});
