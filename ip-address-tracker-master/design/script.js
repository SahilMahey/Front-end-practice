


let lat = 0;
let lon = 0;
    


var map = L.map("map").setView([lon, lat], 2);
var myIcon = L.icon({
	iconUrl: "icon-location.svg",
	iconAnchor: [22, 94],
	popupAnchor: [0, -70],
});
// add the OpenStreetMap tiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
	maxZoom: 19,
	attribution:
		'&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>',
}).addTo(map);
    


let get_data = async() =>
{
    let ip_address  = document.getElementsByTagName('input')[0].value;
    if (ip_address!="")
    {
        try
        {
            let data;
            let make = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_yJh3T30nnO76oQrgvGgmPyJzAuREZ&ipAddress=${ip_address}`)
            if (make.ok) {
                data = await make.json();
            } else {
                return alert("enter a valid adress");
            }
            
            document.getElementsByClassName('para')[0].innerHTML = data.ip//(data.ip!=undefined) ? data.ip : "192.232.323.212";
            document.getElementsByClassName('para')[1].innerHTML = data.location.city + ", "+data.location.region + data.location.postalCode
            document.getElementsByClassName('para')[2].innerHTML = data.location.timezone;
            document.getElementsByClassName('para')[3].innerHTML = data.isp;
            var marker = L.marker([data.location.lat, data.location.lng], { icon: myIcon }).addTo(map);
		    marker.bindPopup(`Current IP ${data.ip}`).openPopup();
		    map.flyTo([data.location.lat, data.location.lng], 13);
        
        }
        catch
        {
            alert("enter a valid ip adress")
        }
        
    
    
    }

    else
    {
        alert("Enter a value")
    }
   
   
}
