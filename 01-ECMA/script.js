function callTwitter() {
	var query = document.getElementById('myQuery').value;
	var that = this;

	var xhr = new XMLHttpRequest();
	xhr.open('GET', '/search?q='+query, true);
	xhr.onload = function(e) {
		var results = JSON.parse(xhr.responseText).results;
		var responseDiv =  document.getElementById('response');
		while (responseDiv.firstChild){
			responseDiv.removeChild(responseDiv.firstChild);
		}
		
		for (var val in results){
			var li = document.createElement("li");
			var img = document.createElement("img");
			img.setAttribute("src",results[val].profile_image_url);
			var b = document.createElement("b");
			b.textContent=results[val].from_user+":";
			var span = document.createElement("span");
			span.textContent=results[val].text;
			li.appendChild(img);
			li.appendChild(b);
			li.appendChild(span);
			setListener(li);
			responseDiv.appendChild(li);
		}
	}
	xhr.send(); 
}

function setListener(li){
	var imgs = li.getElementsByTagName("img");
	var img = imgs[0];
	img.setAttribute('style','opacity:0.4');
	li.onmouseover=function(event){
		event.currentTarget.getElementsByTagName("img")[0].setAttribute('style','opacity:1');
	};
	li.onmouseout=function(event){
		event.currentTarget.getElementsByTagName("img")[0].setAttribute('style','opacity:0.4');
	};
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