var apiUrl = 'https://global-warming.org/api/arctic-api';
var articDataEl = document.querySelector('#artic-data');

var climateData;

function getArticData() {
    fetch(apiUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            climateData = data.arcticData;
            var arcticYear = document.createElement('h2');
            arcticYear.textContent = data.arcticData[0].year;
            console.log(data.arcticData[0].year);
            console.log(searchData(climateData, "year", 1990));
        });

        /*add in catch error at end of above??
        .catch(err => {
        console.error(err);
        });

        }).catch((errorResponse) => {
        if (errorResponse.text) { //additional error information
        errorResponse.text().then( errorMessage => {
        //errorMessage now returns the response body which includes the full error message
        })
        } else {
        //no additional error information 
        } 
        });
        */


    /*  function yearSelected(selectObject) {
         let articDataSelected = 0;
         for (let i = 0; i < selectObject.options.length; i++) {
          if (selectObject.options[i].selected) {
           numberSelected++;
          }
         }
         return numberSelected;
        }
  */
}

/* Another possible option for Function: following extraction of Data from API for use of data in app??

function processClimateDataPerYear(response) {
  
  let year=response.resolvedYear;
  let articData=response.articData;
  console.log("year: "+year);
  for (let i=0;i<articData.length;i++) {
    console.log (articData[i].datetime+": data="+articData[i].property+", articData[i].value);
  }
}

getArticData();

/**
 * @param {*} data -> The array to filter on
 * @param {*} property -> part of the object athat we want to filter on (eg. "year")
 * @param {*} value -> The corrosponding value that relates to the property. (e.g. property = "year", value = 2000)  ~ User input value
 * @returns The object for the year that the user searches for
 */
function searchData(data, property, value) {

    function getFilterObject(data, property, value) {
        return data.filter(function (point) {
            return point[property] === value;
        });
    }

    switch (property) {
        case "year":
            return getFilterObject(data, property, value);
            break;
        case "area":
            return getFilterObject(data, property, value);
    }
}


// Call thisd when you want to create an element
// Maybe look at passing parameters in for the content that gets added
function createElement() {
    // create title
    // create content
    // etc.
}


// Tearget the input
// Get the value of the input on search button click
//call the searchYear function on that year
// NOTE: Global variable assignment?


//SECTION ONE
// pinpoint and targeting specific areas of the html to create and set data into
// query selectors to target the elements
// create variables 4 factors (polar ice, ocean warming, co2, temp)
// creat variables for the url(api)(metreic)



//SECTION TWO
// using the api to make the website interactive and dynamic


// create variables 4 factors (polar ice, ocean warming, co2, temp)
// target developers content to use as a base comparison
// generate data from 'generate' button
// creates elements and divs within the html to display the data


var getCityWeather = function (city) {
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=e59b9cf3bb219f49c87ba0bfb16a59e6`;

    fetch(apiUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            var cityNameEl = document.createElement('h2');
            cityNameEl.textContent = data.name;

            var weatherIcon = document.createElement("img");
            weatherIcon.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);

            var tempEl = document.createElement('p');
            tempEl.textContent = `Temperature: ${data.main.temp} °C`;

            var humidityEl = document.createElement('p');
            humidityEl.textContent = `Humidity: ${data.main.humidity}%`;

            var windEl = document.createElement('p');
            windEl.textContent = `Wind Speed: ${data.wind.speed} m/s`;

            weatherDataContainerEl.innerHTML = ''; // clear previous weather data
            weatherDataContainerEl.appendChild(cityNameEl);
            weatherDataContainerEl.appendChild(weatherIcon);
            weatherDataContainerEl.appendChild(tempEl);
            weatherDataContainerEl.appendChild(humidityEl);
            weatherDataContainerEl.appendChild(windEl);
        })
        .catch(function (error) {
            console.error(error);
            alert("Unable to retrieve weather data.");
        });
}; 

