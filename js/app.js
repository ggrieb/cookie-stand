'use strict';

var time = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//var cookieStand = {

var firstAndPike = {
  name: 'First and Pike',
  minCustHour: 23,
  maxCustHour: 65,
  avgCookiesPerCust: 6.3,
  custEachHour: function getRandomIntInclusive(minCustHour, maxCustHour) { //customers each hour function
  minCustHour = Math.ceil(this.minCustHour);
  maxCustHour = Math.floor(this.maxCustHour);
  return Math.floor(Math.random() * (maxCustHour - minCustHour + 1)) + minCustHour;
  },
  totalCookiesDay: function(custEachHour, avgCookiesPerCust) { //total cookies day function
  custEachHour = Math.ceil(this.custEachHour()); //calls to a !function! NOT var
  avgCookiesPerCust = Math.floor(this.avgCookiesPerCust);
  return Math.floor(custEachHour * avgCookiesPerCust);
  },
  /*cookiesSoldEachHour: function(totalCookiesDay, custEachHour) {
    for (i = 0; i < time.length; i++) {
    totalCookiesDay = Math.ceil(this.totalCookiesDay());
    custEachHour = Math.floor(this.custEachHour());
    return Math.floor(totalCookiesDay / custEachHour);
    }
  },*/
}
  
/*
var seaTacAirport = {
  minCustHour: 3,
  maxCustHour: 24,
  avgCookiesPerCust: 1.2,
  custEachHour: function(){

  }
}

var seaCenter = {
  minCustHour: 11,
  maxCustHour: 38,
  avgCookiesPerCust: 3.7,
  custEachHour: function(){

  }
}

var capitolHill = {
  minCustHour: 20,
  maxCustHour: 38,
  avgCookiesPerCust: 2.3,
  custEachHour: function(){

  }
}

var alki = {
  minCustHour: 2,
  maxCustHour: 16,
  avgCookiesPerCust: 4.6,
  custEachHour: function(){

  }
}
*/