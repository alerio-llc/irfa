$(document).ready(function(){
 
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100 && $(this).width()>1260) 
		{
		    $('.Scrollup').fadeIn();
		} 
		else 
		{
		    $('.Scrollup').fadeOut();
		}
	});
	
	$(window).resize(function(){
	    if($(this).width()<1261)
	    {
	    	$('.Scrollup').fadeOut();
	    }
	    else
	    {
	    	$('.Scrollup').fadeIn();
	    }
	});
	
	 
	$('.Scrollup').click(function()
	{
	    $("html, body").animate({ scrollTop: 0 }, 600);
	    return false;
	});
 
});