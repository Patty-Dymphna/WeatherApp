

document.querySelector("button").onclick = function(){
    const City = document.querySelector("#Weather-input").value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=acd60fcb5a0c54326a52f4a2fc40375c`)
    .then(response => response.json())
    .then(data => {
       console.log(data);
       document.querySelector('h1').innerHTML = data.name;

       let Icon = document.querySelector('#icon');
       Icon.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)

       const What = document.querySelector('.describe');
       What.innerHTML = data.weather[0].description;

       const Temperature = document.querySelector('.Temp');
       Temperature.innerHTML =Math.round(data.main.temp);

       const Humidity = document.querySelector('.humidity');
       Humidity.innerHTML = data.main.humidity;

       const Windy = document.querySelector('.Wind');
       Windy.innerHTML = Math.round(data.wind.speed);
       
       document.querySelector('span').innerHTML = data.wind.deg;
    })
    
    }

    
 



 