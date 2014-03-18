var planes = [
  ["<strong>Blanka Peak</strong> - 14 345 ft",37.577222, -105.485833],
  ["<strong>Ellingwood Point</strong> - 14 042 ft", 37.5825, -105.4925],
  ["<strong>Little Bear Peak</strong> - 14 037 ft", 37.566667, -105.497222],
  ["<strong>Challenger Point</strong> - 14 081 ft", 37.980278, -105.606667],
  ["<strong>Capitol Peak</strong> - 14 131 ft", 39.150278, -107.083056],
  ["<strong>Snowmass Mountain</strong> - 14 098 ft", 39.118889, -107.066389],
  ["<strong>Mount Bross</strong> - 14 178 ft", 39.335278, -106.1075],
  ["<strong>Mount Lincoln</strong> - 14 295 ft", 39.351389, -106.111389],
  ["<strong>Mount Democrat</strong> - 14 154 ft", 39.339722, -106.14],
  ["<strong>Mount Cameron</strong> - 14 238 ft", 39.3514, -106.1108],
  ["<strong>Longs Peak</strong> - 14 259 ft", 40.2550, -105.6151],
  ];

var map = L.map('map').setView([39.7392, -104.9847], 8);

for (var i = 0; i < planes.length; i++) {
  marker = new L.marker([planes[i][1],planes[i][2]])
    .bindPopup(planes[i][0])
    .addTo(map);
}

// L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map);

L.tileLayer('http://{s}.tile.cloudmade.com/07de95eccc2a46b09d7e52c29b947103/59617/256/{z}/{x}/{y}.png', {
    maxZoom: 18
}).addTo(map);


