//alert("Hello Lei <3");
$(document).ready(function () {
	
	$("#send").click(function () {
		var inputtext = $("#inputbox").val();
		$("#chatboxbody").append(inputtext + "<br/>");
		//????
	$("#inputbox").val("");
	}); 



});

