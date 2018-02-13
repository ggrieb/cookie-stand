'use strict';

var time = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '];

//var cookieStand = {

var firstAndPike = {
  name: 'First and Pike',
  minCustHour: 23,
  maxCustHour: 65,
  avgCookiesPerCust: 6.3,
  custEachHour: [],
  custEHCalc: function getRandomIntInclusive(minCustHour, maxCustHour) { //customers each hour function
    for (var i = 0; i < time.length; i++) {
      var min = Math.ceil(this.minCustHour);
      var max = Math.floor(this.maxCustHour);
      this.custEachHour.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
  },
  totalCookiesDay: [],
  totalCDCalc: function(custEachHour, avgCookiesPerCust) { //total cookies day function
    for (var i = 0; i < time.length; i++) {
      custEachHour = Math.ceil(this.custEachHour[i]);
      avgCookiesPerCust = Math.floor(this.avgCookiesPerCust);
      this.totalCookiesDay.push(Math.floor(custEachHour * avgCookiesPerCust));
    }
  },
  render: function() {
    var ulEl = document.getElementById('pikeAndFirst');
    for (var i = 0; i <= time.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = time[i] + this.totalCookiesDay[i];
      ulEl.appendChild(liEl);
    }
    var sumTotal = 0;
    for (var i = 0; i < time.length; i++){
      sumTotal += this.totalCookiesDay[i];
    }
    liEl.textContent = "Total: " + sumTotal;
    ulEl.appendChild(liEl);
  },
}
firstAndPike.custEHCalc();
firstAndPike.totalCDCalc();
firstAndPike.render();

var seaTacAirport = {
  minCustHour: 3,
  maxCustHour: 24,
  avgCookiesPerCust: 1.2,
  custEachHour: [],
  custEHCalc: function getRandomIntInclusive(minCustHour, maxCustHour) { //customers each hour function
      for (var i = 0; i < time.length; i++) {
        var min = Math.ceil(this.minCustHour);
        var max = Math.floor(this.maxCustHour);
        this.custEachHour.push(Math.floor(Math.random() * (max - min + 1)) + min);
      }
  },
  totalCookiesDay: [],
  totalCDCalc: function(custEachHour, avgCookiesPerCust) { //total cookies day function
    for (var i = 0; i < time.length; i++) {
      custEachHour = Math.ceil(this.custEachHour[i]);
      avgCookiesPerCust = Math.floor(this.avgCookiesPerCust);
      this.totalCookiesDay.push(Math.floor(custEachHour * avgCookiesPerCust));
    }
  },
  render: function() {
    var ulEl = document.getElementById('seaTac');
    for (var i = 0; i <= time.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = time[i] + this.totalCookiesDay[i];
      ulEl.appendChild(liEl);
    }
    var sumTotal = 0;
    for (var i = 0; i < time.length; i++){
      sumTotal += this.totalCookiesDay[i];
    }
    liEl.textContent = "Total: " + sumTotal;
    ulEl.appendChild(liEl);
  },
}
seaTacAirport.custEHCalc();
seaTacAirport.totalCDCalc();
seaTacAirport.render();

var seaCenter = {
  minCustHour: 11,
  maxCustHour: 38,
  avgCookiesPerCust: 3.7,
  custEachHour: [],
  custEHCalc: function getRandomIntInclusive(minCustHour, maxCustHour) { //customers each hour function
    for (var i = 0; i < time.length; i++) {
      var min = Math.ceil(this.minCustHour);
      var max = Math.floor(this.maxCustHour);
      this.custEachHour.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
  },
  totalCookiesDay: [],
  totalCDCalc: function(custEachHour, avgCookiesPerCust) { //total cookies day function
    for (var i = 0; i < time.length; i++) {
      custEachHour = Math.ceil(this.custEachHour[i]);
      avgCookiesPerCust = Math.floor(this.avgCookiesPerCust);
      this.totalCookiesDay.push(Math.floor(custEachHour * avgCookiesPerCust));
    }
  },
  render: function() {
    var ulEl = document.getElementById('seaCent');
    for (var i = 0; i <= time.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = time[i] + this.totalCookiesDay[i];
      ulEl.appendChild(liEl);
    }
    var sumTotal = 0;
    for (var i = 0; i < time.length; i++){
      sumTotal += this.totalCookiesDay[i];
    }
    liEl.textContent = "Total: " + sumTotal;
    ulEl.appendChild(liEl);
  },
}
seaCenter.custEHCalc();
seaCenter.totalCDCalc();
seaCenter.render();

var capitolHill = {
  minCustHour: 20,
  maxCustHour: 38,
  avgCookiesPerCust: 2.3,
  custEachHour: [],
  custEHCalc: function getRandomIntInclusive(minCustHour, maxCustHour) { //customers each hour function
    for (var i = 0; i < time.length; i++) {
      var min = Math.ceil(this.minCustHour);
      var max = Math.floor(this.maxCustHour);
      this.custEachHour.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
  },
  totalCookiesDay: [],
  totalCDCalc: function(custEachHour, avgCookiesPerCust) { //total cookies day function
    for (var i = 0; i < time.length; i++) {
      custEachHour = Math.ceil(this.custEachHour[i]);
      avgCookiesPerCust = Math.floor(this.avgCookiesPerCust);
      this.totalCookiesDay.push(Math.floor(custEachHour * avgCookiesPerCust));
    }
  },
  render: function() {
    var ulEl = document.getElementById('capHill');
    for (var i = 0; i <= time.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = time[i] + this.totalCookiesDay[i];
      ulEl.appendChild(liEl);
    }
    var sumTotal = 0;
    for (var i = 0; i < time.length; i++){
      sumTotal += this.totalCookiesDay[i];
    }
    liEl.textContent = "Total: " + sumTotal;
    ulEl.appendChild(liEl);
  },
}
capitolHill.custEHCalc();
capitolHill.totalCDCalc();
capitolHill.render();

var alki = {
  minCustHour: 2,
  maxCustHour: 16,
  avgCookiesPerCust: 4.6,
  custEachHour: [],
  custEHCalc: function getRandomIntInclusive(minCustHour, maxCustHour) { //customers each hour function
    for (var i = 0; i < time.length; i++) {
      var min = Math.ceil(this.minCustHour);
      var max = Math.floor(this.maxCustHour);
      this.custEachHour.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
  },
  totalCookiesDay: [],
  totalCDCalc: function(custEachHour, avgCookiesPerCust) { //total cookies day function
    for (var i = 0; i < time.length; i++) {
      custEachHour = Math.ceil(this.custEachHour[i]);
      avgCookiesPerCust = Math.floor(this.avgCookiesPerCust);
      this.totalCookiesDay.push(Math.floor(custEachHour * avgCookiesPerCust));
    }
  },
  render: function() {
    var ulEl = document.getElementById('alkiLoc');
    for (var i = 0; i <= time.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = time[i] + this.totalCookiesDay[i];
      ulEl.appendChild(liEl);
    }
    var sumTotal = 0;
    for (var i = 0; i < time.length; i++){
      sumTotal += this.totalCookiesDay[i];
    }
    liEl.textContent = "Total: " + sumTotal;
    ulEl.appendChild(liEl);
  },
}
alki.custEHCalc();
alki.totalCDCalc();
alki.render();