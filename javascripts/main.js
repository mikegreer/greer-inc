$(function() {

    var allPanels = $('.project-description').hide();
    
    $('.work-stripe').mouseover(function(){
		$(this).css('opacity', '1');
	});
	$('.work-stripe').mouseout(function(){
		$(this).css('opacity', '0.7');
	});

    //about menu
    $('#about-link').click(function(){
		var content = $('#about-content');
		if(content.is('.open-work')){
			content.slideUp(400);
			content.removeClass('open-work');
		}else{
			content.slideDown(400);
			content.addClass('open-work');
		}
    });

    //open & close each section
	$('.work-stripe').click(function(){
		if($(this).is('.open-work')){
			//clicked on open panel
			$(this).next().slideUp(500);
			$(this).removeClass('open-work');
		}
		else{
			//clicked a closed panel
			var workToOpen = $(this);
			workToOpen.next().slideDown(400, function(){
				$.scrollTo(workToOpen, 400);
			});
			workToOpen.addClass('open-work');
		}
	});
});