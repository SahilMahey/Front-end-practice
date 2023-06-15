

var map = L.map('map').setView([0, 0], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const locationIcon = L.icon({
    iconUrl: 'icon-location.svg',
    iconSize: [30, 30],
    iconAnchor: [15, 15]
});

const marker = L.marker([0, 0],{icon: locationIcon}).addTo(map)
    


let get_data = async() =>
{
    let ip_address  = document.getElementsByTagName('input')[0].value;
    try 
    {
        let make = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_yJh3T30nnO76oQrgvGgmPyJzAuREZ&ipAddress=${ip_address}`)
        let data = await make.json()
        document.getElementsByClassName('para')[0].innerHTML = data.ip;
        document.getElementsByClassName('para')[1].innerHTML = data.location.city + ", "+data.location.region + data.location.postalCode
        document.getElementsByClassName('para')[2].innerHTML = data.location.timezone;
        document.getElementsByClassName('para')[3].innerHTML = data.isp;
         
        map.setView([data.location.latitude, data.location.longitude], 13);
        marker.setLatLng([data.location.latitude, data.location.longitude]);
        
    }
    catch
    {
        alert('Please enter valid ip address');
    }
   
}

