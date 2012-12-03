$(document).ready(function(){
	var timeout;
	var $input = $(document.getElementById('search'));
	var $liste = $(document.getElementById('liste'));
	var $nbResult = $(document.getElementById('nbResult'));
	$input.keyup(function(){
		window.clearTimeout(timeout);
		timeout = window.setTimeout(function(){
			var val = $input.val();
			$liste.empty();
			$nbResult.html('-');
			if (val!=''){
				$.get('/city?city='+val, function(data){
					$nbResult.html(data.length);
					if (data.length<20){				
						for (var val, i = 0, length=data.length; i < length; i++){
							$liste.append('<li>'+data[i]+'</li>');
						}
					}
				});
			}else{
				
			}
		}, 500);
		
	});
	$('.backIcon').on('click', function(){
		window.history.back();
	});
});