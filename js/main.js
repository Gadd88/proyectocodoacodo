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





/********************************************************************************** */
//Validacion de Formulario

const formulario = document.getElementById('formulario_form');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const tel = document.getElementById('tel');
const mensaje = document.getElementById('mensaje');
const error = document.getElementById('form_error');



formulario.addEventListener('submit', e => {
  e.preventDefault()

  let warnings = ""

  let entrar = false

  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  let regexTel = /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/

  if(nombre.value.length < 6){
    warnings += `El nombre no es válido <br>`
    entrar = true
  }
  if(!regexEmail.test(email.value)){
    warnings += `El email no es válido <br>`
    entrar = true
  }
  if(!regexTel.test(tel.value)){
    warnings += `El teléfono no es válido <br>`
    entrar = true
  }
  if(mensaje.value == null || mensaje.value == ''){
    warnings += `El campo de mensaje no puede estar vacío`
  }

  document.getElementById('form_error').innerHTML = `
  ${warnings}`
  document.getElementById('form_error').style.color = 'red';

})










