var map = L.map('map').setView([38.02, -105.37], 15);

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
}).addTo(map);

var marker = L.marker([38.016, -105.364]).addTo(map);