function callTwitter() {
	var query = $('#myQuery').val();

	$.getJSON('/search?q='+query, function(data){
		var results = data.results;
		var $responseDiv =  $('#response');
		$responseDiv.empty();
		$.each(results, function(key, val){
			$responseDiv.append('<li><img src="'+val.profile_image_url+'" /><b>'+val.from_user+':</b><span>'+val.text+'</span></li>');
		});
	});
}
$(document).ready(function(){
	$('#myQuery').on('keyup', function(e){
		if (e.keyCode == 13){
			callTwitter();
		}
	});
	$('#myBtn').on('click', callTwitter);
});