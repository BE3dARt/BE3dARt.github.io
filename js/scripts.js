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

    function drawPolyline() {
        
        if (markerArray.length);
        
        
    }


    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Add Marker too map (automatically detect)
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var markerArray = [0];
    var positionArray = [
        [0], [0], [0]
    ];

    //In positionArray[2][1], the first digit represents x,y,z and the second one the marker. So if you want the 3rd marker to be 5m in altitude you would have to write positionArray[2][2] = 5;
    function addMarkerToMap(latitude, longitude, altitude) {

        var counter = 0;

        while (markerArray[counter] != null && markerArray[counter] != 0) {

            var tempPos = markerArray[counter].getLatLng();

            positionArray[0][counter] = tempPos.lat;
            positionArray[1][counter] = tempPos.lng;

            markerArray[counter].setLatLng([positionArray[0][counter], positionArray[1][counter]]);

            counter += 1;
        }

        markerArray[counter] = L.marker([latitude, longitude], {
            draggable: 'true'
        }).addTo(map);

        positionArray[0][counter] = latitude;
        positionArray[1][counter] = longitude;
        positionArray[2][counter] = altitude;

        markerArray[counter].bindPopup("Marker: " + (counter + 1) + "<br>Altitude: " + altitude).openPopup();
    }



    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Update Array and PopUp when draged
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    function update(latitude, longitude, altitude, markerNumber) {

        positionArray[2][markerNumber] = altitude;

        markerArray[markerNumber].setPopupContent("Marker: " + markerNumber + 1 + "<br>Altitude: " + altitude);

    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Make a HTTP Request and return elevation
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var proxy = ['https://cors-anywhere.herokuapp.com/', 'https://api.allorigins.win/raw?url=', 'https://yacdn.org/proxy/'];

    function getAltitude(latitude, longitude, inputProxy, arrayPos, option, markerNumber) {

        if (arrayPos <= 2) {
            var xmlhttp = new XMLHttpRequest();

            xmlhttp.open("GET", inputProxy[arrayPos] + "https://api.opentopodata.org/v1/eudem25m?locations=" + latitude + "," + longitude, true);
            xmlhttp.send();

            xmlhttp.onreadystatechange = function () {

                if (this.readyState == 4 && this.status == 200) {

                    var myObj = JSON.parse(this.responseText);
                    var tempResponse = myObj.results[0].elevation;

                    if (option == true) {
                        update(latitude, longitude, tempResponse, markerNumber);
                    } else {
                        addMarkerToMap(latitude, longitude, tempResponse);
                    }

                    //drawPolylineArray(latitude, longitude);

                }



                if (this.readyState == 4 && this.status != 200) {

                    getAltitude(latitude, longitude, inputProxy, (arrayPos + 1), option, markerNumber);

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

        getAltitude(latitude, longitude, proxy, 0, false, 9999);

    }

    function onMapMove(e) {
        
        alert("Hey: " + markerArray.length);

        var counter = 0;

        while (markerArray[counter] != null && positionArray[0][0] != 0) {

            var tempPos = markerArray[counter].getLatLng();

            if (positionArray[0][counter] > (tempPos.lat + 0.002) || positionArray[0][counter] < (tempPos.lat - 0.002)) {

                //alert("Pos Array: " + positionArray[0][counter] + " temp: " + tempPos.lat);

                positionArray[0][counter] = tempPos.lat;
                positionArray[1][counter] = tempPos.lng;

                getAltitude(tempPos.lat, tempPos.lng, proxy, 0, true, counter);

            }

            counter += 1;
        }

    }

    map.on('click', onMapClick);

    map.on('mousemove', onMapMove);
