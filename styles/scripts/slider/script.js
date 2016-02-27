$(window).bind("load", function() {
        $("div#basic").slideViewerPro ({
		    galBorderWidth: 0,  // the border width around the main images
			thumbsTopMargin: 3, // the distance that separates the thumbnails and the buttons from the main images
			thumbsRightMargin: 3, // the distance of each thumnail respect to the next one
			thumbsBorderWidth: 0, // the border width of each thumbnail. Note that the border in reality is above, not around
			buttonsWidth: 20, // the width of the prev/next buttons that commands the thumbnails
			galBorderColor: "#ff0000", // the border color around the main images
			thumbsBorderColor: "#d8d8d8", // the border color of the thumbnails but not the current one
			thumbsActiveBorderColor: "#ff0000", // the border color of the current thumbnail
			buttonsTextColor: "#ff0000", //the color of the optional text in leftButtonInner/rightButtonInner
			thumbsBorderOpacity: 0.3, // could be 0, 0.1 up to 1.0
			thumbsActiveBorderOpacity: 1.0, // could be 0, 0.1 up to 1.0
			easeTime: 750, // the time it takes a slide to move to its position
			asTimer: 4000, // if autoslide is true, this is the interval between each slide
			thumbs: 5, // the number of visible thumbnails
			thumbsPercentReduction: 12, // the percentual reduction of the thumbnails in relation to the original
			thumbsVis: true, // with this option set to false, the whole UI (thumbs and buttons) are not visible
			leftButtonInner: "<img src='styles/scripts/slider/images/left-ui0.png'/ >", //could be an image "<img src='images/larw.gif' />" or an escaped char as "&larr";
			rightButtonInner: "<img src='styles/scripts/slider/images/right-ui0.png'/ >", //could be an image or an escaped char as "&rarr";
			autoslide: true, // by default the slider do not slides automatically. When set to true REQUIRES the jquery.timers plugin
			typo: false, // the typographic info of each slide. When set to true, the ALT tag content is displayed
			typoFullOpacity: 0.9, // the opacity for typographic info. 1 means fully visible.
			shuffle: false // the LI items can be shuffled (randomly mixed) when shuffle is true
        });
        
        
        
        
        //получаем вычисленную плагином ширину сладера
        var nSliderWidth = $('#ui0').width();
              
        //вычисляем 1/2 разницы вычисленной ширины слайдера и ширины слайдера, обрезанного экраном 
        var nX = (nSliderWidth - $(screen).width())/2 ;
        //если половина разницы существует, то сдвигаем прокрутку миниатюр на эту величину влево, 
        //тем самым выравниваем ее содржимое по центру
        if(nX>0 && nSliderWidth>1004) 
        {
        	$('#ui0').css("margin-left","-" + nX + "px");
        	//alert(nX);
        }
        
    });



jQuery.extend( jQuery.easing, // from the jquery.easing plugin
{
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	}
});

jQuery(function(){
   jQuery("div.svwp").prepend("<img src='styles/scripts/slider/images/svwloader.gif' class='ldrgif' alt='loading...'/ >"); //change with YOUR loader image path
   $(window).resize(function(){
	   location.reload();
	   //alert($(window).width());
   });
   
});

var j = 0;
