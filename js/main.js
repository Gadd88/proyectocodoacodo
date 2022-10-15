//CLIMA
const apiKey = '3653d5bce8c0ea0f4386f3db4f6f79ac';
const fetchData = position => {
    const { latitude, longitude } = position.coords;
    fetch(`http://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => setWeatherData(data))
}

const setWeatherData = data =>{
    console.log(data);
    const weatherData = {
        temp: data.main.temp,
        location: data.name,
        description: data.weather[0].main,
    }
    Object.keys(weatherData).forEach( key => {
        document.getElementById(key).textContent = weatherData[key];
    });
}

const onLoad = () => {
    navigator.geolocation.getCurrentPosition(fetchData);
}


function mostrar(){
    document.getElementById("cafe_img").innerHTML = `
    <img src=${gontranCherrier}>
    `
    console.log(gontranCherrier)
}



document.getElementById("fotos").innerHTML = `
<div class="card">
    <img src=${feca}>
</div>`