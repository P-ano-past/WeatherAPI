$(document).ready(function(){
    $('#submit-btn').on("click", function() {
        const apiKey = 'f591788ddd6dd308daca51bb8ef81a2b';
        let cityName = 'riverside'
        // let cityName = $('#city-search').val()
        let state = $('#state-search').val()
        
        const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + ',' + state +'&units=imperial&appid=' + apiKey;

        const urlFut = 'http://api.openweathermap.org/data/2.5/forecast?q=' + cityName + ',' + state +'&units=imperial&appid=' + apiKey;
        console.log(cityName)

        $.get(url, function(data){
        console.log(data)

        console.log(data.main.temp.toString())

        // current
        // console.log((data.list[0].main.temp.toString()))
        $('#current-weather').text(data.main.temp.toString())
        $('.city-name').append(data.name)    
    });
        $.get(urlFut, function(response) {
            console.log(response)
            $('#predicted-date').append(response.list[0].dt_txt)
            $('#predicted-weather').append(response.list[0].main.temp.toString())
            $('#predicted-date1').append(response.list[1].dt_txt)
            $('#predicted-weather1').append(response.list[1].main.temp.toString())



        })
 
        
        

    })

   //api call


    // console.log(data.list.weather)
})

console.log("Hello")