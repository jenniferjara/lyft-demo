$(document).ready(function(){
	var codigoRandom = localStorage.getItem("codigo");
	var mostrarCelular = localStorage.getItem("numeroCelular");

	$("#numero").keydown(soloNumeros);
	$("#numero").keyup(cambioPagina);
	$("#next").click(numeroRandom);
	$("#nuevoCelular").text(mostrarCelular);

	var $inputs = $("#check").children();
	$("#codUno").focus();
	$inputs.keydown(soloNumeros);
	$inputs.keyup(alarma);

	$("#verificaCod").click(verificaCodigo);

	//$("#nombre").keyup(validaNombre);	

	function soloNumeros(e){
		var ascii = e.keyCode;
		if(ascii == 8 ||(ascii>=48 && ascii<= 57)){
			return true;
		} else{
			return false;
		}
	}
	function cambioPagina(){
		var long = $(this).val().length;
		if(long == 9){
			$("#next").attr("href", "signup2.html")
			$(this).attr("maxlength", "9")
			localStorage.setItem("numeroCelular", $(this).val());
		}else{
			$("#next").removeAttr("href");
		}
	}
	function numeroRandom(){
		var cant = $("#numero").val().length;
		if(cant == 9){
			var numRandom = Math.round(Math.random()*899)+100;
			alert("LAB " + numRandom);
			localStorage.setItem("codigo", numRandom);
		}
	}
	function alarma(e){
		if($(this).val().length === 1){
			$(this).next().focus();
			$(this).attr("maxlength", "1");
		}else{
			$(this).attr("maxlength", "1");
		}
		if(e.keyCode == 8){
			$(this).prev().focus();
		}
	}
	function verificaCodigo(){
		var codUno = $("#codUno").val();
		var codDos = $("#codDos").val();
		var codTres = $("#codTres").val();
		var juntos = codUno+codDos+codTres;
		if(juntos == codigoRandom){
			$("#verificaCod").attr("href", "signup3.html")
		}else if(codUno == null || codDos == null || codTres == null){
			alert("Ingrese código completo");
		}
	}

	/*function validaNombre(){
		var largo = $(this).val().trim().length == 0;
		var letras = /^[A-Za-z]+$/gi;
		var soloLetras = letras.test($(this));
		if(largo && soloLetras){
			return true;
			alert(":)");
		}else{
			return false;
			alert(":(");
		}
	}
	function ValidateEmail() {
        var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        return expr.test();
    };*/

    //Geolocation
    /*function obtener(){
    	var configuracion = {
    		enableHightAccuracy: true,
    		timeout: 1000,
    		maximumAge: 6000
    	};

    	navigator.geolocation.getCurrentPosition(mostrarPosicion, casoError, configuracion);
    }
    function mostrarPosicion(posicion){
    	var latitud = posicion.coords.latitude;
    	var longitud = posicion.coords.longitude;
    	var miMapa = "http://maps.google.com/maps/api/statismap7center"+", "+latitud+", "+longitud;
    	$("#miMapa").append("img").attr("src","");
    }
    function casoError(error){
    	if(error.code == 1){
    		alert("Debe permitir el uso de la geolocalización");
    	} else if(error.code == 2){
    		alert("Perdon, no podemos hallar ubicación");
    	}else if(error.code == 3){
    		alert("El tiempo ha expurado");
    	}
    }*/

	$("#numero").val("");
	$inputs.val("");
});

/*var iniciar = function(){
	var $celular = $("#numero");
	var $next = $("#next");
	$celular.keydown(numeros);
	$celular.keyup(cantidad);
}
var random = function(){
	var numRandom = Math.round(Math.random()*899)+100;
	alert("LAB " + numRandom);
}
var numeros = function(e){
	var ascii = e.keyCode;
	if(ascii == 8 ||(ascii>=48 && ascii<= 57)){
		return true;
	} else{
		return false;
	}
}
var cantidad = function(){
	var long = $(this).val().length;
	if(long === 9){
		$("#next").click(random);
		$("#next").attr("href", "signup2.html")
	}else{
		$("#next").removeAttr("href");
		$(this).addClass("error");
	}
}

$(document).ready(iniciar);*/