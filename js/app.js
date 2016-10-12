//Validacion de numero telefónico
var random = function(){
	var numRandom = Math.round(Math.random()*899)+100;
	alert("LAB " + numRandom);
}
$(document).ready(function(){
	$("#numero").keydown(function(e){
		var ascii = e.keyCode;
		if(ascii == 8 ||(ascii>=48 && ascii<= 57)){
			return true;
		} else{
			return false;
		}
	});
	$("#numero").keyup(function(e){
		var long = $(this).val().length;
		if(long === 9){
			$("#next").click(random);
			$("#next").attr("href", "signup2.html")
		}else{
			$("#next").removeAttr("href");
		}
	});
	
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