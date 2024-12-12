// navbar
const openNavBtn = document.querySelector(".header .navbar .open-nav-btn");
const openNavIcon = document.querySelector(".header .navbar .open-nav-btn i");
const navContainer = document.querySelector(".header .navbar .nav-container");
const nav = document.querySelector(".header .navbar .nav-container nav");

openNavBtn.addEventListener("click", () => {
  openNavBtn.classList.toggle("active");
  navContainer.classList.add("active");

  openNavBtn.classList.contains("active")
    ? openNavIcon.classList.replace("fa-bars", "fa-xmark")
    : openNavIcon.classList.replace("fa-xmark", "fa-bars");
});

navContainer.addEventListener("click", () => {
  openNavBtn.classList.remove("active");
  navContainer.classList.remove("active");
  openNavIcon.classList.replace("fa-xmark", "fa-bars");
  nav.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});

const navMenus = [
  {
    href: "#",
    label: "html",
    subMenu: [
      { href: "html/html-1.html", label: "html-1" },
      { href: "html/html-2.html", label: "html-2" },
    ],
  },
  {
    href: "#",
    label: "css",
    subMenu: [
      { href: "css/css-marquee.html", label: "css-marquee" },
      { href: "css/robot-animation.html", label: "robot-animation" },
      { href: "css/simple-tips.html", label: "simple-tips" },
    ],
  },
  {
    href: "#",
    label: "js",
    subMenu: [
      { href: "js/vue-jon.html", label: "vue-jon" },
      { href: "js/vue-traversy.html", label: "vue-traversy" },
      { href: "js/alpine-wpu.html", label: "alpine-wpu" },
    ],
  },
  {
    href: "#",
    label: "yt",
    subMenu: [
      { href: "yt/yt-1.html", label: "yt-1" },
      { href: "yt/yt-2.html", label: "yt-2" },
    ],
  },
  {
    href: "#",
    label: "components",
    subMenu: [
      { href: "components/accordion", label: "accordion" },
      { href: "components/accordion2", label: "accordion2" },
      { href: "components/accordion3", label: "accordion3" },
      { href: "components/mobile-navbar", label: "mobile-navbar" },
      { href: "components/mobile-navbar2", label: "mobile-navbar2" },
      { href: "components/mobile-navbar3", label: "mobile-navbar3" },
      { href: "components/modal", label: "modal" },
    ],
  },
];

const navMenuElement = document.querySelector(".header .navbar .nav-menu");

navMenuElement.innerHTML = `
${navMenus
  .map(
    (navMenu) => `
    <div class="nav-item">
      <button type="button">
        <span>${navMenu.label}</span>
        <i class="fa fa-chevron-down"></i>
      </button>
      <div class="sub-menu">
        ${navMenu.subMenu
          .map(
            (subMenu) => `
          <a href="${subMenu.href}">${subMenu.label}</a>
          `
          )
          .join("")}
      </div>
    </div>
    `
  )
  .join("")}
`;
