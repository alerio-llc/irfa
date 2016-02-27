/*Релизация добавления файлов input-file ограничение 3 файла*/
jQuery(function($){
	var canAddMore = true;
	$(".FileUpload input[type=file]").live('change', function() {
		var FileName = $(this).val().replace(/.*\\/, "");
		var nCounter = $(this).next("input[type='hidden']").val();
		$("input[name='pictures[" + nCounter + "]']").val(FileName);
		nCounter++;
		if (!$(this).hasClass('off') && nCounter < 4) {
			$('.WrapeFile').append('<div class="FileUpload"><label><input type="file" value="'+nCounter+'"><input type="hidden" class="counter" value="'+nCounter+'"><span>Обзор</span></label></div><input type="text"  class="FileName" name=pictures['+nCounter+'] disabled>');
    	}
		$(this).addClass('off');
	});
});




