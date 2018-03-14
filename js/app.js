'use strict';

var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];


// we need to access the table that is in the DOM
var cookieTable = document.getElementById('cookies');
// var cookieStandHours = document.getElementById('cookies');


// create constructor object shell
function cookieStandHours(){

  //create function with for loop to push hours array to table header
  for (var i = 0; i < hoursOpen.length; i++) {

    //create <th>
    var thElement = document.createElement('th');

    //create th content
    thElement.textContent = hoursOpen[i];

    //append th to table in DOM
    cookieTable.appendChild(thElement);
  }
  // log cookiesstandsarray
  // console.log(allCookiesStandSales);
}
cookieStandHours();

//create constructor object shell
function CookieStandSales(minCustPerHour, maxCustPerHour, avgCookiePerSale, location){

  // create all dynamic properties
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiePerSale = avgCookiePerSale;
  this.location = location;
  this.allCookiesStandSales = [];

  // var runSum = 0; // create a place holder var to begin running sum

  //create function with for loop to push hours array to table header
}

CookieStandSales.prototype.generateCustomers = function (){

  for (var i = 0; i < hoursOpen.length; i++) {

    var avgCookiePerHour = Math.random() * (this.maxCustPerHour - this.minCustPerHour) + this.minCustPerHour;
    avgCookiePerHour = Math.floor(avgCookiePerHour * this.avgCookiePerSale);

    this.allCookiesStandSales.push(avgCookiePerHour);
  }
};

CookieStandSales.prototype.render = function (){

  this.generateCustomers();

  // //create tr
  var trElement = document.createElement('tr');

  for (var i = 0; i < hoursOpen.length; i++) {

    // //create td
    var tdElement = document.createElement('td');

    // create td content
    tdElement.textContent = this.allCookiesStandSales[i];

    // append td to tr
    trElement.appendChild(tdElement);
  }
  // //append th to table in DOM
  cookieTable.appendChild(trElement);
};

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

// create cookie stand prototype function so I can create element, create content, append child to parent
// CookieStand.prototype.render = function(){


// First & Pike

// var firstAndPike = {
//   minCustPerHour: 23,
//   maxCustPerHour: 65,
//   avgCookiePerSale: 6.3,
//   cookieSales: [], // create array to push and store cookieSales values

//   showSales: function(){
//     var hourlyTotalsContainer = document.getElementById('hourlyTotalsPike'); //place here versus inside the loop because I am only using this var once, or only need to find it once, will require less browswer

//     var runSum = 0; // create a place holder var to begin running sum

//     for( var i = 0; i < hoursOpen.length; i++ ) {

//       var avgCookiePerHour = Math.random() * (this.maxCustPerHour - this.minCustPerHour) + this.minCustPerHour;
//       avgCookiePerHour = Math.floor(avgCookiePerHour * this.avgCookiePerSale);

//       var rowElement = document.createElement('li'); //creating <li></li> html tag
//       rowElement.textContent = hoursOpen[i] + avgCookiePerHour + 'cookies'; // store info in a row element, use textContent method

//       hourlyTotalsContainer.appendChild(rowElement); //append row element to cookie container

//       runSum = runSum + avgCookiePerHour; // add each new random num to previous random num
//       // console.log(this.runSum);

//       this.cookieSales.push(runSum); //push each random number to sales array, access last variable of array somehow
//       console.log(this.cookieSales);

//     }
//     var totalRowElement = document.createElement('li'); //creating <li></li> html tag
//     totalRowElement.textContent = 'Total: ' + runSum + 'cookies',
//     hourlyTotalsContainer.appendChild(totalRowElement); //append runSum to cookie container
//     // console.log(this.runSum);

//   }
// };
// firstAndPike.showSales();

// // Seatac Airport

// var seatacAirport = {
//   minCustPerHour: 3,
//   maxCustPerHour: 24,
//   avgCookiePerSale: 1.2,
//   cookieSales: [], // create array to push and store cookieSales values

//   showSales: function(){
//     var hourlyTotalsContainer = document.getElementById('hourlyTotalsSeatac');

//     var runSum = 0; // create a place holder var to begin running sum

//     for( var i = 0; i < hoursOpen.length; i++ ) {

//       var avgCookiePerHour = Math.random() * (this.maxCustPerHour - this.minCustPerHour) + this.minCustPerHour;
//       avgCookiePerHour = Math.floor(avgCookiePerHour * this.avgCookiePerSale);

//       var rowElement = document.createElement('li'); //creating <li></li> html tag
//       rowElement.textContent = hoursOpen[i] + avgCookiePerHour + 'cookies'; // store info in a row element, use textContent method

//       hourlyTotalsContainer.appendChild(rowElement); //append row element to cookie container

//       runSum = runSum + avgCookiePerHour; // add each new random num to previous random num
//       // console.log(this.runSum);

//       this.cookieSales.push(runSum); //push each random number to sales array
//       // console.log(this.cookieSales);

