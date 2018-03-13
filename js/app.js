'use strict';

var hoursOpen = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '];

// First & Pike

var firstAndPike = {
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiePerSale: 6.3,
  cookieSales: [], // create array to push and store cookieSales values

  showSales: function(){
    var hourlyTotalsContainer = document.getElementById('hourlyTotalsPike'); //place here versus inside the loop because I am only using this var once, or only need to find it once, will require less browswer

    var runSum = 0; // create a place holder var to begin running sum

    for( var i = 0; i < hoursOpen.length; i++ ) {

      var avgCookiePerHour = Math.random() * (this.maxCustPerHour - this.minCustPerHour) + this.minCustPerHour;
      avgCookiePerHour = Math.floor(avgCookiePerHour * this.avgCookiePerSale);

      var rowElement = document.createElement('li'); //creating <li></li> html tag
      rowElement.textContent = hoursOpen[i] + avgCookiePerHour + 'cookies'; // store info in a row element, use textContent method

      hourlyTotalsContainer.appendChild(rowElement); //append row element to cookie container

      runSum = runSum + avgCookiePerHour; // add each new random num to previous random num
      // console.log(this.runSum);

      this.cookieSales.push(runSum); //push each random number to sales array, access last variable of array somehow
      // console.log(this.cookieSales);

    }
    var totalRowElement = document.createElement('li'); //creating <li></li> html tag
    totalRowElement.textContent = 'Total: ' + runSum + 'cookies',
    hourlyTotalsContainer.appendChild(totalRowElement); //append runSum to cookie container
    // console.log(this.runSum);

  }
};
firstAndPike.showSales();

// Seatac Airport

var seatacAirport = {
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookiePerSale: 1.2,
  cookieSales: [], // create array to push and store cookieSales values

  showSales: function(){
    var hourlyTotalsContainer = document.getElementById('hourlyTotalsSeatac');

    var runSum = 0; // create a place holder var to begin running sum

    for( var i = 0; i < hoursOpen.length; i++ ) {

      var avgCookiePerHour = Math.random() * (this.maxCustPerHour - this.minCustPerHour) + this.minCustPerHour;
      avgCookiePerHour = Math.floor(avgCookiePerHour * this.avgCookiePerSale);

      var rowElement = document.createElement('li'); //creating <li></li> html tag
      rowElement.textContent = hoursOpen[i] + avgCookiePerHour + 'cookies'; // store info in a row element, use textContent method

      hourlyTotalsContainer.appendChild(rowElement); //append row element to cookie container

      runSum = runSum + avgCookiePerHour; // add each new random num to previous random num
      // console.log(this.runSum);

      this.cookieSales.push(runSum); //push each random number to sales array
      // console.log(this.cookieSales);

    }
    var totalRowElement = document.createElement('li'); //creating <li></li> html tag
    totalRowElement.textContent = 'Total: ' + runSum + 'cookies', //content
    hourlyTotalsContainer.appendChild(totalRowElement); //append runSum to cookie container
    // console.log(this.runSum);

  }
};
seatacAirport.showSales();

// Seattle Center

var seattleCenter = {
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiePerSale: 3.7,
  cookieSales: [], // create array to push and store cookieSales values
  runSum: 0, // create a place holder var to begin running sum

  showSales: function(){
    var hourlyTotalsContainer = document.getElementById('hourlyTotalsSeattleCenter');

    for( var i = 0; i < hoursOpen.length; i++ ) {

      var avgCookiePerHour = Math.random() * (this.maxCustPerHour - this.minCustPerHour) + this.minCustPerHour;
      avgCookiePerHour = Math.floor(avgCookiePerHour * this.avgCookiePerSale);

      var rowElement = document.createElement('li'); //creating <li></li> html tag
      rowElement.textContent = hoursOpen[i] + avgCookiePerHour + 'cookies'; // store info in a row element, use textContent method

      hourlyTotalsContainer.appendChild(rowElement); //append row element to cookie container

      this.runSum = this.runSum + avgCookiePerHour; // add each new random num to previous random num
      // console.log(this.runSum);

      this.cookieSales.push(this.runSum); //push each random number to sales array, access last variable of array somehow
      // console.log(this.cookieSales);

    }
    var totalRowElement = document.createElement('li'); //creating <li></li> html tag
    totalRowElement.textContent = 'Total: ' + this.runSum + 'cookies',
    hourlyTotalsContainer.appendChild(totalRowElement); //append runSum to cookie container
    // console.log(this.runSum);

  }
};
seattleCenter.showSales();

// Capitol Hill

var capitolHill = {
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookiePerSale: 2.3,
  cookieSales: [], // create array to push and store cookieSales values
  runSum: 0, // create a place holder var to begin running sum

  showSales: function(){
    var hourlyTotalsContainer = document.getElementById('hourlyTotalsCapitolHill');

    for( var i = 0; i < hoursOpen.length; i++ ) {

      var avgCookiePerHour = Math.random() * (this.maxCustPerHour - this.minCustPerHour) + this.minCustPerHour;
      avgCookiePerHour = Math.floor(avgCookiePerHour * this.avgCookiePerSale);

      var rowElement = document.createElement('li'); //creating <li></li> html tag
      rowElement.textContent = hoursOpen[i] + avgCookiePerHour + 'cookies'; // store info in a row element, use textContent method

      hourlyTotalsContainer.appendChild(rowElement); //append row element to cookie container

      this.runSum = this.runSum + avgCookiePerHour; // add each new random num to previous random num
      // console.log(this.runSum);

      this.cookieSales.push(this.runSum); //push each random number to sales array, access last variable of array somehow
      // console.log(this.cookieSales);

    }
    var totalRowElement = document.createElement('li'); //creating <li></li> html tag
    totalRowElement.textContent = 'Total: ' + this.runSum + 'cookies',
    hourlyTotalsContainer.appendChild(totalRowElement); //append runSum to cookie container
    // console.log(this.runSum);

  }
};
capitolHill.showSales();

// Alki

var alki = {
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookiePerSale: 4.6,
  cookieSales: [], // create array to push and store cookieSales values
  runSum: 0, // create a place holder var to begin running sum

  showSales: function(){
    var hourlyTotalsContainer = document.getElementById('hourlyTotalsAlki');

    for( var i = 0; i < hoursOpen.length; i++ ) {

      var avgCookiePerHour = Math.random() * (this.maxCustPerHour - this.minCustPerHour) + this.minCustPerHour;
      avgCookiePerHour = Math.floor(avgCookiePerHour * this.avgCookiePerSale);

      var rowElement = document.createElement('li'); //creating <li></li> html tag
      rowElement.textContent = hoursOpen[i] + avgCookiePerHour + 'cookies'; // store info in a row element, use textContent method

      hourlyTotalsContainer.appendChild(rowElement); //append row element to cookie container

      this.runSum = this.runSum + avgCookiePerHour; // add each new random num to previous random num
      // console.log(this.runSum);

      this.cookieSales.push(this.runSum); //push each random number to sales array, access last variable of array somehow
      // console.log(this.cookieSales);

    }
    var totalRowElement = document.createElement('li'); //creating <li></li> html tag
    totalRowElement.textContent = 'Total: ' + this.runSum + 'cookies',
    hourlyTotalsContainer.appendChild(totalRowElement); //append runSum to cookie container
    // console.log(this.runSum);

  }
};
alki.showSales();


