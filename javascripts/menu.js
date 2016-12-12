//////cambio de color del menu///////////
$(window).scroll(function(){
	var prueba = $(this).scrollTop();
	if (prueba > 5) {
		$(".navbar").addClass("scroll");
	}
	else if (prueba < 5) {
		$(".navbar").removeClass("scroll");
	 }
});

$('.navbar-toggle').on('click',function(){
  $('body').toggleClass('fixed');
})