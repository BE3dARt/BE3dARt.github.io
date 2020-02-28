    var map = L.map('map').setView([47.486153, 8.206813], 15);
    var Esri_WorldTopoMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
    }).addTo(map);

    var exportArray = [
            [0, 0, 0],
            [0, 0, 0]
        ];

    function addPointToExportArray(inputArray, latitude, longitude) {
        inputArray[inputArray.length] = [latitude, longitude];
        return inputArray;

    };

    var polylineArray = [[0, 0], [0, 0]];
    var testArray = [0];
    var testCounter = 0;

    var popup = L.popup();

    var polyline;

    function drawPolylineArray(latitude, longitude) {

        if (polylineArray[1][0] != 0 && polylineArray[0][0] != 0) {
            map.removeLayer(polyline);
        }

        if (polylineArray[1][0] == 0 && polylineArray[0][0] != 0) {
            polylineArray[1] = testArray[testCounter].getLatLng();
            polyline = L.polyline(polylineArray, {
                color: 'green'
            }).addTo(map);
        } else if (polylineArray[0][0] == 0) {
            polylineArray[0] = testArray[testCounter].getLatLng();
        } else {
            polylineArray[polylineArray.length] = testArray[testCounter].getLatLng();
            polyline = L.polyline(polylineArray, {
                color: 'green'
            }).addTo(map);

        }

    }






    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Add Marker too map (automatically detect)
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var markerArray = [0];
    var positionArray = [[0, 0, 0]];

    function addMarkerToMap(latitude, longitude) {
        var counter = 0;

        while (markerArray[counter] === undefined) {
            
            markerArray[counter] = 
                
                marker.setLatLng(position, {
                    draggable: 'true'
                });

            counter += 1;
        }

        markerArray[counter] = L.marker([latitude, longitude], {
            draggable: 'true'
        }).addTo(map);
        
        positionArray[counter][0] = latitude;
        positionArray[counter][1] = longitude;
        positionArray[counter][2] = 0;
        
        //markerArray[counter].bindPopup("<br>Latitude: " + latitude.toFixed(2) + " Longitude: " + longitude.toFixed(2)).openPopup();
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Make a HTTP Request and return elevation
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var proxy = ['https://cors-anywhere.herokuapp.com/', 'https://api.allorigins.win/raw?url=', 'https://yacdn.org/proxy/'];
    funtion getAltitude(latitude, longitude, inputProxy, arrayPos) {

        if (arrayPos <= 2) {
            var xmlhttp = new XMLHttpRequest();

            xmlhttp.open("GET", inputProxy[arrayPos] + "https://api.opentopodata.org/v1/eudem25m?locations=" + latitude + "," + longitude, true);
            xmlhttp.send();

            xmlhttp.onreadystatechange = function () {

                if (this.readyState == 4 && this.status == 200) {

                    var myObj = JSON.parse(this.responseText);
                    var responseJSON = myObj.results[0].elevation;
                    
                    positionArray[counter][2] = responseJSON;
                    
                    //drawPolylineArray(latitude, longitude);

                }

                if (this.readyState == 4 && this.status != 200) {
                    makeHTTPRequest(latitude, longitude, inputProxy, arrayPos + 1);
                }

            };

        } else {
            alert("No proxy worked! Please contact Administartor BE3dARt");
            return "Error";
        }


    }









    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Add Marker with Elevation and Polyline
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    function onMapClick(e) {

        var latitude = e.latlng.lat;
        var longitude = e.latlng.lng;

        addMarkerToMap(latitude, longitude);

        /*
        makeHTTPRequest(latitude, longitude, proxy, 0);

        for (var i = 0; i < testArray.length; i++) {
            var position;

            testArray[i].on('dragend', function (event) {
                var marker = event.target;
                position = marker.getLatLng();
                marker.setLatLng(position, {
                    draggable: 'true'
                });
                marker.bindPopup("<br>Latitude: " + position.lat.toFixed(2) + " Longitude: " + position.lng.toFixed(2)).openPopup();

            });

            map.addLayer(testArray[i]);
        }
        */

    }

    map.on('click', onMapClick);
