$(document).ready(function(){
    $("#submitCity").click(function(){
        return getWeather();
    });
});

function getWeather(){
    var city = $("#city").val();
    if(city != ''){
        $.ajax({
            url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + "&appid=23f933d3c08609b1b884444b9766a3d9",
            type: "GET",
            dataType: "json",
            success: function(data){
                $("#showWeather").html(showResults(data));
                $("#city").val('');
            }
        });
    }else{
        $("#error").html("<div class='alert alert-danger' id='errorCity'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>Please type the name in English</div>");
    }
}


function showResults(data){
    return  '<h2 style="font-weight:bold; font-size:30px; padding-top:20px;" class="text-center"> The Weather now in  '+ data.name +', '+ data.sys.country +'</h2>' +
            "<h3 style='padding-left:40px;'><strong> The weather </strong>: "+data.weather[0].main+"</h3>"+
            "<h3 style='padding-left:40px;'><strong> The description </strong>:<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'> " + data.weather[0].description + "</h3>" +
            "<h3 style='padding-left:40px;'><strong> Temperature </strong>: "+data.main.temp + " &deg;C</h3>" +
            "<h3 style='padding-left:40px;'><strong> Atmospheric pressure </strong>: " + data.main.pressure + " hpa</h3>" +
            "<h3 style='padding-left:40px;'><strong> Humidity </strong>: " + data.main.humidity + "%</h3>" +
            "<h3 style='padding-left:40px;'><strong> Minimum temp </strong>: " + data.main.temp_min + "&deg;C</h3>" +
            "<h3 style='padding-left:40px;'><strong> Max temp</strong>: " + data.main.temp_max + "&deg;C</h3>" +
            "<h3 style='padding-left:40px;'><strong> Wind speed </strong>: " + data.wind.speed + "m/s</h3>" +
            "<h3 style='padding-left:40px; padding-bottom:30px;'><strong> Wind direction </strong>: " + data.wind.deg + "&deg;</h3>";
}
