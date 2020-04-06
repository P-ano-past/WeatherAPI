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
        const url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lng + '&units=imperial&appid=' + apiKey;

        $.get(url, function(data){
            // current
            $('#current-city-name').append(data.name)  
            $('#current-weather').append("Current weather: " + Math.round(data.main.temp.toString()) + '&deg;F')
            $('#current-main').append(data.weather[0].main)
            $('#current-description').append("<img src='https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png'>" + data.weather[0].description)
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
        let cityName = $('#city-search').val()
        // let cityName = "moreno Valley"
        let state = "us"
        const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + ',' + state + '&units=imperial&appid=' + apiKey;

        $('#predicted-name').empty()
        $('#predicted-day0').empty()
        $('#predicted-day1').empty()
        $('#predicted-day2').empty()
        $('#predicted-day3').empty()

        
        $('#predicted-weather').empty()
        $('#predicted-weather1').empty()
        $('#predicted-weather2').empty()
        $('#predicted-weather3').empty()
        $('#predicted-main').empty()
        $('#predicted-main1').empty()
        $('#predicted-main2').empty()
        $('#predicted-main3').empty()
        $('#predicted-main4').empty()        
        $('#predicted-description').empty()
        $('#predicted-description1').empty()
        $('#predicted-description2').empty()
        $('#predicted-description3').empty()
        $('#predicted-description4').empty()
        $('#predicted-feels').empty()
        $('#predicted-feels1').empty()
        $('#predicted-feels2').empty()
        $('#predicted-feels3').empty()
        $('#predicted-feels4').empty()
        $('#predicted-low').empty()
        $('#predicted-low1').empty()        
        $('#predicted-low2').empty()        
        $('#predicted-low3').empty()        
        $('#predicted-low4').empty()        
        $('#predicted-high').empty()
        $('#predicted-high1').empty()
        $('#predicted-high2').empty()
        $('#predicted-high3').empty()
        $('#predicted-high4').empty()
        $('#predicted-pressure').empty()
        $('#predicted-pressure1').empty()        
        $('#predicted-pressure2').empty()        
        $('#predicted-pressure3').empty()        
        $('#predicted-pressure4').empty()        
        $('#predicted-humid').empty()
        $('#predicted-humid1').empty()    
        $('#predicted-humid2').empty()    
        $('#predicted-humid3').empty()    
        $('#predicted-humid4').empty()    
        $('#time').empty()
       

        $.get(url, function(response1){
            $('#predicted-day0').append("Curently:")
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

        const urlFut = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + ',' + state +'&units=imperial&appid=' + apiKey;

        $.get(urlFut, function(response) {
            console.log(response)
            $('#predicted-day1').append("Tomorrow morning:")
            // $('#predicted-name1').append(response.city.name)
            $('#predicted-weather1').append("Predicted weather: " + Math.round(response.list[3].main.temp) + '&deg;F')
            $('#predicted-main1').append(response.list[3].weather[0].main)
            $('#predicted-description1').append("<img src='http://openweathermap.org/img/wn/" + response.list[3].weather[0].icon + "@2x.png'>" + response.list[3].weather[0].description)
            $('#predicted-feels1').append('Feels like: '+ Math.round(response.list[3].main.feels_like) + '&deg;F')
            $('#predicted-low1').append('Low: '+ Math.round(response.list[3].main.temp_min) + '&deg;F')
            $('#predicted-high1').append('High: ' + Math.round(response.list[3].main.temp_max) + '&deg;F')
            $('#predicted-pressure1').append('Pressure: ' + Math.round(response.list[3].main.pressure) + ' PSI')
            $('#predicted-humid1').append('Humidity: ' + Math.round(response.list[3].main.humidity) + '&#37;')

            $('#predicted-day2').append("Tomorrow afternoon:")
            // $('#predicted-name2').append(response.city.name)
            $('#predicted-weather2').append("Predicted weather: " + Math.round(response.list[5].main.temp) + '&deg;F')
            $('#predicted-main2').append(response.list[5].weather[0].main)
            $('#predicted-description2').append("<img src='http://openweathermap.org/img/wn/" + response.list[5].weather[0].icon + "@2x.png'>" + response.list[5].weather[0].description)
            $('#predicted-feels2').append('Feels like: '+ Math.round(response.list[5].main.feels_like) + '&deg;F')
            $('#predicted-low2').append('Low: '+ Math.round(response.list[5].main.temp_min) + '&deg;F')
            $('#predicted-high2').append('High: ' + Math.round(response.list[5].main.temp_max) + '&deg;F')
            $('#predicted-pressure2').append('Pressure: ' + Math.round(response.list[5].main.pressure) + ' PSI')
            $('#predicted-humid2').append('Humidity: ' + Math.round(response.list[5].main.humidity) + '&#37;')

            $('#predicted-day3').append("Tomorrow evening:")
            // $('#predicted-name3').append(response.city.name)
            $('#predicted-weather3').append("Predicted weather: " + Math.round(response.list[7].main.temp) + '&deg;F')
            $('#predicted-main3').append(response.list[7].weather[0].main)
            $('#predicted-description3').append("<img src='http://openweathermap.org/img/wn/" + response.list[7].weather[0].icon + "@2x.png'>" + response.list[7].weather[0].description)
            $('#predicted-feels3').append('Feels like: '+ Math.round(response.list[7].main.feels_like) + '&deg;F')
            $('#predicted-low3').append('Low: '+ Math.round(response.list[7].main.temp_min) + '&deg;F')
            $('#predicted-high3').append('High: ' + Math.round(response.list[7].main.temp_max) + '&deg;F')
            $('#predicted-pressure3').append('Pressure: ' + Math.round(response.list[7].main.pressure) + ' PSI')
            $('#predicted-humid3').append('Humidity: ' + Math.round(response.list[7].main.humidity) + '&#37;')
        })
        
 
        
        

    })



})


// need to determine the output times. 