$(document).ready(function(){
	$('.backIcon').on('click', function(){
		window.history.back();
	});

	function collapseAll(){
		$('.body').slideUp();
	}

	function expand(element){
		element.find('.body').slideDown();
	}

	$('.header').click(function(){
		var element = $(this).closest('li');
		collapseAll();
		expand(element);
	});

	collapseAll();
	expand($('li:first'));
});