getWeatherData(29.4252, -98.4916);


function getWeatherData(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${OPENWEATHER_KEY}`)
        .then(response => response.json())
        .then(data => renderWeatherCards(data));
}

function renderWeatherCards(rawData) {
    console.log(mapToWeatherCards(rawData))
    $('#forecast-container').html(mapToWeatherCards(rawData))
}

//language=HTML
function mapToWeatherCards(rawArray) {
    let limit = 5;
    return rawArray.daily.map((dayForecast) => {
        return `
          <div id="cards" class="card row-sm col-md-2  text-center bg-opacity-50 " style="border-style: solid">
            <p>${new Date(dayForecast.dt * 1000).toLocaleString().substring(0, 9)}</p>
            <p>Today\'s Temp: ${Math.floor(dayForecast.temp.day)}</p>
            <p>Sunrise: ${new Date(dayForecast.sunrise * 1000).toLocaleString().substring(10, 15)} am</p>
            <p>Sunset: ${new Date(dayForecast.sunset * 1000).toLocaleString().substring(10, 15)} pm</p>
          </div>
        `
    }).reduce((limitedForecastArray, dayForecast) => {
        if (limitedForecastArray.length < limit){
            limitedForecastArray.push(dayForecast);
        }
        return limitedForecastArray;
    }, [])
}


/*function renderWeatherCards(data) {
    let html = '';
    console.log(data)

    for (let i = 0; i < 5; i++) {
        html += '<div id="cards" class="card row-sm col-md-2  text-center bg-opacity-50 " style="border-style: solid">'
        let dailyTemp = data.daily[i].temp.day;
        let dailySunUp = new Date(data.daily[i].sunrise * 1000).toLocaleString();
        let dailySunDown = new Date(data.daily[i].sunset * 1000).toLocaleString();

        let dailyType = data.daily[i].weather[0].main
        var myDate = new Date(data.daily[i].dt * 1000).toLocaleString();

        html += '<p>' + myDate.substring(0, 9) + '</p>';

        html += '<p>Today\'s Temp: ' + Math.floor(dailyTemp) + 'º</p>' +
            '<p>Sunrise: ' + dailySunUp.substring(10, 15) + ' am</p>' +
            ' <p>Sunset: ' + dailySunDown.substring(10, 15) + ' pm</p>' +

            '<p> ' + dailyType + '</p>'
        html += '</div>'
    }
    return html;
}*/
