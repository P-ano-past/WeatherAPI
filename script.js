$(document).ready(function(){
    const apiKey = 'f591788ddd6dd308daca51bb8ef81a2b';
    // let cityName = 'riverside'
    // let state = $('#state-search').val()
    let moment = require('moment');
    let today = moment()
    console.log(today.format())

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(displayLocationInfo);
      }
      
      function displayLocationInfo(position) {
        const lng = position.coords.longitude;
        const lat = position.coords.latitude;
        const url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lng + '&units=imperial&appid=' + apiKey;

        $.get(url, function(data){
        console.log(data)

        console.log(data.main.temp.toString())

        // current
        // console.log((data.list[0].main.temp.toString()))
        $('#current-weather').text(data.main.temp.toString())
        $('.city-name').append(data.name)    
    });
        console.log(`longitude: ${ lng } | latitude: ${ lat }`);
    }
    


    

    $('#submit-btn').on("click", function() {

        if ($('.form-control') == '') {
            $('#searched-city').clear()
        }


        const apiKey = 'f591788ddd6dd308daca51bb8ef81a2b';
        let cityName = 'riverside'
        // let cityName = $('#city-search').val()
        let state = $('#state-search').val()
        

        const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + ',' + state + '&units=imperial&appid=' + apiKey;
        
        $.get(url, function(data){
        console.log(data)

        console.log(data.main.temp.toString())

        // current
        // console.log((data.list[0].main.temp.toString()))
        $('#current-weather').text(data.main.temp.toString())
        $('#searched-city').append(data.name)    
        
        })
        const urlFut = 'http://api.openweathermap.org/data/2.5/forecast?q=' + cityName + ',' + state +'&units=imperial&appid=' + apiKey;
        console.log(cityName)

        
        $.get(urlFut, function(response) {


            console.log(response)
            $('#predicted-date').append(response.list[0].dt_txt)
            $('#predicted-weather').append(response.list[0].main.temp.toString())
            $('#predicted-date1').append(response.list[1].dt_txt)
            $('#predicted-weather1').append(response.list[1].main.temp.toString())



        })
 
        
        

    })



})


console.log("Hello")