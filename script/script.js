var apiUrl = 'https://global-warming.org/api/arctic-api';
var articDataEl = document.querySelector('#artic-data');
var articSearchBtn = document.querySelector('#arctic-search');
var arcticInputEl = document.querySelector('#search-button-3');

// https://global-warning.org/api/co2-api
// https://global-warning.org/api/ocean-api
// https://global-warning.org/api/temperature-api

var climateData;

function getArticData() {
    fetch(apiUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            
            climateData = data.arcticData;
            console.log(climateData);
            // var arcticYear = document.createElement('h2');
            // arcticYear.textContent = data.arcticData[0].year;
            // console.log(data.arcticData[0].year);
            // console.log(searchData(climateData, "year", 1990));
        });


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

getArticData();


articSearchBtn.addEventListener('click', function () {
var userYear  = parseInt(arcticInputEl.value);

const filteredData = climateData.filter(val => val.year === userYear)
articDataEl.textContent = "The area of Arctic Ice was " + filteredData[0].area + " million square kilometres in " + userYear + ".";
console.log(filteredData[0].area);
});





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
// function createElement() {
    // create title
    // create content
    // etc.
// }


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