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

    var polylineArray = [
            [0, 0],
            [0, 0]
        ];

    var popup = L.popup();

    function drawPolylineArray(latitude, longitude, altitude) {

        var marker = L.marker([latitude, longitude]).addTo(map);
        marker.bindPopup("<b>Altitude: " + altitude.toFixed(2) + "m</b><br>Latitude: " + latitude.toFixed(2) + " Longitude: " + longitude.toFixed(2)).openPopup();

        if (polylineArray[1][0] != 0) {
            polylineArray[0] = polylineArray[1];
        }

        polylineArray[1] = [latitude, longitude];

        if (polylineArray[0][0] == 0 || polylineArray[1][0] == 0) {

        } else {
            var polyline = L.polyline(polylineArray, {
                color: 'green'
            }).addTo(map);

        }

    }

    var proxy = ['https://cors-anywhere.herokuapp.com/', 'https://api.allorigins.win/raw?url=', 'https://yacdn.org/proxy/']

    function makeHTTPRequest(latitude, longitude, inputProxy, arrayPos) {

        if (arrayPos <= 2) {
            var xmlhttp = new XMLHttpRequest();

            xmlhttp.open("GET", inputProxy[arrayPos] + "https://api.opentopodata.org/v1/eudem25m?locations=" + latitude + "," + longitude);
            xmlhttp.send();

            xmlhttp.onreadystatechange = function () {

                if (this.readyState == 4 && this.status == 200) {

                    var myObj = JSON.parse(this.responseText);
                    var responseJSON = myObj.results[0].elevation;
                    drawPolylineArray(latitude, longitude, responseJSON);
                    return true;

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

    function onMapClick(e) {

        var latitude = e.latlng.lat;
        var longitude = e.latlng.lng;

        makeHTTPRequest(latitude, longitude, proxy, 0);


    }

    map.on('click', onMapClick);