//     }
//     var totalRowElement = document.createElement('li'); //creating <li></li> html tag
//     totalRowElement.textContent = 'Total: ' + runSum + 'cookies', //content
//     hourlyTotalsContainer.appendChild(totalRowElement); //append runSum to cookie container
//     // console.log(this.runSum);

//   }
// };
// seatacAirport.showSales();

// // Seattle Center

// var seattleCenter = {
//   minCustPerHour: 11,
//   maxCustPerHour: 38,
//   avgCookiePerSale: 3.7,
//   cookieSales: [], // create array to push and store cookieSales values

//   showSales: function(){
//     var hourlyTotalsContainer = document.getElementById('hourlyTotalsSeattleCenter');

//     var runSum = 0; // create a place holder var to begin running sum

//     for( var i = 0; i < hoursOpen.length; i++ ) {

//       var avgCookiePerHour = Math.random() * (this.maxCustPerHour - this.minCustPerHour) + this.minCustPerHour;
//       avgCookiePerHour = Math.floor(avgCookiePerHour * this.avgCookiePerSale);

//       var rowElement = document.createElement('li'); //creating <li></li> html tag
//       rowElement.textContent = hoursOpen[i] + avgCookiePerHour + 'cookies'; // store info in a row element, use textContent method

//       hourlyTotalsContainer.appendChild(rowElement); //append row element to cookie container

//       runSum = runSum + avgCookiePerHour; // add each new random num to previous random num
//       // console.log(this.runSum);

//       this.cookieSales.push(runSum); //push each random number to sales array, access last variable of array somehow
//       // console.log(this.cookieSales);

//     }
//     var totalRowElement = document.createElement('li'); //creating <li></li> html tag
//     totalRowElement.textContent = 'Total: ' + runSum + 'cookies',
//     hourlyTotalsContainer.appendChild(totalRowElement); //append runSum to cookie container
//     // console.log(this.runSum);

//   }
// };
// seattleCenter.showSales();

// // Capitol Hill

// var capitolHill = {
//   minCustPerHour: 20,
//   maxCustPerHour: 38,
//   avgCookiePerSale: 2.3,
//   cookieSales: [], // create array to push and store cookieSales values

//   showSales: function(){
//     var hourlyTotalsContainer = document.getElementById('hourlyTotalsCapitolHill');

//     var runSum = 0; // create a place holder var to begin running sum

//     for( var i = 0; i < hoursOpen.length; i++ ) {

//       var avgCookiePerHour = Math.random() * (this.maxCustPerHour - this.minCustPerHour) + this.minCustPerHour;
//       avgCookiePerHour = Math.floor(avgCookiePerHour * this.avgCookiePerSale);

//       var rowElement = document.createElement('li'); //creating <li></li> html tag
//       rowElement.textContent = hoursOpen[i] + avgCookiePerHour + 'cookies'; // store info in a row element, use textContent method

//       hourlyTotalsContainer.appendChild(rowElement); //append row element to cookie container

//       runSum = runSum + avgCookiePerHour; // add each new random num to previous random num
//       // console.log(this.runSum);

//       this.cookieSales.push(runSum); //push each random number to sales array, access last variable of array somehow
//       // console.log(this.cookieSales);

//     }
//     var totalRowElement = document.createElement('li'); //creating <li></li> html tag
//     totalRowElement.textContent = 'Total: ' + runSum + 'cookies',
//     hourlyTotalsContainer.appendChild(totalRowElement); //append runSum to cookie container
//     // console.log(this.runSum);

//   }
// };
// capitolHill.showSales();

// // Alki

// var alki = {
//   minCustPerHour: 2,
//   maxCustPerHour: 16,
//   avgCookiePerSale: 4.6,
//   cookieSales: [], // create array to push and store cookieSales values

//   showSales: function(){
//     var hourlyTotalsContainer = document.getElementById('hourlyTotalsAlki');

//     var runSum = 0; // create a place holder var to begin running sum

//     for( var i = 0; i < hoursOpen.length; i++ ) {

//       var avgCookiePerHour = Math.random() * (this.maxCustPerHour - this.minCustPerHour) + this.minCustPerHour;
//       avgCookiePerHour = Math.floor(avgCookiePerHour * this.avgCookiePerSale);

//       var rowElement = document.createElement('li'); //creating <li></li> html tag
//       rowElement.textContent = hoursOpen[i] + avgCookiePerHour + 'cookies'; // store info in a row element, use textContent method

//       hourlyTotalsContainer.appendChild(rowElement); //append row element to cookie container

//       runSum = runSum + avgCookiePerHour; // add each new random num to previous random num
//       // console.log(this.runSum);

//       this.cookieSales.push(runSum); //push each random number to sales array, access last variable of array somehow
//       // console.log(this.cookieSales);

//     }
//     var totalRowElement = document.createElement('li'); //creating <li></li> html tag
//     totalRowElement.textContent = 'Total: ' + runSum + 'cookies',
//     hourlyTotalsContainer.appendChild(totalRowElement); //append runSum to cookie container
//     // console.log(this.runSum);

//   }
// };
// alki.showSales();


