window.onload= function(){

	function funcBefore(){
		console.log("Wait");
	}
	function funcSuccess(data){
		console.log("success");
	}


	var btn = document.querySelector("#send");
		btn.onclick = function(){
		var name = document.querySelector("[name=name]");
		var mail = document.querySelector("[name=mail]");
		var text = document.querySelector("[name=text]");

		var str = {name: name.value, mail: mail.value, text: text.value};
		console.log(str);

		$.ajax({
			url: "mail.php",
			type: "POST",
			data: str,
			dataType:"html",
			beforeSend: funcBefore,
			success: funcSuccess
		});

	}

}