//VENTANA MODAL

const open = document.querySelectorAll('.open_modal');
const modal_ventana = document.getElementById('modal_ventana');
const close = document.getElementById('close_modal');
const modal_contenedor = document.getElementsByClassName('modal_contenedor')[0];



for(const elem of open){
  elem.addEventListener('click', () => {
    modal_ventana.style.opacity = 1
    modal_ventana.style.zIndex = 10;
    modal_contenedor.style.zIndex = 12;
    close.style.opacity = 1;
  });
}






close.addEventListener('click', () => {
  modal_ventana.style.opacity = 0
  modal_ventana.style.zIndex = -1;
  modal_contenedor.style.zIndex = -1;
  close.style.opacity = 0;
});

document.getElementById('modal_ventana').innerHTML = `<img src=${gontranCherrier}>`

document.getElementById('modal_ventana').classList.add('carrusel-item');

