$(document).ready(function(){
    const apiKey = 'f591788ddd6dd308daca51bb8ef81a2b';
    // let cityName = 'riverside'
    // let state = $('#state-search').val()

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
            let unix_timestamp = 1549312452
            // Create a new JavaScript Date object based on the timestamp
            // multiplied by 1000 so that the argument is in milliseconds, not seconds.
            var date = new Date(unix_timestamp * 1000);
            // Hours part from the timestamp
            var hours = date.getHours();
            // Minutes part from the timestamp
            var minutes = "0" + date.getMinutes();
            // Seconds part from the timestamp
            var seconds = "0" + date.getSeconds();

            // Will display time in 10:30:23 format
            var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

            console.log(formattedTime);

            console.log(response)
            $('#predicted-date').append(response.list[0].dt_txt)
            $('#predicted-weather').append(response.list[0].main.temp.toString())
            $('#predicted-date1').append(response.list[1].dt_txt)
            $('#predicted-weather1').append(response.list[1].main.temp.toString())



        })
 
        
        

    })



})


console.log("Hello")