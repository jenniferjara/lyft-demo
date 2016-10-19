var cargarPagina = function() {
	if (navigator.geolocation) { 
		// también se puede usar if ("geolocation" in navigator) {}
		navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
	}
};

var funcionExito = function(posicion) {
	var lat = posicion.coords.latitude;
    var lon = posicion.coords.longitude;
    var mapa = new GMaps({
	  div: '#mapa',
	  lat: lat,
	  lng: lon
	});
	mapa.addMarker({
	  lat: lat,
	  lng: lon,
	  title: 'Lima',
	  click: function(e) {
	    alert('You clicked in this marker');
	  }
	});
};

var funcionError = function (error) {
	console.log(error);
};

$(document).ready(cargarPagina);