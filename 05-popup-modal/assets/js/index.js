// SIMPLE POPUP MODAL

const simpleModalbody = document.body;
const showSimpleModalBtn = document.getElementById("show-simple-modal-btn");
const simpleModal = document.getElementById("simple-modal");
const closeSimpleModalBtn = document.getElementById("close-simple-modal-btn");

function openModal() {
  simpleModalbody.classList.add("modal-open");
  simpleModal.style.display = "block";
}

function closeModal() {
  simpleModalbody.classList.remove("modal-open");
  simpleModal.style.display = "none";
}

function toggleModal() {
  if (simpleModalbody.classList.contains("modal-open")) {
    closeModal();
  } else {
    openModal();
  }
}

// Attach event listeners
showSimpleModalBtn.addEventListener("click", toggleModal);
closeSimpleModalBtn.addEventListener("click", closeModal);

// DYNAMIC POPUP MODAL

const body = document.body;
const dynamicModalBtn = document.querySelectorAll(".dynamic-modal-btn");
const dynamicModal = document.querySelectorAll(".dynamic-modal");
const dynamicCloseBtn = document.querySelectorAll(".dynamic-close-btn");

dynamicModalBtn.forEach((button) => {
  button.addEventListener("click", () => {
    const modalIndex = button.getAttribute("data-modal");
    const modalToOpen = document.querySelector(
      `.dynamic-modal[data-index="${modalIndex}"]`
    );
    if (modalToOpen) {
      modalToOpen.style.display = "block";
      body.classList.add("modal-open");
    }
  });
});

dynamicCloseBtn.forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    closeBtn.closest(".dynamic-modal").style.display = "none";
    body.classList.remove("modal-open");
  });
});