
const myMap = L.map("map", {
  center: [37.0902, -45.7129],
  zoom: 2
});

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);



function createMarkers(response) {

    // Loop through the stations array
    const athMarkers = response.map(response => {
        // For each station, create a marker and bind a popup with the station's name
        const coord = [response.latitude, response.longitude];
        const popupMsg = "<h3>" + response.nationality + "<h3><h3>Average Earnings in $Millions: " + response.Average_Earnings + "<h3>";
        const aMarker = L.marker(coord).bindPopup(popupMsg).addTo(myMap);
        // Add the marker to the bikeMarkers array
        /* return aMarker;
		
		L.marker(coord)
        .bindPopup("<h1>" + city.name + "</h1> <hr> <h3>Population " + city.population + "</h3>")
        .addTo(myMap); */
    })

	
	
	
    // Create a layer group made from the bike markers array, pass it into the createMap function
/*     createMap(L.layerGroup(athMarkers)); */
/* 	console.log(response[0]);
	console.log(response[0].country);
	console.log(response[0].latitude);
	console.log(response[0].name); */
}


// Perform an API call to the Citi Bike API to get station information. Call createMarkers when complete
(async function(){
    const url = "https://project-athlete.herokuapp.com/average-salary"
	const response = await d3.json(url)
    createMarkers(response)
})()