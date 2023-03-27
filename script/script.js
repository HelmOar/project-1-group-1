var apiUrl = 'https://global-warming.org/api/arctic-api';
var articDataEl = document.querySelector('#artic-data');
var articSearchBtn = document.querySelector('#arctic-search');
var arcticInputEl = document.querySelector('#search-button-3');
var arcticHistoryEl = document.querySelector('#history-data-3');

var api1Url = 'https://global-warming.org/api/co2-api';
var co2DataEl = document.querySelector('#co2-data');
var co2SearchBtn = document.querySelector('#co2-search');
var co2InputEl = document.querySelector('#search-button-1');
var co2HistoryEl = document.querySelector('#history-data-1');

var api4Url = 'https://global-warming.org/api/ocean-warming-api';
var oceanDataEl = document.querySelector('#ocean-data');
var oceanSearchBtn = document.querySelector('#search-button-4');
var oceanInputEl = document.querySelector('#ocean-search');
var oceanHistoryEl = document.querySelector('#history-data-4');

var api2Url = 'https://global-warming.org/api/temperature-api';
var tempDataEl = document.querySelector('#temp-data');
var tempSearchBtn = document.querySelector('#search-button-2');
var tempInputEl = document.querySelector('#temp-search');
var tempHistoryEl = document.querySelector('#history-data-2');


// ******************** TEMPERATURE DATA SECTION ********************
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

tempSearchBtn.addEventListener('click', function () {
    var userYear = parseInt(tempInputEl.value)
    localStorage.setItem("Temp Year Searched", userYear)

    const filteredData = tempData.filter(val => val.time.split(".")[0] == userYear)
    tempDataEl.textContent = filteredData[0]['land'];
    localStorage.setItem("Temp", filteredData[0]['land']);
    console.log(filteredData[0]['land'])

    //get Temp Year Searched from local storage and append to #history-data-2 if it exists
    var tempYearHistory = localStorage.getItem("Temp Year Searched");
    tempYearHistory.textContent = tempYearHistory;
    var tempHistory = localStorage.getItem("Temp");
    tempHistory.textContent = tempHistory;

})



//******************** OCEAN DATA SECTION ********************
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

oceanSearchBtn.addEventListener('click', function () {
    var userYear = parseInt(oceanInputEl.value);
    localStorage.setItem("Ocean Year Searched", userYear)

    oceanDataEl.textContent = oceanData[userYear];
    localStorage.setItem("Ocean Data", oceanData[userYear]);

})



// ******************** ARCTICE DATA SECTION ******************
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
    localStorage.setItem("Arctic Year Searched", userYear)

    const filteredData = climateData.filter(val => val.year === userYear)
    localStorage.setItem("Area", filteredData[0].area);
    articDataEl.textContent = "The area of Arctic Ice was " + filteredData[0].area + " million square kilometres in " + userYear + ".";
    console.log(filteredData[0].area);
});




// ******************** CO2 DATA SECTION ********************

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
co2SearchBtn.addEventListener('click', function () {
    var userYearCo2 = parseInt(co2InputEl.value);
    localStorage.setItem("Co2 Year Searched", userYearCo2);

    const filteredData = co2Data.filter(val => parseInt(val.year) === userYearCo2)
    co2DataEl.textContent = filteredData[0].cycle;
    localStorage.setItem("Co2", filteredData[0].cycle);


    // create alert if user chooses a year before 2013
    /*   if (userYearCo2 < 2013) {
          alert("Please choose a year from 2013 onwards")
      }; */
});











