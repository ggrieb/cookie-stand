'use strict';

var hour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var place = ['First and Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki Beach'];

var allSales = [];

var cookieTable = document.getElementById('cookiesales');

function CookieStand(name, minCustHour, maxCustHour, avgCookiesPerCust) {
  this.name = name;
  this.minCustHour = minCustHour;
  this.maxCustHour = maxCustHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.custEachHour = [];
  this.totalCookiesDay = [];
  allSales.push(this);
}

var pikePlace = new CookieStand(place[0], 23, 65, 6.3);
var seaTac = new CookieStand(place[1], 3, 24, 1.2);
var seaCent = new CookieStand(place[2], 11, 38, 3.7);
var capHill = new CookieStand(place[3], 20, 38, 2.3);
var alki = new CookieStand(place[4], 2, 16, 4.6);


CookieStand.prototype.custEHCalc = function() {
  for (var i = 0; i < hour.length; i++) {
    var custHourly = Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1) + this.minCustHour);
    this.custEachHour.push(custHourly);
  }
};

CookieStand.prototype.totalCDCalc = function() {
  this.custEHCalc();
  for (var i = 0; i < hour.length; i++) {
    var totalCookie = Math.floor(this.custEachHour[i] * this.avgCookiesPerCust);
    this.totalCookiesDay.push(totalCookie);
  }
};

function makeHeaderRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Location';
  trEl.appendChild(thEl);
  for (var i = 0; i <= hour.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hour[i];
    trEl.appendChild(thEl);
  }
  thEl.textContent = 'Daily Location Total';
  trEl.appendChild(thEl);
  cookieTable.appendChild(trEl);
}

CookieStand.prototype.render = function() {
  this.totalCDCalc();
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);
  for (var i = 0; i < hour.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.custEachHour[i];
    trEl.appendChild(tdEl);
  };
  var sumTotal = 0; 
  //for (var i = 0; i < hour.length; i++) {
  //};
  for (var i = 0; i <= place.length; i++) {
    tdEl = document.createElement('td');
  };
  tdEl.textContent = sumTotal += this.totalCookiesDay[i];
  trEl.appendChild(tdEl);
  //for (var i = 0; i < hour.length; i++) {
    //};
    //};
    //sumTotal += this.totalCookiesDay[i];
    //tdEl.textContent = sumTotal;
    cookieTable.appendChild(trEl);
  };
  
makeHeaderRow();
pikePlace.render();
seaTac.render();
seaCent.render();
capHill.render();
alki.render();

console.table(allSales);