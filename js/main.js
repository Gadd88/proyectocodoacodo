//API CLIMA
/*************************************************************************** */

const onLoad = () => {
  navigator.geolocation.getCurrentPosition(fetchData);
};

const apiKey = "3653d5bce8c0ea0f4386f3db4f6f79ac";

const fetchData = (position) => {
  const { latitude, longitude } = position.coords;
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => setWeatherData(data));
};

const setWeatherData = (data) => {
  // console.log(data);
  const weatherData = {
    location: data.name,
    temp: data.main.temp,
    description: data.weather[0].main,
  };
  Object.keys(weatherData).forEach((key) => {
    document.getElementById(key).textContent = `${weatherData[key]}`;
  });
};

/************************************************************************************ */

// function mostrar(){
//     document.getElementById('cafe_img').style.display = 'flex';
//     document.getElementById("cafe_img").innerHTML = `
//     <img src=${gontranCherrier}>
//     `
// };

/************************************************************************************ */

const open = document.getElementsById("open_modal");
const modal_container = document.getElementById("modal_container");
const close = document.getElementById("close_modal");

open.addEventListener("click", () => {
  modal_container.classList.add("show");
});

close.addEventListener("click", () => {
  modal_container.classList.remove("show");
});

document.getElementById("fotos").innerHTML = `
<div class="card">
    <img src=${feca}>
</div>`;


/********************************************************************************** */
//Validacion de Formulario

const formulario = document.getElementById('formulario_form');
const nombre = document.getElementsById('nombre');
const email = document.getElementsById('email');
const tel = document.getElementById('tel');
const error = document.getElementById('form_error');
error.style.color = 'red';


formulario.addEventListener('submit', e => {
  e.preventDefault();
  if(nombre.value.length < 6){
    alert('Nombre muy corto')
  }
})




