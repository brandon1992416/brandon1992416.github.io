$(function() {


	$("#btn").click(function(){
            $("#myModal").css('display','block');
        });

	$(document).click(function(event){
		if ($(event.target).closest('#myModal').length) return;
		$('#myModal').fadeOut(5000);
	});

	$("#btn1").click(function(){
            $("#myModal1").css('display','block');
        });

	$(document).click(function(event){
		if ($(event.target).closest('#myModal1').length) return;
		$('#myModal1').fadeOut(5000);
	});

	$('.comment_slider').each(function(){
		var $li = $('li', this);
		var $prev = $('.prev', this);
		var $next = $('.next', this);
		var $pags = $('.comment_slider_pags', this);
		
		$li.first().addClass('active');

		$li.each(function() {
			$pags.append('<span></span>');
		});

		var $pag = $($pags.find('span'));

		$pag.eq($li.filter('.active').index()).addClass('active');

		$prev.click(function(){
			var index = $li.filter('.active').index();
			if(index == 0){
				index = $li.length
			};
			$li.eq(index-1).addClass('active').siblings().removeClass('active');
			$pag.eq(index-1).addClass('active').siblings().removeClass('active');
		});

		$next.click(function(){
			var index = $li.filter('.active').index();
			if(index == $li.length-1){
				index = -1
			};
			$li.eq(index+1).addClass('active').siblings().removeClass('active');
			$pag.eq(index+1).addClass('active').siblings().removeClass('active');
		});

		$pag.click(function(){
			$li.eq($(this).index()).addClass('active').siblings().removeClass('active');
			$(this).addClass('active').siblings().removeClass('active');
		});
	});

});