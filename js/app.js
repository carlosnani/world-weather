const urlApi =    'https://api.openweathermap.org/data/2.5/weather?q=';
const key =       'a42c7c0336c9886770b59a955c25e282';
const units =     '&units=metric&appid=';

const submit =    document.querySelector('#submit');
const inputCity = document.querySelector('#inputCity')

let cidadeContainer = document.querySelector('.cidadeName');
let tempContainer = document.querySelector('.tempWeather');
let humidiContainer = document.querySelector('.humidityData');
let maxContainer = document.querySelector('.tempMaxData');
let minContainer = document.querySelector('.tempMinData');
let pressureContainer = document.querySelector('.pressaoData');

submit.addEventListener('click', function(e){
    e.preventDefault();    
    inputCity.innerHTML =''
    weatherBalloon(inputCity.value);
});

function weatherBalloon(cityID) {
  fetch(urlApi + cityID + units + key)
    .then(function (resp) { return resp.json() })
    .then(function (data) {
      takeCityInfo(data); //This function take the city name
      takeCityTemp(data); //This function take the City temp
      takeCityHumidity(data);//This function take the City Humidity
      takeCityMax(data); // This function take the Max Temp
      takeCityMin(data); // This function take the Min Temp
      takeCitypressure(data); //This function take the pressure  
      iconeWeather(data); // This function take the Icon    
      console.log(data)
    })
    .catch(function (err) {
      console.log('This come with the error from openweathermap - ' + err);
      cidadeContainer.innerHTML = '<span style="font-size:18px">This city or country does not exist. Please try again or see this <a target="_blank" href="https://en.wikipedia.org/wiki/List_of_towns_and_cities_with_100,000_or_more_inhabitants/cityname:_A">Link</a></span>'
      tempContainer.innerHTML = '00'
      humidiContainer.innerHTML = '00'
      maxContainer.innerHTML = '00'
      minContainer.innerHTML = '00'
      pressureContainer.innerHTML = '00'
    });
}

function takeCityTemp(data) { // Return the City Temp
  let tempInfo = document.createTextNode(Math.floor(data.main.temp));
  tempContainer.innerHTML = '';
  tempContainer.appendChild(tempInfo);
}

function takeCityInfo(data) { // Return the City Name
  let cidadeInfo = document.createTextNode(data.name);
  cidadeContainer.innerHTML ='';
  cidadeContainer.appendChild(cidadeInfo); 
}

function takeCityHumidity(data) { // Return the City humidity
  let humidiInfo = document.createTextNode(Math.floor(data.main.humidity));
  humidiContainer.innerHTML = '';
  humidiContainer.appendChild(humidiInfo);
}

function takeCityMax(data) { // Return the City Tem Max
  let maxInfo = document.createTextNode(Math.floor(data.main.temp_max));
  maxContainer.innerHTML = '';
  maxContainer.appendChild(maxInfo);
}

function takeCityMin(data) { // Return the City Tem Min
  let minInfo = document.createTextNode(Math.floor(data.main.temp_min));
  minContainer.innerHTML = '';
  minContainer.appendChild(minInfo);
}

function takeCitypressure(data) { // Return the City Tem Min
  let pressureInfo = document.createTextNode(Math.floor(data.main.pressure));
  pressureContainer.innerHTML = '';
  pressureContainer.appendChild(pressureInfo);
}

function iconeWeather(data) {
  let weatherIcon = document.querySelector('.iconeWeather');
  let icon = data.weather[0].icon;
  let path = 'http://openweathermap.org/img/wn/' + icon + '@2x.png';
  weatherIcon.src = path;
}

window.onload = function () {
  weatherBalloon('Rio de Janeiro');
}

function showAtualData() { //This Function take and show the Date.
  let dataAtual = new Date();
  let dia = dataAtual.getDate();
  let mes = dataAtual.getMonth()
  let ano = dataAtual.getFullYear();
  let monName = ["janeiro", "fevereiro", "março", "abril", "Maio", "junho", "julho", "agosto", "outubro", "novembro", "dezembro"];

  let diaAtual = document.querySelector('.dia').innerHTML = dia + ' ';
  let mesAtual = document.querySelector('.mes').innerHTML = monName[mes] + ' ';
  let anoAtual = document.querySelector('.ano').innerHTML = ano;
}
// showAtualData();

