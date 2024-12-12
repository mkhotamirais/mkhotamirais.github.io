const accordionItem = document.querySelectorAll(".accordion-item");

accordionItem.forEach((item, i) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");

    accordionItem.forEach((item, j) => {
      const accContent = item.querySelector(".accordion-content");
      const icon = item.querySelector("button .icon");

      if (i !== j) {
        item.classList.remove("active");
      }

      if (item.classList.contains("active")) {
        accContent.style.height = accContent.scrollHeight + "px";
        icon.style.transform = "rotate(180deg)";
      } else {
        accContent.style.height = "0px";
        icon.style.transform = "rotate(0deg)";
      }
    });
  });
});
