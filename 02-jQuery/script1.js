function callTwitter() {
	console.log('callTwitter');
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