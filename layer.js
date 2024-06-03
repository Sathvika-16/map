// Initializing Leaflet map
var map = L.map('map').setView([20.5937, 78.9629], 5); // Default center coordinates (India)

// Adding base layer
var satelliteLayer = L.tileLayer('https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
}).addTo(map);

// vector layer
var vectorLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    maxZoom: 20,
    subdomains:['a','b','c','d']
});

// Raster data layers
var rasterLayers = {
    "Vector Tile": vectorLayer,
    "Elevation": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'),
    "Land Cover": L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png')
};

// Add layer control
L.control.layers(null, rasterLayers, { collapsed: false,  position: 'bottomright',}).addTo(map);