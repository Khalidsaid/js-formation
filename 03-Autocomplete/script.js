$(document).ready(function(){
	var timeout;
	$('#search').keyup(function(){
		window.clearTimeout(timeout);
		timeout = window.setTimeout(function(){
			var val = $('#search').val();
			$.get('/city?city='+val, function(data){
				$('#nbResult').html(data.length);
				$('#liste').empty();
				if (data.length<20){				
					for (var val, i = 0, length=data.length; i < length; i++){
						$('#liste').append('<li>'+data[i]+'</li>');
					}
				}
			});
		}, 500);
		
	});
	$('.backIcon').click('click', function(){
		window.history.back();
	});
});