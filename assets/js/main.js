$(document).ready(function(){
	$(".aboutus__content").owlCarousel({
		margin:30,
		nav:true,
		navText:['⟨','⟩'],
		dots: false,
		mouseDrag:false,
		responsiveClass: true,
		responsive:{
			0:{
				items:1,
				margin:0
			},
			565:{
				items:2
			},
			768:{
				items:3
			},
			1120:{
				items:4
			}
		}
	});
	$(".quotes__slider").owlCarousel({
		items: 1,
	});
	$(".works__body").easyFilter({
		animation:'fade'
	});
});