function callTwitter() {
	//$(document.getElementById('myQuery')) = $('#myQuery')
	var query = $(document.getElementById('myQuery')).val();

	$.getJSON('/search?q='+query, function(data){
		console.log(data);
	});
}
$(document).ready(function(){
	//$(document.getElementById('myQuery')) = $('#myQuery')
	$(document.getElementById('myQuery')).on('keyup', function(e){
		if (e.keyCode == 13){
			callTwitter();
		}
	});
	$(document.getElementById('myBtn')).on('click', callTwitter);
});