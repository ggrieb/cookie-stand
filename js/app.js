'use strict';

// var time/hours

//var cookieStand = {

var firstAndPike = {
  minCustHour: 23,
  maxCustHour: 65,
  avgCookiesPerCust: 6.3,
  custEachHour: function getRandomIntInclusive(minCustHour, maxCustHour) {
  minCustHour = Math.ceil(this.minCustHour);
  maxCustHour = Math.floor(this.maxCustHour);
  return Math.floor(Math.random() * (maxCustHour - minCustHour + 1)) + minCustHour;
  }
};

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