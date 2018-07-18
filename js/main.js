$(document).ready(function () {
 $(".item").magnificPopup({
 	type: 'image', gallery : {
 		enabled : true
 	}, 
 	removalDelay: 300,
 	mainClass: 'mfp-fade'
 });
 	// body... 	
 	let owl = $(".owl-carousel"),
      url = null,
      bgDrop = $(".bg-drop"),
      prev = $("#left"),
      next = $("#right");

  owl.owlCarousel({
    center: true,
    loop: true,
    items: 2,
    stagePadding: 20,
    margin: 0,
    responsive: {
      0: {
        items: 1,
        stagePadding: 20,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplaySpeed: 400
      },
      640: {
        margin: 0,
        items: 1.4,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplaySpeed: 400
      },
      1024: {
        margin: 0,
        items: 1.8,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplaySpeed: 400
      },
    }
  });
  owl.on("changed.owl.carousel", function(){
    setTimeout(() => {
      let centerImg = owl.find(".center").find("div"),
          url = centerImg.css('background-image');
      bgDrop.css('background-image', url);
    }, 20)
  });

  next.on("click", ()=>{
    owl.trigger("next.owl.carousel");
  });
  prev.on("click", ()=>{
    owl.trigger("prev.owl.carousel");
  });
})


	//E-mail Ajax Sen
