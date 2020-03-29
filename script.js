$(document).ready(function(){
    const apiKey = 'f591788ddd6dd308daca51bb8ef81a2b';
    let cityName = 'oceanside';
    let state = 'ca';
    const url = 'http://api.openweathermap.org/data/2.5/find?q=' + cityName + '&appid=' + apiKey;

    //api call
    $.get(url, function(data){
        console.log(data)
        console.log(data.list[0].weather[0].main)
    })





    console.log(data.list.weather)
})