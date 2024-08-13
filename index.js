const button = document.querySelector(".open-button");

const backdrop = document.querySelector(".modal-container");

button.addEventListener("click", toggleModal);

backdrop.addEventListener("click", (e) => {
  const target = e.target.closest(".close-button");

  if (!target) {
    return;
  }

  toggleModal();
});

function toggleModal() {
  backdrop.classList.toggle("is-open");
}

const menubutton = document.querySelector(".menu-button");

const menu = document.querySelector(".modal-menu-window");

menubutton.addEventListener("click", toggleMenu);

menu.addEventListener("click", (e) => {
  const target = e.target.closest(".menu-close-button");

  if (!target) {
    return;
  }

  toggleMenu();
});

function toggleMenu() {
  menu.classList.toggle("is-open");
}
