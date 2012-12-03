function callTwitter() {
	var that = this;
	//$(document.getElementById('myQuery')) = $('#myQuery')
	var query = $(document.getElementById('myQuery')).val();

	$.getJSON('/search?q='+query, function(data){
		var results = data.results;
		var $responseDiv =  $(document.getElementById('response'));
		$responseDiv.empty();
		$.each(results, function(key, val){
			$responseDiv.append(that.template(val));
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

function template(val){
	return '<li><img src="'+val.profile_image_url+'" /><b>'+val.from_user+':</b><span>'+val.text+'</span></li>';
}

$(document).ready(function(){
	//$(document.getElementById('myQuery')) = $('#myQuery')
	$(document.getElementById('myQuery')).on('keyup', function(e){
		if (e.keyCode == 13){
			callTwitter();
		}
	});
	$(document.getElementById('myBtn')).on('click', callTwitter);
	$('.backIcon').click('click', function(){
		window.history.back();
	});
});