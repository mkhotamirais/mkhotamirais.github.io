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
