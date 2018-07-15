$(document).ready(function () {
 $(".item").magnificPopup({
 	type: 'image', gallery : {
 		enabled : true
 	}, 
 	removalDelay: 300,
 	mainClass: 'mfp-fade'
 });
 	// body... 	
 	$("form.callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find('succesfon').addClass('active').hide().fadeIn();
			$(th).find('succes').css('display','flex').hide().fadeIn();
			setTimeout(function() {
			$(th).find(.'succesfon').removeClass('active').fadeout();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});
})

	//E-mail Ajax Sen
