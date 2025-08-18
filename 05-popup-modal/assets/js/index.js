// SIMPLE POPUP MODAL

const simpleModalbody = document.body;
const showSimpleModalBtn = document.getElementById("show-simple-modal-btn");
const simpleModal = document.getElementById("simple-modal");
const closeSimpleModalBtn = document.getElementById("close-simple-modal-btn");
const simpleModalWrapper = document.getElementById("simple-modal-wrapper");

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

showSimpleModalBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleModal();
});

closeSimpleModalBtn.addEventListener("click", closeModal);

simpleModalWrapper.addEventListener("click", function (event) {
  if (event.target === simpleModalWrapper) {
    closeModal();
  }
});

window.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && simpleModal.style.display === "block") {
    closeModal();
  }
});

// DYNAMIC POPUP MODAL

const body = document.body;
const dynamicModalBtn = document.querySelectorAll(".dynamic-modal-btn");
const dynamicModals = document.querySelectorAll(".dynamic-modal");
const dynamicCloseBtns = document.querySelectorAll(".dynamic-close-btn");

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

dynamicCloseBtns.forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    const modal = closeBtn.closest(".dynamic-modal");
    modal.style.display = "none";
    body.classList.remove("modal-open");
  });
});

dynamicModals.forEach((modal) => {
  const wrapper = modal.querySelector(".modal-wrapper");
  wrapper.addEventListener("click", (event) => {
    if (event.target === wrapper) {
      modal.style.display = "none";
      body.classList.remove("modal-open");
    }
  });
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    dynamicModals.forEach((modal) => {
      if ((modal.style.display = "block")) {
        modal.style.display = "none";
        body.classList.remove("modal-remove");
      }
    });
  }
});
