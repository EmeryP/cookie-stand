'use strict';

//create empty array to push each store info to
var storesArray = []; //all stores becuase hold stores

//global var with hours open
var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// we need to access the table that is in the DOM
var cookieTable = document.getElementById('cookies');

//access the form so we can attach an event listener
var storeForm = document.getElementById('storeForm');

// =====================================================

// create function to push hourOpen into th
function cookieStandHours(){

  var tdElement = document.createElement('td');
  tdElement.textContent = '';

  //use for loop to push hours array to table header
  for (var i = 0; i < hoursOpen.length; i++) {

    //create <th>
    var thElement = document.createElement('th');

    //create th content
    thElement.textContent = hoursOpen[i];

    //append th to table in DOM
    cookieTable.appendChild(thElement);
  }
  // repeat code from above with new statement to create daily totals column
  thElement = document.createElement('th');
  thElement.textContent = 'Daily Totals';
  cookieTable.appendChild(thElement);
}
// call cookieStandHours func
cookieStandHours();

// ======================================================
//create constructor object
function CookieStand(minCustPerHour, maxCustPerHour, avgCookiePerSale, location){

  // create all dynamic properties
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiePerSale = avgCookiePerSale;
  this.location = location;
  //empty array to push sales figures into
  this.allCookiesStandSales = [];
  //create day totals
  this.dailySalesTotals = 0;
  // push this info to empty array
  storesArray.push(this);
  // console.log(storesArray);
}

// =================================================================

//creating function to generate random num and push to empty array
CookieStand.prototype.salesFiguresGenerator = function (){

  for (var i = 0; i < hoursOpen.length - 1; i++) {

    var avgCookiePerHour = Math.random() * (this.maxCustPerHour - this.minCustPerHour) + this.minCustPerHour;
    avgCookiePerHour = Math.floor(avgCookiePerHour * this.avgCookiePerSale);

    this.allCookiesStandSales.push(avgCookiePerHour);

    this.dailySalesTotals = avgCookiePerHour += this.dailySalesTotals;
    // console.log(this.dailySalesTotals);

  }
};
// ================================================================

CookieStand.prototype.render = function (){

  this.salesFiguresGenerator();

  // //create tr
  var trElement = document.createElement('tr');

  var tdElement = document.createElement('td');
  tdElement.textContent = this.location;
  trElement.appendChild(tdElement);

  for (var i = 0; i < hoursOpen.length - 1; i++) {

    // //create td
    tdElement = document.createElement('td');
    // create td content
    tdElement.textContent = this.allCookiesStandSales[i];
    // append td to tr
    trElement.appendChild(tdElement);
  }

  // totals sales for each location for the day
  tdElement = document.createElement('td');
  tdElement.textContent = this.dailySalesTotals;
  trElement.appendChild(tdElement);
  // //append th to table in DOM
  cookieTable.appendChild(trElement);
};

// =======================================================================
// create function to push total hourly sales into the footer row
function cookieStandHourlyTotals(){

  var trElement = document.createElement('tr');
  var tdElement = document.createElement('td');
  tdElement.textContent = 'Total';
  trElement.appendChild(tdElement);

  //use for loop to push hours array to table header
  for (var i = 0; i < hoursOpen.length; i++) {

    var hourlyCounter = 0;

    //nested for loop used iterate through stores array and add value at stores position
    for (var store = 0; store < storesArray.length; store++) {

      hourlyCounter += storesArray[store].allCookiesStandSales[i];
    }

    tdElement = document.createElement('td');

    //create the content
    tdElement.textContent = hourlyCounter;

    trElement.appendChild(tdElement);
  }
  //append th to table in DOM
  cookieTable.appendChild(trElement);
}
// call cookieStandHours func


// =======================================================================

//create var with new location instance for each store
var firstAndPike = new CookieStand(23, 65, 6.3, 'First and Pike');
var seatacAirport = new CookieStand(3, 24, 1.2, 'SeaTac Airport');
var seattleCenter = new CookieStand(11, 38, 3.7, 'Seattle Center');
var capitolHill = new CookieStand(20, 38, 2.3, 'Capitol Hill');
var alki = new CookieStand(2, 16, 4.6, 'Alki');

// call the render method on each var
// firstAndPike.render();
// seatacAirport.render();
// seattleCenter.render();
// capitolHill.render();
// alki.render();
// cookieStandHourlyTotals();

// ================================================================

function renderAllStores(){
  for(var i in storesArray){
    storesArray[i].render();
  }
}

//event listeners call back function
function addNewStore(event){
  event.preventDefault();
  // console.log(event.target.minCustPerHour.value);

  //assigning new value to property assigned to current property
  var newMinCustPerHour = event.target.minCustPerHour.value;
  var newMaxCustPerHour = event.target.maxCustPerHour.value;
  var newAvgCookiePerSale = event.target.avgCookiePerSale.value;
  var newLocation = event.target.location.value;

  new CookieStand(newMinCustPerHour, newMaxCustPerHour, newAvgCookiePerSale, newLocation);

  cookieTable.innerHTML = '';
  renderAllStores();
}

//add event listener, listening for event
storeForm.addEventListener('submit', addNewStore);

//Now we need to call our functions
renderAllStores();