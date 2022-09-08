var input = document.querySelector('#inpt');
var button = document.querySelector('#searchBtn');

function searchCity(event){
    event.preventDefault();
    console.log(input.value);
    var api = 'https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&current.uvi&appid=e5802abdcd0d7206f1acd96df13f647a&units=imperial';
fetch(api)
console.log(api);

fetch(api)
.then(function(response){
    return response.json()
    
})
}
button.addEventListener('click', searchCity);