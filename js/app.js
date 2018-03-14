'use strict';

//global var with hours open
var hoursOpen = ['', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// we need to access the table that is in the DOM
var cookieTable = document.getElementById('cookies');

// =====================================================

// create function to push hourOpen into th
function cookieStandHours(){

  //use for loop to push hours array to table header
  for (var i = 0; i < hoursOpen.length; i++) {

    //create <th>
    var thElement = document.createElement('th');

    //create th content
    thElement.textContent = hoursOpen[i];

    //append th to table in DOM
    cookieTable.appendChild(thElement);
  }
}
// call cookieStandHours func
cookieStandHours();

// ======================================================

//create constructor object shell
function CookieStandSales(minCustPerHour, maxCustPerHour, avgCookiePerSale, location){

  // create all dynamic properties
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiePerSale = avgCookiePerSale;
  this.location = location;
  //empty array to push sales figures into
  this.allCookiesStandSales = [];

}

// =================================================================

//creating function to generate random num and push to empty array
CookieStandSales.prototype.salesFiguresGenerator = function (){

  // var runSum = 0; // create a place holder var to begin running sum
  // var runSumArray = [];

  for (var i = 0; i < hoursOpen.length - 1; i++) {

    var avgCookiePerHour = Math.random() * (this.maxCustPerHour - this.minCustPerHour) + this.minCustPerHour;
    avgCookiePerHour = Math.floor(avgCookiePerHour * this.avgCookiePerSale);

    this.allCookiesStandSales.push(avgCookiePerHour);
    // runsum = runSum + avgCookiePerHour;
    // this.runSumArray.push(runSum);

  }
};

// ================================================================
// 
CookieStandSales.prototype.render = function (){

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

  // //append th to table in DOM

  cookieTable.appendChild(trElement);
};

// =======================================================================
// Total footer

// create function to push hourOpen into th
// function cookieStandHourlyTotals(){

//   //use for loop to push hours array to table header
//   for (var i = 0; i < hoursOpen.length; i++) {

//     //create <th>
//     var tfElement = document.createElement('tfoot');

//     //create th content
//     tfElement.textContent = this.runSumArray[i];

//     //append th to table in DOM
//     cookieTable.appendChild(tfElement);
//   }
// }
// // call cookieStandHours func
// cookieStandHourlyTotals();

// =======================================================================

//create var with new location instance for each store
var firstAndPike = new CookieStandSales(23, 65, 6.3, 'First and Pike');
var seatacAirport = new CookieStandSales(3, 24, 1.2, 'SeaTac Airport');
var seattleCenter = new CookieStandSales(11, 38, 3.7, 'Seattle Center');
var capitolHill = new CookieStandSales(20, 38, 2.3, 'Capitol Hill');
var alki = new CookieStandSales(2, 16, 4.6, 'Alki');

// call the render method on each var
firstAndPike.render();
seatacAirport.render();
seattleCenter.render();
capitolHill.render();
alki.render();



