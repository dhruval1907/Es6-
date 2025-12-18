let apikey = `1cc953bb42da005a51a8ee271cc092f6`
let apiurl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore
`
async function checkweather() {
    const response = await fetch(apiurl + `&appid=${apikey}`)

    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp;
    document.querySelector(".humidity").innerHTML = data.main.humidity;
    document.querySelector(".wind").innerHTML = data.wind.speed;
}
checkweather()
