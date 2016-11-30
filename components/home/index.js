'use strict';
var map,
    points = [
        { lat: 42.359178, lng: -71.051759 },
        { lat: 42.362924, lng: -71.088096 },
        { lat: 42.346680, lng: -71.099406 },
        { lat: 42.354165, lng: -71.072596 },
        { lat: 42.3521825, lng: -71.0534684 },
    ];
app.home = kendo.observable({
    mapReady: false,
    onInit: function () {
        var div = document.getElementById("map_canvas");

        // Initialize the map view
        map = plugin.google.maps.Map.getMap(div);

        // Wait until the map is ready status.
        map.addEventListener(plugin.google.maps.event.MAP_READY, app.home.onMapReady);
    },
    onShow: function () { },
    afterShow: function () { },
    onMapReady: function () {
        app.home.set("mapReady", true);
    },
    addMarkers: function () {
        for (var i = 0; i < points.length; i++) {
            map.addMarker({
                position: points[i],
                title: "Welcome!",
                snippet: "Visit us",
                animation: plugin.google.maps.Animation.BOUNCE
            }, function (marker) {
                // Catch the click event
                marker.on(plugin.google.maps.event.INFO_CLICK, function () {
                    marker.showInfoWindow();
                });
            });
        }
    },
    navigateToPlace: function () {
        app.home.set("mapReady", false);
        map.animateCamera({
            target: { lat: 42.372351, lng: -71.040679 },
            zoom: 11,
            tilt: 30,
            bearing: 0,
            duration: 3000
        }, app.home.addMarkers);
    }
});

