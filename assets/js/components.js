$(document).ready(function(){
	//burger

	$('.nav__burger').click(function(){
        $('.nav__burger,.nav__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.nav__menu').click(function(){
    	$('.nav__burger,.nav__menu').removeClass('active');
        $('body').removeClass('lock');
    });
    
	//якори

	$("a.scrollto").click(function(){
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		jQuery("html:not(:animated),body:not(:animated)").animate({
			scrollTop: destination
		},800);
		return false;
	});

	//popup(modal)

	$("a.modal-btn").click(function(e){
		e.preventDefault();
		var destinationPopup = $(this).attr("href");
		$(destinationPopup).addClass("show");
		$(destinationPopup+".popup__close").click(function(){
			$(destinationPopup).removeClass("show");
		});
		$(destinationPopup+".popup__overlay").click(function(){
			$(destinationPopup).removeClass("show");
		});
	});

	//sec header




 	if($(".nav").hasClass("_header__nav"))
 	{
		$(window).scroll(function () {
	        var S = $("._header__nav").offset().top - $(window).scrollTop();
	        if(S <= -60.0)
	        {
	            $("._header__shadow").addClass("active");
	        }else{
	            $("._header__shadow").removeClass("active");
	        }
		});

 	}

	//btnUP
	$(window).scroll(function(){
		let Q = $(".header").offset().top - $(window).scrollTop();
		if(-Q >= $(".header").outerHeight())
		{
			$(".btn-up").addClass("active");
		}
		else{
			$(".btn-up").removeClass("active");
		}
	});
	$("a.btn-up").click(function(e){
		e.preventDefault();
		jQuery("html:not(:animated),body:not(:animated)").animate({
			scrollTop: 0
		},800);
	});
});