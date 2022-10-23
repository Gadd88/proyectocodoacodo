// const carrusel = document.querySelector(".modal_ventana");

const carrusel = document.querySelector(".carrusel-item");

let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
let intervalo = null;
let step = 1;

const start = () => {
  intervalo = setInterval(function () {
    carrusel.scrollLeft = carrusel.scrollLeft + step;
    if (carrusel.scrollLeft === maxScrollLeft) {
      step = step * -1;
    } else if (carrusel.scrollLeft === 0) {
      step = step * -1;
    }
  }, 10);
};

const stop = () => {
  clearInterval(intervalo);
};

carrusel.addEventListener("mouseover", () => {
  stop();
});

carrusel.addEventListener("mouseout", () => {
  start();
});

start();





// querySelectorAll
// for(const elem of open){
//   elem.addEventListener('click', () => {
//     modal_ventana.style.opacity = 1
//     modal_ventana.style.zIndex = 10;
//     modal_contenedor.style.zIndex = 12;
//     close.style.opacity = 1;
//   });
// }