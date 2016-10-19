var cargarPagina = function() {
	if (navigator.geolocation) { 
		navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
	}
};

var funcionExito = function(posicion) {
	var lat = posicion.coords.latitude;
    var lon = posicion.coords.longitude;
    var latLong = new google.maps.LatLng(lat, lon);
	$("#mapa").addClass("mapa");
    var myOptions = {
	    center: latLong,zoom:14,
	    mapTypeId: google.maps.MapTypeId.ROADMAP,
	    mapTypeControl: false,
	    navigationControlOptions:{
	    	style: google.maps.NavigationControlStyle.SMALL
	   	}
    };
    
    var map = new google.maps.Map(document.getElementById('mapa'), myOptions);

    var marker = new google.maps.Marker({
    	position: latLong,
    	map: map,
    	title:"Tú estas aquí!"
    });
};

var funcionError = function (error) {
	alert("Error");
};

$(document).ready(cargarPagina);