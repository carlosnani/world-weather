

function weatherBalloon(cityID) {
    const key = 'a42c7c0336c9886770b59a955c25e282';
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&units=metric&appid=' + key)  
    .then(function(resp) { return resp.json() }) 
    .then(function(data) {    
      draw(data);
    })
    .catch(function() {
      // catch any errors
    });
  }
  function draw(data) {
    let cidadeContainer = document.querySelector('.cidadeName');
    let cidadeInfo = document.createTextNode(data.name);
    cidadeContainer.appendChild(cidadeInfo); 

    let celcius = 'º';

    let tempContainer = document.querySelector('.tempWeather');
    let tempInfo = document.createTextNode(Math.floor(data.main.temp) + 'º');
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

    console.log(Math.floor(data.main.temp));
  }
  
  
  window.onload = function() {
    weatherBalloon( 3451190 );
  }
  
  