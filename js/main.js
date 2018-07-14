$(document).ready(function () {
 $(".item").magnificPopup({
 	type: 'image', gallery : {
 		enabled : true
 	}, 
 	removalDelay: 300,
 	mainClass: 'mfp-fade'
 });
 	// body... 	
})
$(document).ready(function() {

	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form").trigger("reset");
		});
		return false;
	});
	
});