var apiKey = 'e25813769e73c32b981b464f3ca85e2c';

console.log("loading js script file ...");
var searchButton = document.getElementById("submit-button");
var searchInput = document.getElementById("search-input");


//Declaring a Function 
function getWeather(event) {
    event.preventDefault();
    //grab the city name 
    console.log("Search Input", searchInput.value);

    var locationURL = 'http://api.openweathermap.org/geo/1.0/direct?q=' + searchInput.value + '&limit=1&appid=' + apiKey;
    console.log(locationURL);
    

    //Fetching the lat and Lon based on the search input entered by the user 
    fetch(locationURL)
    
        .then(function (res) {
            //console.log("Response", res);
            return res.json(); //returns a JSON friendly response on a successful api call
        }).then(function (apiData) {
            console.log("Api JSON Response", apiData);
            
            //GRAB THE LAT AND LON from the response 
            var latitude = apiData[0].lat; 
            var longitude = apiData[0].lon; 
            
            console.log("lat", longitude, latitude);
            //display the city on the HTML 
            document.getElementById("current-city").textContent = apiData[0].name;            
            
            // CALL THE ONE CALL API fetch request 
            //oneCallAPIWeather(latitude, longitude); 
            //console.log (oneCallAPIWeather(latitude, longitude))

        }).catch(function (error) {
            console.log("Error Msg", error)
        })

   


    //Reset the search input field 
    searchInput.value = "";
}

function oneCallAPIWeather(latitude, longitude){

    //URL variable 
    var oneCallAPIWeather = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + latitude + '&lon=' + longitude + 'exclude=alerts&appid=' + apiKey
        console.log(oneCallAPIWeather)

    //FETCH REQUEST 
    fetch (oneCallAPIWeather)
        .then (function (response) {

            return response.json();
        }).then (function (apiData) {
            console.log("api data", apiData);
            
        }).catch(function (error) {
            console.log("Error Msg", error)
        });


    //DISPLAY IT ON THE HTML PAGE 
    
}

//Add Event listener 
searchButton.onclick = getWeather;

//One Call API EXAMPLE 
// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

//Get Lat and Lon API Call 
// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}