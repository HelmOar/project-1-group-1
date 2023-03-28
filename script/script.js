var apiUrl = 'https://global-warming.org/api/arctic-api';
var articDataEl = document.querySelector('#artic-data');
var articSearchBtn = document.querySelector('#arctic-search');
var arcticInputEl = document.querySelector('#search-button-3');
var arcticHistoryEl = document.querySelector('#history-data-3');
var arcticHistory = JSON.parse(localStorage.getItem("arcticHistory")) || [];
var modalEl3 = document.querySelector("#modal-3");
var modalBg3 = document.querySelector("#modal-bg-3");
var modalCloseBtn3 = document.querySelector("#modal-close-btn-3");

var api1Url = 'https://global-warming.org/api/co2-api';
var co2DataEl = document.querySelector('#co2-data');
var co2SearchBtn = document.querySelector('#co2-search');
var co2InputEl = document.querySelector('#search-button-1');
var co2HistoryEl = document.querySelector('#history-data-1');
var co2History = JSON.parse(localStorage.getItem("co2History")) || [];
var modalEl1 = document.querySelector("#modal-1");
var modalBg1 = document.querySelector("#modal-bg-1");
var modalCloseBtn1 = document.querySelector("#modal-close-btn-1");

var api4Url = 'https://global-warming.org/api/ocean-warming-api';
var oceanDataEl = document.querySelector('#ocean-data');
var oceanSearchBtn = document.querySelector('#search-button-4');
var oceanInputEl = document.querySelector('#ocean-search');
var oceanHistoryEl = document.querySelector('#history-data-4');
var oceanHistory = JSON.parse(localStorage.getItem("oceanHistory")) || [];
var modalEl4 = document.querySelector("#modal-4");
var modalBg4 = document.querySelector("#modal-bg-4");
var modalCloseBtn4 = document.querySelector("#modal-close-btn-4");

var api2Url = 'https://global-warming.org/api/temperature-api';
var tempDataEl = document.querySelector('#temp-data');
var tempSearchBtn = document.querySelector('#search-button-2');
var tempInputEl = document.querySelector('#temp-search');
var tempHistoryEl = document.querySelector('#history-data-2');
var tempHistory = JSON.parse(localStorage.getItem("tempHistory")) || [];
var modalEl2 = document.querySelector("#modal-2");
var modalBg2 = document.querySelector("#modal-bg-2");
var modalCloseBtn2 = document.querySelector("#modal-close-btn-2");

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

    if (userYear <1880 || userYear >2022) {
    modalBg2.classList.add("is-active");
    modalEl2.classList.add("is-active");
    }

    const filteredData = tempData.filter(val => val.time.split(".")[0] == userYear);
    tempDataEl.textContent = "The global mean surface temperature was " + (filteredData[0]['land']) + "°C in " + userYear + ".";

    let test = {
        year: userYear,
        temp: filteredData[0]
    }
    tempHistory.push(test);
    localStorage.setItem("tempHistory", JSON.stringify(tempHistory));

    for (let i = 0; i < tempHistory.length; i++) {
        console.log(tempHistory[i]);
        var tempYearHistory = document.createElement("p");
        tempYearHistory.textContent = `The global mean surface temperature was ${tempHistory[i].temp.land} for year ${userYear}`;
        tempHistoryEl.appendChild(tempYearHistory);
    }

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

    if (userYear <1880 || userYear >2022) {
    modalBg4.classList.add("is-active");
    modalEl4.classList.add("is-active");
    }

    localStorage.setItem("Ocean Year Searched", userYear)


    oceanDataEl.textContent = "The ocean surface temperature was " + oceanData[userYear] + " °C " + userYear + ".";

    let ocean = {
        year: userYear,
        temp: oceanData[userYear]
    }

    oceanHistory.push(ocean);
    localStorage.setItem("oceanHistory", JSON.stringify(oceanHistory));

    for (let i = 0; i < oceanHistory.length; i++) {
        console.log(oceanHistory[i]);
        var oceanYearHistory = document.createElement("p");
        oceanYearHistory.textContent = `The ocean surface temperature was ${oceanHistory[i].temp} for year ${userYear}`;
        oceanHistoryEl.appendChild(oceanYearHistory);
    }

})



// ******************** ARCTIC DATA SECTION ******************
var climateData;

function getArticData() {
    fetch(apiUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            climateData = data.arcticData; // this is the specific API reference 'articData'
        });
}

getArticData();


articSearchBtn.addEventListener('click', function () {
    var userYear = parseInt(arcticInputEl.value);

    if (userYear <1979 || userYear >2022) {
    modalBg3.classList.add("is-active");
    modalEl3.classList.add("is-active");
    }

    const filteredData = climateData.filter(val => val.year === userYear)
    articDataEl.textContent = "The area of Arctic Ice was " + filteredData[0].area + " million square km in " + userYear + ".";

    let arctic = {
        year: userYear,
        area: filteredData[0].area
    }

    arcticHistory.push(arctic);
    localStorage.setItem("arcticHistory", JSON.stringify(arcticHistory));

    for (let i = 0; i < arcticHistory.length; i++) {
        console.log(arcticHistory[i]);
        var arcticYearHistory = document.createElement("p");
        arcticYearHistory.textContent = `The area of Arctic Ice was ${arcticHistory[i].area} million square km for year ${userYear}`;
        arcticHistoryEl.appendChild(arcticYearHistory);
    }
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
    
    if (userYearCo2 <2013 || userYearCo2 >2022) {
    modalBg1.classList.add("is-active");
    modalEl1.classList.add("is-active");
    }
    const filteredData = co2Data.filter(val => parseInt(val.year) === userYearCo2)

    co2DataEl.textContent = "The fraction of CO2 in the atmosphere was " + filteredData[0].cycle + " in " + userYearCo2 + ".";

    let co2 = {
        year: userYearCo2,
        cycle: filteredData[0].cycle
    }

    co2History.push(co2);
    localStorage.setItem("co2History", JSON.stringify(co2History));

    for (let i = 0; i < co2History.length; i++) {
        console.log(co2History[i]);
        var co2YearHistory = document.createElement("p");
        co2YearHistory.textContent = `The fraction of CO2 in the atmosphere was ${co2History[i].cycle} for year ${userYearCo2}`;
        co2HistoryEl.appendChild(co2YearHistory);
    }
});


//modal closures

modalCloseBtn1.addEventListener("click", function () {
    modalEl1.classList.remove("is-active");
    modalBg1.classList.remove("is-active");
})

modalCloseBtn2.addEventListener("click", function () {
    modalEl2.classList.remove("is-active");
    modalBg2.classList.remove("is-active");
})

modalCloseBtn3.addEventListener("click", function () {
    modalEl3.classList.remove("is-active");
    modalBg3.classList.remove("is-active");
})

modalCloseBtn4.addEventListener("click", function () {
    modalEl4.classList.remove("is-active");
    modalBg4.classList.remove("is-active");
})




