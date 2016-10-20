var codigoRandom = localStorage.getItem("codigo");
var mostrarCelular = localStorage.getItem("numeroCelular");
var mostrarNombre = localStorage.getItem("nombreUsuario");
var mostrarApellido = localStorage.getItem("apellidoUsuario");
var mostrarMail = localStorage.getItem("correoUsuario");

var iniciar = function(){
	$("#numero").keydown(soloNumeros);
	$("#numero").keyup(cambioPagina);
	$("#next").click(numeroRandom);
	$("#nuevoCelular").text(mostrarCelular);

	var $inputs = $("#check").children();
	$("#codUno").focus();
	$inputs.keydown(soloNumeros);
	$inputs.keyup(alarma);
	$("#verificaCod").click(verificaCodigo);
	$("#map").click(validarDatos);

	$("#viewPerfil").click(verPerfil);
	$("#miPerfil").click(verMapa);
	$("#nomUsuario").text(mostrarNombre.charAt(0).toUpperCase() + mostrarNombre.slice(1).toLowerCase());
	$("#fullName").text(mostrarNombre.charAt(0).toUpperCase() + mostrarNombre.slice(1).toLowerCase() + " " + 
						mostrarApellido.charAt(0).toUpperCase() + mostrarApellido.slice(1).toLowerCase());

	$("input").val("");
	$("input:checkbox").prop("checked", false);
}
var soloNumeros = function(e){
	var ascii = e.keyCode;
	if(ascii == 8 ||(ascii >= 48 && ascii <= 57)){
		return true;
	} else{
		return false;
	}
};
var cambioPagina = function(){
	var long = $(this).val();
	if(long.length == 9){
		$("#next").attr("href", "signup2.html")
		$(this).attr("maxlength", "9")
		localStorage.setItem("numeroCelular", $(this).val());
	}else{
		$("#next").removeAttr("href");
	}
};
var numeroRandom = function(){
	var cant = $("#numero").val().length;
	if(cant == 9){
		var numRandom = Math.round(Math.random()*899)+100;
		alert("LAB " + numRandom);
	}
	localStorage.setItem("codigo", numRandom);
};
var alarma = function(e){
	var digito = $(this).val();
	if(digito.trim().length == 1){
		$(this).next().focus();
		return true;
	}else if(e.keyCode == 8){
		$(this).prev().focus();
	}
};
var verificaCodigo = function(){
	var codUno = $("#codUno").val();
	var codDos = $("#codDos").val();
	var codTres = $("#codTres").val();
	var juntos = codUno+codDos+codTres;
	if(juntos == codigoRandom){
		$("#verificaCod").attr("href", "signup3.html")
	}else if(codUno.trim().length == 0 || codDos.trim().length == 0 || codTres.trim().length == 0){
		alert("Ingrese código completo");
	}
};
var validarDatos = function(e){
	var regexNombre = /^[a-zñáéíóúü]+$/gi;
	var regexApellido = /^[a-zñáéíóúü]+$/gi;
	var regexCorreo = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;

	var nombreUser = $("#nombre").val();
	var longNombre = nombreUser.trim().length;
	var resultNombre = regexNombre.test(nombreUser);
	localStorage.setItem("nombreUsuario", nombreUser);

	var apellidoUser = $("#apellido").val();
	var longApellido = apellidoUser.trim().length;
	var resultApellido = regexApellido.test(apellidoUser);
	localStorage.setItem("apellidoUsuario", apellidoUser);

	var mailUser = $("#mail").val();
	var longMail = mailUser.trim().length;
	var resultMail = regexCorreo.test(mailUser);
	localStorage.setItem("correoUsuario", mailUser);
	var agree = $("#checkAgree");
	
	if((longNombre >= 2 && longNombre <= 20 && resultNombre) &&
		(longApellido >= 2 && longApellido <= 20 && resultApellido) &&
		(longMail >= 5 && longMail <= 50 && resultMail) &&
		agree.prop("checked")) {
		$(this).attr("href", "mapa.html")
		return true;
	}else{
		alert("Ingrese datos correctos");
		return false;
	}
};
var verPerfil = function(){
	$("#miPerfil").remove("dNone").toggle("slow");
}
var verMapa = function(){
	$("#miPerfil").addClass("dNone").toggle("slow");
}

$(document).ready(iniciar);
