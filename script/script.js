var apiUrl = 'https://global-warming.org/api/arctic-api';
var articDataEl = document.querySelector('#artic-data');
var articSearchBtn = document.querySelector('#arctic-search');
var arcticInputEl = document.querySelector('#search-button-3');

var api1Url = 'https://global-warming.org/api/co2-api';
var co2DataEl = document.querySelector('#co2-data');
var co2SearchBtn = document.querySelector('#co2-search');
var co2InputEl = document.querySelector('#search-button-1');

var api4Url = 'https://global-warming.org/api/ocean-warming-api';
var oceanDataEl = document.querySelector('#ocean-data');
var oceanSearchBtn = document.querySelector('#ocean-search');
var oceanInputEl = document.querySelector('#search-button-4');

var api2Url = 'https://global-warming.org/api/temperature-api';
var tempDataEl = document.querySelector('#temp-data');
var tempSearchBtn = document.querySelector('#temp-search');
var tempInputEl = document.querySelector('#search-button-2');


var tempData;

function getTempData() {
    fetch(api2Url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            tempData = data.result; // this is the specific API reference- "result"
            console.log(tempData);
        });
}

getTempData();



var oceanData;

function getOceanData() {
    fetch(api4Url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            oceanData = data.result; // this is the specific API reference- "result"
            console.log(oceanData);
        });
}

getOceanData();


var climateData;

function getArticData() {
    fetch(apiUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            climateData = data.arcticData; // this is the specific API reference 'articData'
            // console.log(climateData);
        });
}

getArticData();


articSearchBtn.addEventListener('click', function () {
    var userYear = parseInt(arcticInputEl.value);

    const filteredData = climateData.filter(val => val.year === userYear)
    articDataEl.textContent = "The area of Arctic Ice was " + filteredData[0].area + " million square kilometres in " + userYear + ".";
    console.log(filteredData[0].area);
});

var co2Data;

function getCo2Data() {
    fetch(api1Url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            co2Data = data.co2; // this is the specific API reference 'co2'	
            console.log(co2Data);
            
        });
}

var co2Data;
function getCo2Data() {
    fetch(api1Url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            co2Data = data.co2; // this is the specific API reference
            console.log(co2Data);
        });
}
getCo2Data();
//Co2 data from 2013 onwards only*
co2SearchBtn.addEventListener('click',function () {
    var userYearCo2 = parseInt(co2InputEl.value);
    const filteredData = co2Data.filter(val => parseInt(val.year) === userYearCo2)
    co2DataEl.textContent = filteredData[0].cycle;
    //console.log(filteredData[0].cycle);
    console.log(filteredData);
    console.log(userYearCo2,co2Data);
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









/*    function yearSelected(selectObject) {
       let articDataSelected = 0;
       for (let i = 0; i < selectObject.options.length; i++) {
        if (selectObject.options[i].selected) {
         numberSelected++;
        }
       }
       return numberSelected;
      } */
