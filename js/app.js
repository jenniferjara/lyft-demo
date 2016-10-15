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
			localStorage.setItem("numeroCelular", $(this).val());
		}else{
			$("#next").removeAttr("href");
			$(this).addClass("error");
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
	function alarma(){
		if($(this).val().length===1){
			$(this).next().focus();
		}
	}
	function verificaCodigo(){
		var codUno = $("#codUno").val();
		var codDos = $("#codDos").val();
		var codTres = $("#codTres").val();
		var juntos = codUno+codDos+codTres;
		if(juntos==codigoRandom){
			$("#verificaCod").attr("href", "signup3.html")
		}else{
			alert(":(")
		}
	}

	$("#numero").val("");
	
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