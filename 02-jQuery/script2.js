function callTwitter() {
	var query = $('#myQuery').val();

	$.getJSON('/search?q='+query, function(data){
		console.log(data);
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