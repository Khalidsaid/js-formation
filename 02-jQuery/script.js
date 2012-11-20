function callTwitter() {
	var query = $('#myQuery').val();

	$.getJSON('/search?q='+query, function(data){
		var results = data.results;
		var $responseDiv =  $('#response');
		$responseDiv.empty();
		$.each(results, function(key, val){
			$responseDiv.append('<li><img src="'+val.profile_image_url+'" /><b>'+val.from_user+':</b><span>'+val.text+'</span></li>');
		});
		setListeners();
	});
}

function setListeners(){
	$('li img').css('opacity',0.4);
	$('li').hover(function(e){
		$(this).find('img').css('opacity',1);
	},function(e){
		$(this).find('img').css('opacity',0.4);
	});
}

$(document).ready(function(){
	$('#myQuery').on('keyup', function(e){
		if (e.keyCode == 13){
			callTwitter();
		}
	});
	$('#myBtn').on('click', callTwitter);
	$('.backIcon').click('click', function(){
		window.history.back();
	});
});