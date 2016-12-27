var cargarPagina = function() {
	if (navigator.geolocation) { 
		navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
	}
	$("#buscarDirec").click(nuevaDirec);
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
    	map: map
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
		$("#direc").val(direccion);
};
var nuevaDirec = function(){
	var nuevaEntrada = $("#direc").val();
	var geocoder = new google.maps.Geocoder();
	geocoder.geocode({"address": nuevaEntrada}, nuevResult);
};
var nuevResult = function(results, status){
	if (status == google.maps.GeocoderStatus.OK){
		var newMap = {
			center: results[0].geometry.location,
			zoom:20, 
			mapTypeId: google.maps.MapTypeId.ROADMAP,
		};

		var mapa = new google.maps.Map(document.getElementById("mapa"), newMap);
		mapa.fitBounds(results[0].geometry.viewport);

		var markerOptions = {
			position: results[0].geometry.location
		}
        var marker = new google.maps.Marker(markerOptions);
        marker.setMap(mapa);
	}
	$("#direc").val(results[0].formatted_address);
};
var funcionError = function (error) {
	alert("Error");
};

$(document).ready(cargarPagina);