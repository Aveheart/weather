var input = document.querySelector('#input');
var button = document.querySelector('#submitBtn');
var weather = document.getElementById('#weather');
var box = document.querySelector('.box');

// FUNCTION FOR SEARCH CITY
function searchCity(event){
    event.preventDefault();
    
    
    console.log(input.value);
    var api = 'https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&current.uvi&appid=9b35244b1b7b8578e6c231fd7654c186&units=imperial';
// FETCH API
    fetch(api)
console.log(api);
// RESPOND
fetch(api)
.then(function(response){
    return response.json()
    
})

// FUNCTION FOR DATA DISPLAY
.then(function(data){
    console.log(data)
    console.log(data.name)
    console.log(data.main.temp)
    console.log(data.main.humidity)
    console.log(data.wind.speed)

   box.style.border='1px solid';

   var title = document.createElement("h2")
   title.textContent = "Current Weather"
   box.append(title)

   var name = document.createElement("h3")
   name.textContent = data.name
   box.append(name)

   var temp = document.createElement('p')
   temp.textContent = "Temp: " +data.main.temp
   box.append(temp)

   var humidity = document.createElement('p')
   humidity.textContent = "RH: " + data.main.humidity
   box.append(humidity)

   var windSpeed = document.createElement('p')
   windSpeed.textContent = "wind speed: " + data.wind.speed
   box.append(windSpeed)
})




}
//EVENT LISTENER FOR SEARCH
button.addEventListener('click', searchCity);