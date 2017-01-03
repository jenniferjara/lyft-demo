var input = $("#direc");
var cargarPagina = function() {
	if (navigator.geolocation) { 
		navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
	}
	$("#buscarDirec").click(nuevaDirec);

	var searchBox = new google.maps.places.SearchBox(input);
	searchBox.addListener('places_changed', function() {
	  var place = searchBox.getPlaces()[0];

	  if (!place.geometry) return;

	  if (place.geometry.viewport) {
	    map.fitBounds(place.geometry.viewport);
	  } else {
	    map.setCenter(place.geometry.location);
	    map.setZoom(16);
	  }
	});
};

var funcionExito = function(posicion) {
	var lat = posicion.coords.latitude;
    var lon = posicion.coords.longitude;
    var latLong = new google.maps.LatLng(lat, lon);
	$("#mapa").addClass("mapa");
    var myOptions = {
	    center: latLong,
	    zoom:13,
	    mapTypeId: google.maps.MapTypeId.ROADMAP,
	    mapTypeControl: false,
	    navigationControlOptions:{
	    	style: google.maps.NavigationControlStyle.SMALL
	   	}
    };
    
    var map = new google.maps.Map(document.getElementById("mapa"), myOptions);
    var marker = new google.maps.Marker({
    	position: latLong,
    	map: map,
    	title: "Hola"
    });

    var direccion = "";
	var geocoder = new google.maps.Geocoder();
	geocoder.geocode({"latLng": latLong}, mostrarDirec);
};

var mostrarDirec = function(results, status){
	if (status == google.maps.GeocoderStatus.OK){
			if (results[0]){
				direccion = results[0].formatted_address;
			}
			else{
				direccion = "No se encontro ninguna dirección";
			}
		}
		input.val(direccion);
};

var nuevaDirec = function(){
	var nuevaEntrada = input.val();
	var geocoder = new google.maps.Geocoder();
	geocoder.geocode({"address": nuevaEntrada}, nuevResult);
};

var nuevResult = function(results, status){
	if (status == google.maps.GeocoderStatus.OK){
		var newMap = {
			center: results[0].geometry.location,
			zoom:30, 
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};

		var mapa = new google.maps.Map(document.getElementById("mapa"), newMap);
		mapa.fitBounds(results[0].geometry.viewport);

		var markerOptions = {
			position: results[0].geometry.location,
			title: "Hola"
		};
        var marker = new google.maps.Marker(markerOptions);
        marker.setMap(mapa);
	}
	console.log(results[0]);
	input.val(results[0].formatted_address);
};

var funcionError = function (error) {
	alert("Hubo un error");
};

$(document).ready(cargarPagina);