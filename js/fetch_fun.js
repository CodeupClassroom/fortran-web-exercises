
// This is your request options property. It defines metadata on the request like
// -> what HTTP method is being requested
// -> what data type is accepted or consumed
const options = {method: 'GET', headers: {Accept: 'application/json'}};

// fetch is a method which returns a Promise object
// When a Promise object is returned, the program moves on to the next line of code after the last line of the fetch immediately
// In other words, it does not wait on the response to come back before moving on
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=32.7&lon=-96.7&appid=50bc836c4df7e3d64c34550ba19e69d6
`, options)
    .then(response => response.json())// parse response to JSON
    .then(response => getSanitizedResponse(response)) // make new object(s) with only the needed data
    .then(data => renderDailyForecast(data)) // use new objects to render DOM nodes and append to DOM
    .catch(err => console.error(err)); // catch HTTP-specific errors (like 429 or 500, etc)

// Here, we separate the concern of retrieving and parsing our data (above in the fetch)
// from sanitizing and formatting our data to be used in the application (below)
function getSanitizedResponse(dataBody) {
    return {
        feelsLike: dataBody.main.feels_like,
        humidity: dataBody.main.humidity
    };
}


// In renderDailyForecast, our forecast object properties are used to populate nodes we are placing on the DOM using jQuery
// NOTICE: we are again separating rendering the data in a visual form from retrieving, parsing, and sanitizing!
// add the below language=HTML piece if you want intellij to let you format as HTML
//language=HTML
function renderDailyForecast(forecast) {
    // generate DOM nodes and append to DOM
    $('body').append(` <!-- Notice the backticks instead of single/double quotes-->
      <div class="card mx-auto mt-4">
        <div class="px-2">
          <h3>Temperature Feels Like:</h3> 
          <p>${forecast.feelsLike}</p> <!--Those backticks allow us to use template strings-->
        </div>
        <div class="px-2"> <!--YES! You *can* add classes, attributes, and even styling right from inside your JS template string!-->
          <h3>Humidity</h3>
          <p>${forecast.humidity}</p> <!-- With the template string, we can interpolate (pull data into a string) easily and make it much more readable!-->
        </div>
      </div>`
    );
}