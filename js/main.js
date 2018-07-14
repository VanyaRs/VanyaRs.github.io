$(document).ready(function () {
 $(".item").magnificPopup({
 	type: 'image', gallery : {
 		enabled : true
 	}, 
 	removalDelay: 300,
 	mainClass: 'mfp-fade'
 });
 	// body... 	
 	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
})

	//E-mail Ajax Sen
