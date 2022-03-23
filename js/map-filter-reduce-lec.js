getWeatherData(29.4252, -98.4916);


function getWeatherData(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${OPENWEATHER_KEY}`)
        .then(response => response.json())// 1. First, parse the response to JSON
        .then(data => renderWeatherCards(data.daily)); // 2. Once the response is parsed to JSON, pass its 'daily' property (an array) to our renderWeatherCards function
}

function renderWeatherCards(rawDailyArray) {
    // 3. let's log rawDailyArray and make sure it is what we think it is
    console.log(rawDailyArray);
    // 4. pass the array to reduceWeatherCards, which will return an array reduced to the length we want
    let reducedForecastArray = reduceWeatherCards(rawDailyArray, 5);
    // 8. now that the array is reduced, let's map the reducedForecastArray to HTML template strings
    let weatherCardString = mapToWeatherCards(reducedForecastArray).join('').toString();
    console.log(weatherCardString);
    // 10. with our new weatherCardString produced as a result of the return value of .map(), we can place it directly on the DOM!... AND SCENE!
    $('#forecast-container').html(weatherCardString);
}

function reduceWeatherCards(rawDailyArray, limit){
    // 5. .reduce(fn, type) lets us pass a function as the first argument which will help determine how many elements (based on our 'limit' param)
    // from the original array to push into the new array
    return rawDailyArray.reduce((limitedDailyArray, dailyForecast) => { // 'limitedDailyArray' is the parameter name for our new, reduced array.
        // 'dailyForecast' represents the current element in the rawDailyArray for each iteration, starting at index 0
        console.log(`The limitedDailyArray has ${limitedDailyArray.length} elements`);
        // 6. check to see if the 'limitedDailyArray' has reached its limit (5)
        if (limitedDailyArray.length < limit){
            limitedDailyArray.push(dailyForecast) // if the limit isn't reached, push the current rawDailyArray element to the new array
        }
        // 7. return the limitedDailyArray parameter to .reduce() which will then re-use the limitedDailyArray for the next iteration
        return limitedDailyArray;
    }, [])
}

//language=HTML
function mapToWeatherCards(weatherDataArray) {
    // 9. .map(fn) in this case will loop over weatherDataArray, taking each element (represented by the 'dayForecast' param) and using their properties to inject into
    // HTML template string, which we can then place directly on the DOM!
    return weatherDataArray.map((dayForecast) => {
        // Each HTML template string returned will be pushed to a new array which will then be ultimately returned by .map() once its finished looping over weatherDataArray
        return `
          <div id="cards" class="card row-sm col-md-2  text-center bg-opacity-50 " style="border-style: solid">
            <p>${new Date(dayForecast.dt * 1000).toLocaleString().substring(0, 9)}</p>
            <p>Today\'s Temp: ${Math.floor(dayForecast.temp.day)}</p>
            <p>Sunrise: ${new Date(dayForecast.sunrise * 1000).toLocaleString().substring(10, 15)} am</p>
            <p>Sunset: ${new Date(dayForecast.sunset * 1000).toLocaleString().substring(10, 15)} pm</p>
          </div>
        `;
    })
}