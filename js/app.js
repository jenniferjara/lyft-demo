$(document).ready(function(){
	$("#numero").keydown(soloNumeros);
	$("#numero").keyup(paginaDos);
	$("#next").click(numeroRandom);
	var codigoRandom = localStorage.getItem("codigo");
	
	function soloNumeros(e){
		var ascii = e.keyCode;
		if(ascii == 8 ||(ascii>=48 && ascii<= 57)){
			return true;
		} else{
			return false;
		}
	}
	function paginaDos(e){
		var long = $(this).val().length;
		if(long == 9){
			$("#next").attr("href", "signup2.html")
		}else{
			$("#next").removeAttr("href");
			$(this).addClass("bg-danger");
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