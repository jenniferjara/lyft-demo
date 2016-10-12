//Validacion de numero telefónico
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
			$("#next").attr("href", "signup2.html")
		}else{
			$("#next").removeAttr("href");
		}
	});
	$("#next").val("");
});