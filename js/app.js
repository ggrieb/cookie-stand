'use strict';

var cookieTable = document.getElementById('cookiesales');

var hour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var place = ['First and Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki Beach'];

var allSales = [];

var hourTotalSales = 0;

function CookieStand(name, minCustHour, maxCustHour, avgCookiesPerCust) {
  this.name = name;
  this.minCustHour = minCustHour;
  this.maxCustHour = maxCustHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.custEachHour = [];
  this.totalCookiesHour = [];
  this.sumTotal = 0;
  allSales.push(this);
};

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
    var hourlyCookies = Math.ceil(this.custEachHour[i] * this.avgCookiesPerCust);
    this.totalCookiesHour.push(hourlyCookies);
    this.sumTotal += hourlyCookies;
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
};

CookieStand.prototype.render = function() {
  this.totalCDCalc();
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);
  for (var i = 0; i < hour.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.totalCookiesHour[i];
    trEl.appendChild(tdEl);
  }
  for (var i = 0; i <= place.length; i++) {
    tdEl = document.createElement('td');
  }
  tdEl.textContent = this.sumTotal;
  trEl.appendChild(tdEl);
  cookieTable.appendChild(trEl);
};

function makeFooterRow() {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Totals';
  trEl.appendChild(tdEl);
  for (var i = 0; i < hour.length; i++) {
    var hourSales = 0;
    for (var j = 0; j < place.length; j++) {
      hourTotalSales += allSales[j].totalCookiesHour[i]; 
      hourSales += allSales[j].totalCookiesHour[i];
    }
    tdEl = document.createElement('td');
    tdEl.textContent = hourSales;
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = hourTotalSales;
  trEl.appendChild(tdEl);
  cookieTable.appendChild(trEl);
};
  
makeHeaderRow();
pikePlace.render();
seaTac.render();
seaCent.render();
capHill.render();
alki.render();
makeFooterRow();

console.table(allSales);

//++++++++++++form code++++++++++++++++

//+++Global variables for DOM access+++

var fishForm = document.getElementById('fishform');
var cookieSales = document.getElementById('cookiesales');
var clearInputNum = document.getElementById('clearinputnum');
var allInputData = [];

//+++New Location Form Constructor+++
var NewLocation = function(newLocation, text) {
  this.newLocation = newLocation;
  this.text = text;
};

NewLocation.prototype.render = function() {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.innerHTML = this.newLocation + this.text;
  trEl.appendChild(trEl);
  cookieTable.appendChild(trEl);
}

//+++Function Declaration+++
function renderAllNewData() {
  cookieSales.innerHTML = '';
  for (var i = 0; i < allInputData.length; i++) {
    cookieSales.appendChild(allInputData[i].render());
  };
}

//+++event handler function for the submission of data+++
function handleNumbersSubmit(event) {
  console.log('log of the event object', event);
  console.log('log of the event.target', event.target);
  console.log('log of the event.target.name', event.target.name);
  console.log('log of the event.target.name.value', event.target.name.value);
  event.preventDefault(); //prevents page reload
    //validation
    if (!event.target.name.value || !event.target.mincust.value || !event.target.maxcust.value || !event.target.avgcust.value) {
      return alert('Fields CANNOT be EMPTY!');
    }
    var name = event.target.name.value;
    var minCust = event.target.mincust.value;
    var maxCust = event.target.maxcust.value;
    var avgCust = event.target.avgcust.value;
    var newLocation = new CookieStand(name, minCust, maxCust, avgCust);
    newLocation.render();
    event.target.name.value = null;
    event.target.mincust.value = null;
    event.target.maxcust.value = null;
    event.target.avgcust.value = null;
    hourTotalSales = 0; //to reset the total of totals number
    makeFooterRow();//placement
  }
  
  //TODO: add in append footer coder (totals) at beginning newLocation render and clear previous footer
  //The calculation should make the calculation and put them in an array and that array should make a new CookieStand instance that appends to the new store.
  
//+++event listener for submission form+++
fishForm.addEventListener('submit', handleNumbersSubmit);

//Event listener for the clear all inputs number buttomn
clearInputNum.addEventListener('click', function() {
  var name = document.getElementById('name');
  var minCust = document.getElementById('mincust');
  var maxCust = document.getElementById('maxcust');
  var avgCust = document.getElementById('avgcust');
  name.value = '';
  minCust.value = '';
  maxCust.value = '';
  avgCust.value = '';
  console.log('You just cleared the numbers');
  allInputData = [];
});
