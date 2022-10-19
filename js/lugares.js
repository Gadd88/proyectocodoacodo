//VENTANA MODAL

const open_gontran = document.getElementById('gontran');
const open_moisha = document.getElementById('moisha');
const open_tognis = document.getElementById('tognis');
const open_amelia = document.getElementById('amelia');

const fotos_gontran = document.getElementById('fotos_gontran');
const fotos_moisha = document.getElementById('fotos_moisha');
const fotos_tognis = document.getElementById('fotos_tognis');
const fotos_amelia = document.getElementById('fotos_amelia');

const close = document.getElementById('close');
const fotos_contenedor = document.getElementsByClassName('fotos_contenedor')[0];

close.addEventListener('click', () => {
  fotos_contenedor.style.opacity = 0
  fotos_contenedor.style.zIndex = -1
  fotos_gontran.style.zIndex = -1
  fotos_gontran.style.opacity = 0
  fotos_moisha.style.zIndex = -1
  fotos_moisha.style.opacity = 0
  fotos_tognis.style.zIndex = -1
  fotos_tognis.style.opacity = 0
  close.style.opacity = 0
});

/*****************************************BELGRANO****************************************/

open_gontran.addEventListener('click', () => {
  fotos_contenedor.style.opacity = 1
  fotos_contenedor.style.zIndex = 11
  fotos_gontran.style.opacity = 11
  fotos_gontran.style.zIndex = 12
  close.style.zIndex = 9999
  close.style.opacity = 1
});
open_moisha.addEventListener('click', () => {
  fotos_contenedor.style.opacity = 1
  fotos_contenedor.style.zIndex = 11
  fotos_moisha.style.opacity = 11
  fotos_moisha.style.zIndex = 12
  close.style.zIndex = 9999
  close.style.opacity = 1
});
open_tognis.addEventListener('click', () => {
  fotos_contenedor.style.opacity = 1
  fotos_contenedor.style.zIndex = 11
  fotos_tognis.style.opacity = 11
  fotos_tognis.style.zIndex = 12
  close.style.zIndex = 9999
  close.style.opacity = 1
});

/*****************************************CABALLITO****************************************/


document.getElementById('fotos_gontran').innerHTML = `<img src=${gontranCherrier}>`
document.getElementById('fotos_moisha').innerHTML = `<img src=${moishaBakery}>`
document.getElementById('fotos_tognis').innerHTML = `<img src=${tognisCafe}>`
document.getElementById('fotos_amelia').innerHTML = `<img src=${ameliaCafe}>`



//querySelectorAll
// for(const elem of open){
//   elem.addEventListener('click', () => {
//     modal_ventana.style.opacity = 1
//     modal_ventana.style.zIndex = 10;
//     modal_contenedor.style.zIndex = 12;
//     close.style.opacity = 1;
//   });
// }