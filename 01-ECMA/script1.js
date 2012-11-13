function callTwitter() {
	console.log("callTwitter");
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