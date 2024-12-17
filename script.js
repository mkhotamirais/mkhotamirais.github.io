const navMenus = [
  {
    href: "#",
    label: "html",
    subMenu: [
      { href: "html/html-1.html", label: "html-1" },
      { href: "html/html-2.html", label: "html-2" },
      { href: "html/svg.html", label: "svg" },
      { href: "html/canvas", label: "canvas" },
    ],
  },
  {
    href: "#",
    label: "css",
    subMenu: [
      { href: "css/css-background.html", label: "css-background" },
      { href: "css/css-marquee.html", label: "css-marquee" },
      { href: "css/robot-animation.html", label: "robot-animation" },
      { href: "css/simple-tips.html", label: "simple-tips" },
      { href: "css/sticky", label: "sticky" },
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
      {
        href: "#",
        label: "wpu",
        subMenu2: [
          { href: "yt/wpu/wpu-mtrz1", label: "wpu-mtrz1" },
          { href: "yt/wpu/wpu-bs1", label: "wpu-bs1" },
          { href: "yt/wpu/wpu-bs2", label: "wpu-bs2" },
        ],
      },
      {
        href: "#",
        label: "bedimcode",
        subMenu2: [
          { href: "yt/bedimcode/27-11-24-nav", label: "27-11-24-nav" },
          { href: "yt/bedimcode/06-04-20-portfolio", label: "06-04-20-portfolio" },
        ],
      },
      {
        href: "#",
        label: "mwd",
        subMenu2: [
          { href: "yt/mwd/01-01-21-tour-travel", label: "01-01-21-tour-travel" },
          { href: "yt/mwd/01-11-24-halloween", label: "01-11-24-halloween" },
          { href: "yt/mwd/04-01-21-online-education", label: "04-01-21-online-education" },
        ],
      },
    ],
  },
  {
    href: "#",
    label: "components",
    subMenu: [
      {
        href: "#",
        label: "accordion",
        subMenu2: [
          { href: "components/accordion/acc1", label: "acc1" },
          { href: "components/accordion/acc2", label: "acc2" },
          { href: "components/accordion/acc3", label: "acc3" },
          { href: "components/accordion/acc4", label: "acc4" },
        ],
      },
      {
        href: "#",
        label: "navbar",
        subMenu2: [
          { href: "components/navbar/mobile-navbar1", label: "mobile-navbar1" },
          { href: "components/navbar/mobile-navbar2", label: "mobile-navbar2" },
          { href: "components/navbar/mobile-navbar3", label: "mobile-navbar3" },
          { href: "components/navbar/navbar-nested", label: "navbar-nested" },
        ],
      },
      {
        href: "#",
        label: "slider",
        subMenu2: [
          { href: "components/slider/slider1", label: "slider1" },
          { href: "components/slider/slider2", label: "slider2" },
        ],
      },
      { href: "components/modal", label: "modal" },
    ],
  },
];

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
          .map((subMenu) => {
            if (subMenu.subMenu2) {
              return `
                <div class="nav-item2">
                  <button type="button">
                    <span>${subMenu.label}</span>
                    <i class="fa fa-chevron-right"></i>
                  </button>
                  <div class="sub-menu2">
                  ${subMenu.subMenu2
                    .map(
                      (subMenu2) => `
                      <a href="${subMenu2.href}">${subMenu2.label}</a>
                      `
                    )
                    .join("")}
                  </div>
                </div>
                `;
            } else {
              return `
                <a href="${subMenu.href}">${subMenu.label}</a>
                `;
            }
          })
          .join("")}
      </div>
    </div>
    `
  )
  .join("")}
`;
