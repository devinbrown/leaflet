var x = 38.016;
var y = -105.364;
var poiMessage =  "<b>The Ranch</b>";

var x = 39.71744;
var y = -104.97576;
var poiMessage =  "<b>Compound Zero</b>";

var map = L.map('map').setView([x, y], 15);

// L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map);

L.tileLayer('http://{s}.tile.cloudmade.com/07de95eccc2a46b09d7e52c29b947103/120365/256/{z}/{x}/{y}.png', {
    maxZoom: 18
}).addTo(map);

var marker = L.marker([x, y]).addTo(map);
marker.bindPopup(poiMessage).openPopup();
