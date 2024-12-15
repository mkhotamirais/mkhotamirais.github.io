const accBtn = document.querySelectorAll(".acc-btn");

accBtn.forEach((accButton, i) => {
  accButton.addEventListener("click", function () {
    this.classList.toggle("expand");
    const accCollapse = this.nextElementSibling;
    if (this.classList.contains("expand")) {
      accCollapse.style.maxHeight = `${accCollapse.scrollHeight}px`;
    } else {
      accCollapse.style.maxHeight = 0;
    }
    autoCollapse(i);
  });
  window.addEventListener("click", function (e) {
    if (e.target !== accButton) {
      accButton.nextElementSibling.style.maxHeight = 0;
      accButton.classList.remove("expand");
    }
  });
});

function autoCollapse(i) {
  accBtn.forEach((accButton2, i2) => {
    if (i !== i2) {
      const accCollapse2 = accButton2.nextElementSibling;
      accButton2.classList.remove("expand");
      accCollapse2.style.maxHeight = 0;
    }
  });
}
