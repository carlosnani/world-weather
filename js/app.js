function weatherBalloon(cityID) {
  const key = 'a42c7c0336c9886770b59a955c25e282';
  fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&units=metric&appid=' + key)
    .then(function (resp) { return resp.json() })
    .then(function (data) {

      takeCityInfo(data); //This function take the city name
      takeCityTemp(data); //This function take the City temp
      takeCityHumidity(data);//This function take the City Humidity
      takeCityMax(data); // This function take the Max Temp
      takeCityMin(data); // This function take the Min Temp
      takeCitypressure(data); //This function take the pressure
    })
    .catch(function () {
      console.log('This come with the error from openweathermap');
    });
}
function takeCityInfo(data) { // Return the City Name
  let cidadeContainer = document.querySelector('.cidadeName');
  let cidadeInfo = document.createTextNode(data.name);
  cidadeContainer.appendChild(cidadeInfo);
}
function takeCityTemp(data) { // Return the City Temp
  let tempContainer = document.querySelector('.tempWeather');
  let tempInfo = document.createTextNode(Math.floor(data.main.temp) + 'ºc');
  tempContainer.appendChild(tempInfo);
}

function takeCityHumidity(data) { // Return the City humidity
  let humidiContainer = document.querySelector('.humidityData');
  let humidiInfo = document.createTextNode(Math.floor(data.main.humidity) + '%');
  humidiContainer.appendChild(humidiInfo);
}

function takeCityMax(data) { // Return the City Tem Max
  let MaxContainer = document.querySelector('.tempMaxData');
  let MaxInfo = document.createTextNode(Math.floor(data.main.temp_max) + 'ºc');
  MaxContainer.appendChild(MaxInfo);
}

function takeCityMin(data) { // Return the City Tem Min
  let MinContainer = document.querySelector('.tempMinData');
  let MinInfo = document.createTextNode(Math.floor(data.main.temp_min) + 'ºc');
  MinContainer.appendChild(MinInfo);
}

function takeCitypressure(data) { // Return the City Tem Min
  let pressureContainer = document.querySelector('.pressaoData');
  let pressureInfo = document.createTextNode(Math.floor(data.main.pressure));
  pressureContainer.appendChild(pressureInfo);
}

window.onload = function () {
  weatherBalloon(3451190);
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
showAtualData();

