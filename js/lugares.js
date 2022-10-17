//VENTANA MODAL

const open = document.getElementById('open1');
const modal_ventana = document.getElementById('modal_ventana');
const close = document.getElementById('close_modal');

open.addEventListener('click', () => {
  modal_ventana.style.opacity = 1
  modal_ventana.style.zIndex = 10;
});

close.addEventListener('click', () => {
  modal_ventana.style.opacity = 0
  modal_ventana.style.zIndex = -1;
});

document.getElementById('modal_ventana').innerHTML = `<img src=${gontranCherrier}`
