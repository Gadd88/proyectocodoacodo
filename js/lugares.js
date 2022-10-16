//VENTANA MODAL

const open = document.getElementById("open_modal");
const modal_container = document.getElementById("modal_container");
const close = document.getElementById("close_modal");

open.addEventListener("click", () => {
  modal_container.style.opacity = 1;
});

close.addEventListener("click", () => {
  modal_container.style.opacity = 0;
});


