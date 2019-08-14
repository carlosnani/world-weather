

function weatherBalloon(cityID) {
    const key = 'a42c7c0336c9886770b59a955c25e282';
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&units=metric&appid=' + key)  
    .then(function(resp) { return resp.json() }) 
    .then(function(data) {    
      info(data);
    })
    .catch(function() {
      // catch any errors
    });
  }
  function info(data) {
    let cidadeContainer = document.querySelector('.cidadeName');
    let cidadeInfo = document.createTextNode(data.name);
    cidadeContainer.appendChild(cidadeInfo); 

    let tempContainer = document.querySelector('.tempWeather');
    let tempInfo = document.createTextNode(Math.floor(data.main.temp) + 'ºc');
    tempContainer.appendChild(tempInfo);
    

    // let pInfo = document.createElement('p');
    // let cityName = document.createTextNode(data.name);
    // let cityTemp = document.createTextNode(data.main.temp);
    
    // let divInfo = document.querySelector('#divInfo');
    // pInfo.appendChild(cityName);
    // pInfo.appendChild(cityTemp);    
    // divInfo.classList.add('info');
    // divInfo.appendChild(pInfo);
    // console.log(cityTemp);

    // console.log(Math.floor(data.main.temp));
  }
  
  
  window.onload = function() {
    weatherBalloon(3451190);
  }
  

  

let dataAtual = new Date(); 
let dia = dataAtual.getDate();
let mes = dataAtual.getMonth()
let ano = dataAtual.getFullYear();
let monName = ["janeiro", "fevereiro", "março", "abril", "Maio", "junho", "julho", "agosto", "outubro", "novembro", "dezembro"];

let diaAtual = document.querySelector('.dia').innerHTML = dia + ' ';
let mesAtual = document.querySelector('.mes').innerHTML = monName[mes] +  ' ';
let anoAtual = document.querySelector('.ano').innerHTML = ano;


