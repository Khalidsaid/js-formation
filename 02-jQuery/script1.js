function callTwitter() {
	console.log('callTwitter');
}
$(document).ready(function(){
	$('#myQuery').on('keyup', function(e){
		if (e.keyCode == 13){
			callTwitter();
		}
	});
	$('#myBtn').on('click', callTwitter);
});