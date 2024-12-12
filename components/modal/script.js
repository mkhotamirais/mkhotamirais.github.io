const openModalBtn = document.getElementById("open-modal-btn");
const closeModalBtn = document.getElementById("close-modal-btn");
const modalContainer = document.getElementById("modal-container");
const modalContent = document.querySelector(".modal-content");

openModalBtn.addEventListener("click", () => {
  modalContainer.classList.add("show");
});

closeModalBtn.addEventListener("click", () => {
  modalContainer.classList.remove("show");
});

modalContainer.addEventListener("click", () => {
  modalContainer.classList.remove("show");
  modalContent.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});
