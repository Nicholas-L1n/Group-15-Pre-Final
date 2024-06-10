//API JS



// Using the core $.ajax() method
$.ajax({
    // The URL for the request (from the api docs)
    url: "https://api.open-meteo.com/v1/forecast?latitude=36.9741&longitude=-122.0308&current=temperature_2m,weather_code&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=America%2FLos_Angeles",
    // The data to send (will be converted to a query string)
    data: {},
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function(data) {
        // do stuff
        console.log(data);

        var temperature = data.current.temperature_2m;
        console.log(temperature)

        $('.navBarTemperature').html(temperature+'°F');
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) { 
        // do stuff
        console.log("Error:", textStatus, errorThrown);
    }
})
