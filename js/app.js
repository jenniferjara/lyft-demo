var codigoRandom = localStorage.getItem("codigo");
var mostrarCelular = localStorage.getItem("numeroCelular");
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

	//$("#nombre").keyup(validaNombre);	
	$("#numero").val("");
	$inputs.val("");
}
var soloNumeros = function(e){
	var ascii = e.keyCode;
	if(ascii == 8 ||(ascii>=48 && ascii<= 57)){
		return true;
	} else{
		return false;
	}
}
var cambioPagina = function(){
	var long = $(this).val().length;
	if(long == 9){
		$("#next").attr("href", "signup2.html")
		$(this).attr("maxlength", "9")
		localStorage.setItem("numeroCelular", $(this).val());
	}else{
		$("#next").removeAttr("href");
	}
}
var numeroRandom = function(){
	var cant = $("#numero").val().length;
	if(cant == 9){
		var numRandom = Math.round(Math.random()*899)+100;
		alert("LAB " + numRandom);
		localStorage.setItem("codigo", numRandom);
	}
}
var alarma = function(e){
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
var verificaCodigo = function(){
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
$(document).ready(iniciar);