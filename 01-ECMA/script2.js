function callTwitter() {
	var query = document.getElementById('myQuery').value;

	var xhr = new XMLHttpRequest();
	xhr.open('GET', '/search?q='+query, true);
	xhr.onload = function(e) {
		console.log(xhr.responseText)
	}
	xhr.send(); 
}
function init(){
	document.getElementById('myQuery').addEventListener('keyup', function(e){
		if (e.keyCode==13){
			callTwitter();
		}
	})
	document.getElementById('myBtn').addEventListener('click', callTwitter);
}

document.addEventListener("DOMContentLoaded", init, false);