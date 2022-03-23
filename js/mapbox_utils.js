import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
/**
 * Define all the file-scoped variables we'll need in various parts of this js file
 * **/
mapboxgl.accessToken = MAPBOX_API_KEY;
let map;
let geocoder;
let marker;
let popup;

/**
 * Invoke the initial functions to kick off our application
 * **/
init();
setGeocoderEventListener();


/**Define a function to instantiate the map and geocoder objects and bind them together**/
function init() {
    
    /*Make the mapbox map object, set to map variable declared above*/
    map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [-96.7969, 32.7763], // starting position [lng, lat]
        zoom: 12 // starting zoom
    });

    /*Make the geocoder object, set to the geocoder variable declared above*/
    geocoder = new MapboxGeocoder({
        accessToken: MAPBOX_API_KEY,
        mapboxgl: mapboxgl,
        marker: false
    });

    /*Add the geocoder variable value to the map as a control (form input)*/
    map.addControl(geocoder);
}

/**
 * Utility function to get a new Marker object whenever invoked
 * param coordinates: number array containing the lng lat of the location
 * **/
function getMarker(coordinates) {
    return new mapboxgl.Marker()
        .setLngLat(coordinates)
        .addTo(map);
}


/**
 * Utility function to get a new Popup object whenever invoked
 * param description: string represented details of the location
 * param coordinates: number array containing the lng lat of the location
 * **/
function getPopup(description, coordinates) {
    return new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML(`<p>${description}</p>`)
        .addTo(map);
}


/**
 * Encapsulates code to listen for the geocoder to return a result and allows us to get new Marker and Popup objects
 * **/
function setGeocoderEventListener() {
    geocoder.on("result", function (e) {
        /*We need to ensure marker/popup variables hoisted at the top actual *have* a value
        * Otherwise, calling a remove() method on a non-existent object will result in a runtime error
        * */
        if (marker) {
            marker.remove();
        }
        if (popup) {
            popup.remove();
        }
        
        /*Finally, set the hoisted marker/popup variables to new respective objects*/
        marker = getMarker(e.result.geometry.coordinates);
        popup = getPopup(e.result.place_name, e.result.geometry.coordinates);
    });
}
