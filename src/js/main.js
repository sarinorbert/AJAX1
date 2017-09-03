//Create event lisener
document.getElementById('button').addEventListener('click',loadText);

function loadText(){
	// Create XHR Object
	var xhr = new XMLHttpRequest();
	// OPEN - type, url/file, async
	xhr.open('GET', 'sample.txt', true);

	// OPTIONAL - used for loaders
	xhr.onprogress = function(){
		console.log('READYSTATE: ', xhr.readyState);
	}

	xhr.onload = function(){
		if(this.status === 200){
			// JSON.parse();
			var text = this.responseText;
			document.getElementById('text').innerHTML = text;
		}
	}

	xhr.onerror = function(){
		console.log('Request Errorr...');
	}

	//Sends Request
	xhr.send();

	// HTTP Statuses
	// 200: "OK"
	// 403: "Forbidden"
	// 404: "Not Found"
}