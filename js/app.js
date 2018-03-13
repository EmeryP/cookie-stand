'use strict';

var hoursOpen = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '];

var cookieStand = {
  location: 'firstAndPike',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiePerSale: 6.3,

  // randCustVol : Math.floor(Math.random() * 10 (this.maxCustPerHour - this.minCustPerHour))
  // randCustVol : Math.floor(Math.random() * (65 - 23)) + 23,

  // function : getRandomInt(minCustPerHour, maxCustPerHour) {
  //   minCustPerHour = Math.ceil(23),
  //   maxCustPerHour = Math.floor(65),


  showSales: function(){
    var cookieContainer = document.getElementById('cookie');

    for( var i=0; i < hoursOpen.length; i++ ) {

      var custPerHour = Math.random() * (this.maxCustPerHour - this.minCustPerHour) + this.minCustPerHour;
      custPerHour = Math.floor(custPerHour * this.avgCookiePerSale / hoursOpen.length);

      var rowElement = document.createElement('li'); //<li></li>
      rowElement.textContent = hoursOpen[i] + custPerHour + 'cookies';

      cookieContainer.appendChild(rowElement);

    }
  }
};

cookieStand.showSales();
// console.log(firstAndPike.randCustVol);