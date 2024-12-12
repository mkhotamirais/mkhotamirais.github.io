const accordionItem = document.querySelectorAll(".accordion-item");

accordionItem.forEach((item, i) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
    accordionItem.forEach((item, j) => i !== j && item.classList.remove("active"));
  });
});
