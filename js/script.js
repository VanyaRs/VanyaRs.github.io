$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find('succesfon').addClass('active').hide().fadeIn();
			$(th).find('succes').css('display','flex').hide().fadeIn();
			setTimeout(function() {
				$(th).find(.'succesfon').removeClass('active').fadeout();
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});