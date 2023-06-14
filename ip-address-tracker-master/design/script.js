var map = L.map('map').setView([51.505, -0.09], 13);
console.log(map)


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)


let get_data = async() =>
{
    let make = await fetch('https://geo.ipify.org/api/v2/country,city?apiKey=at_yJh3T30nnO76oQrgvGgmPyJzAuREZ&ipAddress=192.212.174.101')
    let data = await make.json()
    console.log(data.location)

   
}
get_data()