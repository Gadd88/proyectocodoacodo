const close = document.getElementById("close");
const fotos_contenedor = document.getElementsByClassName("fotos_contenedor")[0];

const open_amelia = document.getElementById("amelia")
const open_feca = document.getElementById("feca")
const open_tauro = document.getElementById("tauro")

const fotos_amelia = document.getElementById("fotos_amelia")
const fotos_feca = document.getElementById("fotos_feca")
const fotos_tauro = document.getElementById("fotos_tauro")

close.addEventListener("click", () => {
  fotos_contenedor.style.opacity = 0
  fotos_contenedor.style.zIndex = -1
  fotos_amelia.style.opacity = 0
  fotos_amelia.style.zIndex = -1
  fotos_feca.style.opacity = 0
  fotos_feca.style.zIndex = -1
  fotos_tauro.style.opacity = 0
  fotos_tauro.style.zIndex = -1
  close.style.opacity = 0
});

open_amelia.addEventListener("click", () => {
  fotos_contenedor.style.opacity = 1
  fotos_contenedor.style.zIndex = 11
  fotos_amelia.style.opacity = 11
  fotos_amelia.style.zIndex = 12
  close.style.zIndex = 9999
  close.style.opacity = 1
});

open_feca.addEventListener("click", () => {
  fotos_contenedor.style.opacity = 1
  fotos_contenedor.style.zIndex = 11
  fotos_feca.style.opacity = 11
  fotos_feca.style.zIndex = 12
  close.style.zIndex = 9999
  close.style.opacity = 1
});

open_tauro.addEventListener("click", () => {
  fotos_contenedor.style.opacity = 1
  fotos_contenedor.style.zIndex = 11
  fotos_tauro.style.opacity = 11
  fotos_tauro.style.zIndex = 12
  close.style.zIndex = 9999
  close.style.opacity = 1
});

document.getElementById("fotos_amelia").innerHTML = `<img src=${ameliaCafe}>`
document.getElementById("fotos_feca").innerHTML = `<img src=${feca}>`
document.getElementById("fotos_tauro").innerHTML = `<img src=${tauroCafe}>`


