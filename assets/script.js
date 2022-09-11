var input = document.querySelector('#input');
var button = document.querySelector('#submitBtn');
var weather = document.getElementById('#weather');
var box = document.querySelector('.box');
var square = document.querySelector('.square');
var one = document.querySelector('#one');
var two = document.querySelector('#two');
var three = document.querySelector('#three');
var four = document.querySelector('#four');
var five = document.querySelector('#five');
var date = moment().format("MMM Do YY");


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

//    box.style.border='1px solid';

//    var title = document.createElement("h2")
//    title.textContent = "Current Weather"
//    box.append(title)

   var name = document.createElement("h3")
   name.textContent = data.name
   box.append(name)

   var temp = document.createElement('p')
   temp.textContent = "Temp: " +data.main.temp + "F"
   box.append(temp)

   var humidity = document.createElement('p')
   humidity.textContent = "RH: " + data.main.humidity + "%"
   box.append(humidity)

   var windSpeed = document.createElement('p')
   windSpeed.textContent = "wind speed: " + data.wind.speed + "mph"
   box.append(windSpeed)

   let recentSearch = JSON.parse(localStorage.getItem(input.value));
   localStorage.setItem(input.value, recentSearch);

// when search another city, current weather updates to new search and clears old search
// local storage for cities searched and display
// when clicked on again, info displays again
// display 5 day forcast
// uv
var uv = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + data.coord.lat + '&lon=' + data.coord.lon + '&exclude=hourly,minutely,alerts&units=imperial&appid=cfe0b2658aec5af16bf8115cfd986eca'
console.log(uv)

fetch(uv)
    .then(function (response) {
    return response.json()


})
.then(function (data) {
    console.log(data)
    console.log("UV Index: ", data.current.uvi)
    var uvEl = document.createElement("h4")
    uv.textContent = "UV Index: " + data.current.uvi
    square.append(uvEl)

    
    var firstDay = document.createElement("h3")
    firstDay.textContent = date + '\n' + "Temp:" + data.daily[0].temp.max + "℉ \n Humidity: " + data.daily[0].humidity + "%"
    one.append(firstDay)
  
    var secondDay = document.createElement("h3")
    secondDay.textContent = date + "\n" + "Temp:" + data.daily[1].temp.max  + "℉ \n Humidity:" + data.daily[1].humidity + "%"
    two.append(secondDay)
    
    var thirdDay = document.createElement("h3")
    thirdDay.textContent = date + '\n' + "Temp:" + data.daily[2].temp.max  + "℉ \n Humidity:" + data.daily[2].humidity + "%"
   three.append(thirdDay)
   
    var fourthDay = document.createElement("h3")
    fourthDay.textContent = date + '\n' + "Temp:" + data.daily[3].temp.max  + "℉ \n Humidity:" + data.daily[3].humidity + "%"
    four.append(fourthDay)
   
    var fifthDay = document.createElement("h3")
    fifthDay.textContent = date + '\n' + "Temp:" + data.daily[4].temp.max  + "℉ \n Humidity:" + data.daily[4].humidity + "%"
    five.append(fifthDay)
})

})
}
//EVENT LISTENER FOR SEARCH
button.addEventListener('click', searchCity);
