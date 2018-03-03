$(document).ready(function(){
	var speed=1000;
	pauseat=3000;
	var $slideframe= $('#slider');
	var $slideinside= $slideframe.find('.slides');
	var $slidein= $slideinside.find('.slide');
	presentslide=1;
	var slideout;
	function resumeslider(){
	slideout=setInterval(function(){
		
										$('.slides').animate({'margin-bottom': '-=1200px'},speed,function(){
										presentslide++;		
										if (presentslide == $slidein.length-2)
										{
	
											presentslide=1;
											$slideinside.css('margin-left', 0);
										}
										});
									   }, pauseat);
									}
	function pauseslider(){
			clearInterval(slideout)
		}
		$slideframe.on('mouseenter',pauseslider).on('mouseleave',resumeslider);
		resumeslider();
	$('#choir').hover(function() {
        $(this).find('.dwnimg').hide();
        $(this).find('.choirdetails').show();
    }, function() {
        $(this).find('.choirdetails').hide();
        $(this).find('.dwnimg').show();
		});
		
		
		});