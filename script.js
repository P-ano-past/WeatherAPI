$(document).ready(function(){
    const apiKey = 'f591788ddd6dd308daca51bb8ef81a2b';
    // let cityName = 'riverside'
    // let state = $('#state-search').val()
    let moment = require('moment');
    function update() {
        $('#current-time').empty()
        $('#current-date').empty()
        $('#current-time').append(moment().format("h:mm A"))
        $('#current-date').append(moment().format("dddd, MMMM Do YYYY"))
    }
    setInterval(update, 1000)

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(displayLocationInfo);
      }
      
      function displayLocationInfo(position) {
        const lng = position.coords.longitude;
        const lat = position.coords.latitude;
        const url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lng + '&units=imperial&appid=' + apiKey;

        $.get(url, function(data){
            // current
            $('#current-city-name').append(data.name)  
            $('#current-weather').append("Current weather: " + Math.round(data.main.temp.toString()) + '&deg;F')
            $('#current-main').append(data.weather[0].main)
            $('#current-description').append("<img src='http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png'>" + data.weather[0].description)
            $('#current-feels').append('Feels like: '+ Math.round(data.main.feels_like) + '&deg;F')
            $('#current-low').append('Low: '+ Math.round(data.main.temp_min) + '&deg;F')
            $('#current-high').append('High: ' + Math.round(data.main.temp_max) + '&deg;F')
            $('#current-pressure').append('Pressure: ' + Math.round(data.main.pressure) + ' PSI')
            $('#current-humid').append('Humidity: ' + Math.round(data.main.humidity) + '&#37;')
        });
    }

    // + data.weather[0].description

    $('#submit-btn').on("click", function() {
        // document.preventDefault()
        const apiKey = 'f591788ddd6dd308daca51bb8ef81a2b';
        // let cityName = 'spokane'
        // let cityName = $('#city-search').val()
        let cityName = "Boston"
        // let state = $('#state-search').val()
        let state = "massachusets"
        const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + ',' + state + '&units=imperial&appid=' + apiKey;
        
        $('#predicted-name').empty()
        $('#predicted-weather').empty()
        $('#predicted-main').empty()
        $('#predicted-description').empty()
        $('#predicted-feels').empty()
        $('#predicted-low').empty()
        $('#predicted-high').empty()
        $('#predicted-pressure').empty()
        $('#predicted-humid').empty()
        $('#predicted-name1').empty()
        $('#predicted-weather1').empty()
        $('#predicted-main1').empty()
        $('#predicted-description1').empty()
        $('#predicted-feels1').empty()
        $('#predicted-low1').empty()
        $('#predicted-high1').empty()
        $('#predicted-pressure1').empty()
        $('#predicted-humid1').empty()
        $('#time').empty()


        $.get(url, function(response1){
            $('#predicted-name').append(response1.name)
            $('#predicted-weather').append("Current weather: " + Math.round(response1.main.temp.toString()) + '&deg;F')
            $('#predicted-main').append(response1.weather[0].main)
            $('#predicted-description').append("<img src='http://openweathermap.org/img/wn/" + response1.weather[0].icon + "@2x.png'>" + response1.weather[0].description)
            $('#predicted-feels').append('Feels like: '+ Math.round(response1.main.feels_like) + '&deg;F')
            $('#predicted-low').append('Low: '+ Math.round(response1.main.temp_min) + '&deg;F')
            $('#predicted-high').append('High: ' + Math.round(response1.main.temp_max) + '&deg;F')
            $('#predicted-pressure').append('Pressure: ' + Math.round(response1.main.pressure) + ' PSI')
            $('#predicted-humid').append('Humidity: ' + Math.round(response1.main.humidity) + '&#37;')
        })

        const urlFut = 'http://api.openweathermap.org/data/2.5/forecast?q=' + cityName + ',' + state +'&units=imperial&appid=' + apiKey;

        $.get(urlFut, function(response) {
            console.log(response)
            //forecast
            // $('#time').append(moment().add(0, 'h').format("hh:mm A"))
            //time is determined by 3 hr intervals. 
            $('#predicted-name1').append(response.city.name)
            $('#predicted-weather1').append("Current weather: " + Math.round(response.list[1].main.temp) + '&deg;F')
            $('#predicted-main1').append(response.list[1].weather[0].main)
            $('#predicted-description1').append("<img src='http://openweathermap.org/img/wn/" + response.list[1].weather[0].icon + "@2x.png'>" + response.list[1].weather[0].description)
            $('#predicted-feels1').append('Feels like: '+ Math.round(response.list[1].main.feels_like) + '&deg;F')
            $('#predicted-low1').append('Low: '+ Math.round(response.list[1].main.temp_min) + '&deg;F')
            $('#predicted-high1').append('High: ' + Math.round(response.list[1].main.temp_max) + '&deg;F')
            $('#predicted-pressure1').append('Pressure: ' + Math.round(response.list[1].main.pressure) + ' PSI')
            $('#predicted-humid1').append('Humidity: ' + Math.round(response.list[1].main.humidity) + '&#37;')
        })
        
 
        
        

    })



})


