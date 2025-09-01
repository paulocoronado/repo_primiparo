var map = L.map('map').setView([4.623749878029455, -74.17556367896032], 13);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([4.623749878029455, -74.17556367896032]).addTo(map);

var marker = L.marker([4.686579524151262, -74.14091544116947]).addTo(map);