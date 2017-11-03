// jQuery Weather!

// Using your newfound knowledge of jQuery, re-create our weather
// application. It should:
// - Use a loop to create 6 days of forecast within the <div> element
//   with class name "forecast"
// - When clicking the "Get the weather!" button, the weather should
//   appear with a "fade" effect

// .empty() empties the HTML contents of a jQuery DOM object

let handleWeatherResponse = function(response) {
  // leave these two lines alone; they allow for the inspection of
  // the response object in the browser console
  console.log(response)
  window.response = response

  // **** your code starts here - don't modify anything else. you will be sad.


  document.getElementById("current-conditions-text").innerHTML = response.currently.summary;
  document.getElementById("current-conditions-icon").innerHTML = icon(response.currently);
  document.getElementById("current-conditions-temp").innerHTML = Math.round(response.currently.temperature);

  for(let i=1; i<7; i++) {
  document.getElementById("forecast" + i + "-icon").innerHTML = icon(response.daily.data[i]);
  document.getElementById("forecast" + i + "-temp").innerHTML = Math.round(response.daily.data[i].temperatureHigh)
    + "|" + Math.round(response.daily.data[i].temperatureLow);
  document.getElementById("forecast" + i + "-text").innerHTML = response.daily.data[i].summary;

$('#row forecast').fadeIn(1000);
}
// *** your code ends here - no, really.
};



// leave this alone; does the event handling and ajax
$(function() {
  $("#get-the-weather").on("click", function(event) {
    event.preventDefault();
    let locationName = $("#location-name").val();
    geocodeAndGetWeather(locationName);
  });
});
